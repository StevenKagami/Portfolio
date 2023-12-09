import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/OneClick.jpg' 
import IMG2 from '../../assets/SimpleCalculator.png'
import IMG3 from '../../assets/WeatherApp.png'
import IMG4 from '../../assets/SimpleTodolistApplication.jpg' 
import IMG5 from '../../assets/TicTacToeGame.jpg'
import IMG6 from '../../assets/TwitterClone.png'
import IMG7 from '../../assets/PizzaApp.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'OneClick',
    github: 'https://github.com/StevenKagami/EatClick',
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Simple Calculator',
    github: 'https://github.com/StevenKagami/Simple-Calculator',
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather App',
    github: 'https://github.com/StevenKagami/Weather-App',
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Simple ToDolist Application',
    github: 'https://github.com/StevenKagami/Simple-ToDoList-Application',
    demo: 'https://dribbble.com'

  },
  {
    id: 5,
    image: IMG5,
    title: 'TicTacToe Game',
    github: 'https://github.com/StevenKagami/TicTacToe-Game-',
    demo: 'https://dribbble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'TwitterClone',
    github:'https://github.com/StevenKagami/Twitter-clone',
    demo: 'https://dribbble.com'
  },
  {
    id: 7,
    image: IMG7,
    title: 'PizzaApp',
    github:'https://github.com/StevenKagami/PizzaRestaurant-Application',
    demo: 'https://dribbble.com'
  }
 
 
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) =>{
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
             {/*} <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>*/}
              </div>
            </article>
            
            
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio