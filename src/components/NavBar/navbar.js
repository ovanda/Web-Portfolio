import React from 'react'
import './navbar.css'
import logo from '../../assests/mail.png';
import {Link} from 'react-scroll'
import { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";


const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);

  return (
    <nav className='navbar'>

      <h1 className='logo'>Victor</h1>
      
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>

      </div>

      <button className='desktopMenuBtn' onClick={()=> {
        document.getElementById('contact-page').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={logo} alt='' className='desktopMenuImg'/>Contact Me
      </button>

      <HiMenuAlt3 className='mobMenu' onClick={()=> setShowMenu(!showMenu)} />

      <div className='navMenu' style={{display: showMenu? 'flex':'none' }} >
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Contact</Link>
      </div>

    </nav>
  )
}

export default Navbar;
