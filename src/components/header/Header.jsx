import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'  
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header> 
      <div className="container header__container">
        <h3>Hello, I'm</h3>
        <h1>Steven Jorgensen</h1>
        <h5 align="center">
          <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=A+Passionate!+👋;+Software+Engineer+!;" />
        </h5>
        <CTA/>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div> 
    </header>
  )
}

export default Header