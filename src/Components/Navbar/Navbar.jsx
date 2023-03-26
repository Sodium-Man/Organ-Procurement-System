import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {GiHeartOrgan} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'


const Navbar = () => {
  const [active, setActive] = useState("navBar")
  //Function to toggle navbar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  //Function to remove navbar
  const removeNavbar = ()=>{
    setActive('navBar')
  }

  return(
  <section className='navBarSection'>
    <header className='header flex'>
      <div className='logoDiv'>
        <a href="#" className='logo flex'>
          <h1><GiHeartOrgan className='icon'/>Organ Procurement System</h1>
        </a>
      </div>

      <div className={active}>
        <ul className='navLists flex'>
          <li className='navItem'>
            <a href='#' className='navLink'>Home</a>
          </li>
          <li className='navItem'>
            <a href='#' className='navLink'>About</a>
          </li>
          <li className='navItem'>
            <a href='#' className='navLink'>Transplant</a>
          </li>
          <li className='navItem'>
            <a href='#' className='navLink'>Contact</a>
          </li>

            <button className='btn'>
              <Link to='/login'>LOGIN</Link>
            </button>
          </ul>

        <div onClick={removeNavbar}
        className="closeNavbar">
          <AiFillCloseCircle className='icon'/></div>
      </div>

      <div onClick={showNav}
      className="toggleNavbar">
        <TbGridDots className='icon'/>
      </div>
    </header>
  </section>
  )
}

export default Navbar
