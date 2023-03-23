import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from './About/About'
import Features from './Features/Features'
import Intro from './Intro/Intro'
import Motive from './Motive/Motive'

const NavPage = () => {
  return (
    <div className='NavPage'>
        <Routes>
            <Route path='/' element={<Intro/>}/>
            <Route path='/Features' element={<Features/>}/>
            <Route path='/Motive' element={<Motive/>}/>
            <Route path='/About' element={<About/>}/>
        </Routes>
    </div>
  )
}

export default NavPage