import React from 'react'
import './footer.css'
import {AiFillGithub} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Let's Connect</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/StevenKagami"><AiFillGithub/></a>
        <a href="https://www.instagram.com/stevenjorgensenn/"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/stevenjorgensenn/"><AiFillLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <medium>
          &copy; Steven Jorgensen 2023. All right reserved.
        </medium>
      </div>
    </footer>
  )
}

export default Footer