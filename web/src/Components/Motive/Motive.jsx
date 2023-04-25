import React from 'react'
import './Motive.css'
import Spline from '@splinetool/react-spline';
import {motion} from 'framer-motion'
// import { useParallax } from 'react-scroll-parallax';

const Motive = () => {
  // const parallax = useParallax<HTMLDivElement>({
  //   rotate: [0, 360],
  // });
  return (
    <div className='Motive'>
      <div className='mot1'>

          <div
          className='m-left'>
          
          <Spline scene="https://prod.spline.design/gA6ncek2c6EWBSDF/scene.splinecode" />

          </div>
          <div className='m-right'>
            <motion.div
            // initial={{right:'-50%'}}
            // whileInView={{right:'-8%'}}  
            // ref={parallax.ref}
            // transition={{duration:3,type:'spring'}}
            className='m-r1'>

              <span>Research</span>
              <span>Blind <span style={{color:'rgb(73, 226, 132)'}}>Persons</span> </span>
              <span>
              According to a report by the World Health Organization,
            there are currently 284 million people in the world who
              are visually impaired, and 39 million people are blind.
              It is possible to say that 60% of the blindness in the 
              world can be cured, and 20% can be prevented. Looking 
              at the age range, it can be said that 60% of the visually 
              impaired are aged 65 and over, and there are 19 million 
              visually impaired children. Our project is specially 
              created for the visually impaired persons and blind 
              persons, for whom it can act as a third eye, 
              that is why it is named as “Third i”.
              </span>
            </motion.div>
          </div>
      </div>



      <div className='mot2'>

        <div className='m-right'>
          <motion.div
          initial={{left:'-50%'}}
          whileInView={{left:'10%'}}  
                
          transition={{duration:3,type:'spring'}}
          className='m-r1'>

            <span>Motive</span>
            <span>Blind <span style={{color:'rgb(73, 226, 132)'}}>Persons</span> </span>
            <span>
            
              The “Third i” project makes the visually 
              impaired persons to feel like a normal person. 
              Till now the project is in its very beginning state, 
              in future we are planning to add the concepts like edge detection, 
              object detection, voice detection, face detection and a lot more. 
              The concept of edge detection is used to recognize the page or 
              document and capture it automatically. The object detection 
              is used to recognize the physical object that are 
              presented around them and it is also capable of detecting the 
              distance of the objects, so that the visually impaired persons 
              can be benefited. The voice detection is use to recognize the voice, 
              so that they can use their voice as an input. The face detection is 
              used to recognize the individuals face and their names will 
              be saved with their face image, so that if they meet again, it can recognize 
              him/her name by the previously collected data.
            </span>
          </motion.div>
        </div>



        <motion.div
        initial={{transform: 'rotate(10deg)'}}
        whileInView={{transform:'rotate(10deg)'}}  
              
        transition={{duration:1,type:'spring'}}
        className='m-left'>

        <Spline scene="https://prod.spline.design/L-jWw8kqXE8ElZey/scene.splinecode" />
        </motion.div>
      </div>


    </div>
  )
}

export default Motive