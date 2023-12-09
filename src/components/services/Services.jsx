import React from 'react'
import './service.css'
import {FaCheck} from 'react-icons/fa'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front-End Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Plan, design, build, and implement the user interface systems of application</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Collaborate with Back-End developers and web designers to improve usability</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Maintain and improve the application</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Stay up-to-date on emerging technologies</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Get feedback from, and build solutions for, users and customers</p>
            </li>
          </ul>
        </article>
        {/* Web Development*/} 
        <article className="service">
          <div className="service__head">
            <h3>Software Engineer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Execute full software development life cycle (SDLC)</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Integrate software components into a fully functional software system</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Document and maintain software functionality</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Comply with project plans and industry standards</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Troubleshoot, debug and upgrade existing systems</p>
            </li>
          </ul>
        </article>
        {/* Grow */}
        <article className="service">
          <div className="service__head">
            <h3>Back-End Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Designing and implementing RESTful APIs</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Optimizing the performance of applications for full-scale production deployments</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Integrating user-facing elements developed by front-end developers with server-side logic</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Writing clean, scalable & efficient code</p>
            </li>
            <li>
              <FaCheck className='service__list-icon'/>
              <p>Troubleshooting and debugging to optimize performance</p>
            </li>
          </ul>
        </article>
        {/* Grow */}
      </div>
    </section>
  )
}

export default Services

