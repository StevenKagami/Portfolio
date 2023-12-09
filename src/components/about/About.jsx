import React from 'react'
import './about.css'
import ME from '../../assets/Programmer.gif'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
        </div>

        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Education</h5>
          <small>Binus University 2021 - Present</small>
          </article>

          <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Major</h5>
          <small>Computer Science | Software Engineering</small>
          </article>

          <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>6+ Completed</small>
          </article>
        </div>

        <p>
          Hi I'm Steven Jorgensen undergraduate computer science student at Binus University.I'm from Semarang, Indonesia. enthusiastic full-stack developer and software Engineer.  I'm very fluid and never stop learning about computer science,computer engineering, and technologies. adapting to new situations.This attitude propelled me on an endless journey to learn a variety of skills, including Software Development, front-end and back-end development, and many more.When I encounter a new problem, I usually conduct extensive research on it in order to comprehend it and discover cutting-edge and innovative approaches for dealing with similar problems in the future.Embrace the learning curves and failures and discomfort. Open your mind and let curiosity and optimism drive you. Believe in yourself, and also have fun along the way.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About