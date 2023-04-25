import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import {AiFillEye} from 'react-icons/ai';
import {NavLink} from 'react-router-dom'
import { useEffect } from 'react';

const Nav = () => {

  const [Active, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!Active);
  };
  useEffect(() => {
    document.body.classList.toggle('modal-open', Active);
    // document.div.className.add('new',Active)
  },[Active])
    
    const active=({isActive})=>{
      return{
        color: isActive?'red':'color: hsla(0,0%,100%,0.4)'
      }
    }

    

  return (
    <div className='Nav' id='Home'>
        <nav>

        <ul>
           <NavLink to="" className='Link'>  <li className='nav-icon'><AiFillEye size={35} color="rgb(73, 226, 132)"/></li></NavLink>
            <li className='nav-content'>
                <ul>
                   <NavLink to="/Features" className="Link"> <li>Features</li></NavLink>
                   <NavLink to="/Motive" className='Link'>  <li>Motive</li></NavLink>
                   <NavLink to="" className='Link'> <li>Docs</li></NavLink>
                   <NavLink to="/About" className='Link'> <li>About us</li></NavLink>
                   <NavLink to="" className='Link'> <li>Community </li></NavLink>
                </ul>
            </li>
            <li><button className='nav-button'>Download</button></li>
            {/* <li><button className={Active ? 'nav-button': 'nav-button dark'} 
      onClick={toggleClass} >Dark mode</button></li> */}
        </ul>
        </nav>
    </div>
  )
}

export default Nav