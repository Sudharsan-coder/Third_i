import React from 'react'
import './Features.css'
import {features} from '../../data'

const Features = () => {
  


  return (
    <div className='f'>
      <div className='title'>
        <span className='t1'>Tools to express your creativity</span>
        <span className='t2'>3D opens a new door for creativity. A solid set of features that<br></br> 
        will help you create your best designs.</span>
      </div>

    <div className='Features'>
      <div className='f-cards'>
          {/* <div class="card">
              <div class="card2">
                <span><img className='imgs' src={img1} alt="" srcset="" /></span>
              </div>
          </div> */}
        {features.map(data=>(<div class="card">
            <div class="card2">

              <div class='c1'>
                  <span><img className='imgs' src={data.img} alt="" srcset="" /></span>
              </div>

              <div className='c2'>
                <span className='sub-title'>{data.sub}</span>
                <span className='describe'>{data.des}</span>
              </div>

            </div>
        </div>))}
        {/* <div class="card">
            <div class="card2">
            </div>
        </div>
        <div class="card">
            <div class="card2">
            </div>
        </div> */}

      </div>
    </div>
    </div>
  )
}

export default Features