import React from 'react'
import {motion} from 'framer-motion'
import Spline from '@splinetool/react-spline';
import './Intro.css'
import imgq from '../../img/bbblurry.png'
import img from '../../img/graph.png'

const Intro = () => {
  return (
   <div className='Intro'>
        
    <div className='intro'>
        <div className='a-right'>
          <div class='svg'>
            <img src={img} alt="" />
          </div>
          <motion.div
          initial={{left:'-50%'}}
          whileInView={{left:'15%'}}  
                
          transition={{duration:3,type:'spring'}}
           className='a-r'>

            <span>Third i</span>
            <span>Scanner <span style={{color:'rgb(73, 226, 132)'}}>& Voice</span> </span>
            <span>
            The visually challenged will benefit
           greatly from this app,  which is incredibly 
           cost-effective given that all that is needed  is a smartphone with a camera..

        
            </span>
            <div data-tooltip="Size: 20Mb" class="button">
              <div class="button-wrapper">
                <div class="text">Download apk</div>
                  <span class="icon">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" height="2em" width="2em" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" fill="none"></path></svg>
                  </span>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div 
               initial={{right:'-10%'}}
               whileInView={{right:'0%'}} 
        transition={{duration:3,type:'spring'}}
        className='a-left'>
            {/* <img src={img} alt="" srcet="" /> */}
            {/* <Spline scene="https://prod.spline.design/gA6ncek2c6EWBSDF/scene.splinecode" /> */}
            <img src="https://assets.codepen.io/2621168/svgtest.svg" alt="Phone illustration"></img>
        </motion.div>
    </div>
   </div>
    
  )
}

export default Intro