import cv2 as cv 
import numpy as np
import pyttsx3
import face_recognition
import os
from datetime import datetime
import time

def rate(r):
    voice.setProperty("rate",r)
    
def change(voice):
    voices=voice.getProperty("voices")
    voice.setProperty("voice",voices[1].id)
    
def speak(text):
    voice.say(text)
    voice.runAndWait()

voice=pyttsx3.init()
change(voice)

# Distance constants 
KNOWN_DISTANCE = 55
PERSON_WIDTH = 17 
MOBILE_WIDTH = 3.0 

# Object detector constant 
CONFIDENCE_THRESHOLD = 0.4
NMS_THRESHOLD = 0.3

# colors for object detected
COLORS = [(255,0,0),(255,0,255),(0, 255, 255), (255, 255, 0), (0, 255, 0), (255, 0, 0)]
GREEN =(0,255,0)
BLACK =(0,0,0)

# defining fonts 
FONTS = cv.FONT_HERSHEY_COMPLEX

# getting class names from classes.txt file 
class_names = []
with open("classes.txt", "r") as f:
    class_names = [cname.strip() for cname in f.readlines()]
    
#  setting up opencv net
yoloNet = cv.dnn.readNet('yolov4-tiny.weights', 'yolov4-tiny.cfg')

model = cv.dnn_DetectionModel(yoloNet)
model.setInputParams(size=(416, 416), scale=1/255, swapRB=True)

# object detector funciton /method
def object_detector(image):
    classes, scores, boxes = model.detect(image, CONFIDENCE_THRESHOLD, NMS_THRESHOLD)
    
    # creating empty list to add objects data
    data_list =[]
    
    for (classid, score, box) in zip(classes, scores, boxes):
        # define color of each, object based on its class id 
        color= COLORS[int(classid) % len(COLORS)]
    
        label = "%s : %f" % (class_names[classid[0]], score)

        # draw rectangle on and label on object
        cv.rectangle(image, box, color, 2)
        cv.putText(image, label, (box[0], box[1]-14), FONTS, 0.5, color, 2)
    
        # getting the data 
        # 1: class name  2: object width in pixels, 3: position where have to draw text(distance)
        if classid ==0: # person class id 
            data_list.append([class_names[classid[0]], box[2], (box[0], box[1]-2)])
            
        elif classid ==67:
            data_list.append([class_names[classid[0]], box[2], (box[0], box[1]-2)])
       
        # if you want inclulde more classes then you have to simply add more [elif] statements here
        # returning list containing the object data. 
    return data_list

def focal_length_finder (measured_distance, real_width, width_in_rf):
    focal_length = (width_in_rf * measured_distance) / real_width
    return focal_length

# distance finder function 
def distance_finder(focal_length, real_object_width, width_in_frmae):
    distance = (real_object_width * focal_length) / width_in_frmae
    return distance

# reading the reference image from dir 
ref_person = cv.imread('ReferenceImages/image14.png')
ref_mobile = cv.imread('ReferenceImages/image4.png')

mobile_data = object_detector(ref_mobile)
mobile_width_in_rf = mobile_data[1][1]

person_data = object_detector(ref_person)
person_width_in_rf = person_data[0][1]

print(f"Person width in pixels : {person_width_in_rf} mobile width in pixel: {mobile_width_in_rf}")

# finding focal length 
focal_person = focal_length_finder(KNOWN_DISTANCE, PERSON_WIDTH, person_width_in_rf)

focal_mobile = focal_length_finder(KNOWN_DISTANCE, MOBILE_WIDTH, mobile_width_in_rf)

#face recognition
path = "Known_faces"
images = []
classNames = []
myList = os.listdir(path)
print(myList)

for cl in myList:
    curImg = cv.imread(f'{path}/{cl}')
    images.append(curImg)
    classNames.append(os.path.splitext(cl)[0])
print(classNames)

encodeListKnown =[]

for img in images:
    img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
    encode = face_recognition.face_encodings(img)[0]
    encodeListKnown.append(encode)

print('Encoding Complete')
previous_time=0.0
cap = cv.VideoCapture(0)


while True:
    
    ret, frame = cap.read()

    #face recognition
    imgS = cv.resize(frame, (0, 0), None, 0.25, 0.25)
    imgS = cv.cvtColor(imgS, cv.COLOR_BGR2RGB)

    facesCurFrame = face_recognition.face_locations(imgS)
    encodesCurFrame = face_recognition.face_encodings(imgS, facesCurFrame)
    name=None
    
    for encodeFace, faceLoc in zip(encodesCurFrame, facesCurFrame):
        matches = face_recognition.compare_faces(encodeListKnown, encodeFace)
        faceDis = face_recognition.face_distance(encodeListKnown, encodeFace)

        matchIndex = np.argmin(faceDis)

        if matches[matchIndex]:
            name = classNames[matchIndex].upper()
            # print(name)
        
    #distance
    current_time=time.time()
    if name in classNames:
        if current_time-previous_time>60: 
            previous_time=current_time
            rate(190)
            speak(f'{name} is here')
            voice.runAndWait()
    else:
        distance=0
        data = object_detector(frame) 
        
        for d in data:
            if d[0] =='person':
                distance = distance_finder(focal_person, PERSON_WIDTH, d[1])
                x, y = d[2]
            elif d[0] =='cell phone':
                distance = distance_finder (focal_mobile, MOBILE_WIDTH, d[1])
                x, y = d[2]

            cv.rectangle(frame, (x, y-3), (x+150, y+23),BLACK,-1 )
            cv.putText(frame, f'Dis: {round(distance,2)} inch', (x+5,y+13), FONTS, 0.48, GREEN, 2)
        
        if(distance<40 and distance!=0):
            rate(225)
            speak('danger')
            speak('danger')
            speak('danger')
            voice.runAndWait()
        elif(distance<50 and distance!=0):
            rate(150)
            speak('danger')
            voice.runAndWait()
        
    if cv.waitKey(1) & 0xFF == ord('s'):
        break
    cv.imshow('frame',frame)
    
   
cap.release()
cv.destroyAllWindows()