import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio_myNotes.png"
import IMG2 from "../../assets/portfolio_yourNote.png"
import IMG3 from "../../assets/portfolio_ToDoList.png"
import IMG4 from "../../assets/portfolio_DailyJournal.png"
import IMG5 from "../../assets/portfolio_WeatherApp.png"
import IMG6 from "../../assets/portfolio_SimonGame.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "myNotes",
    github: "https://github.com/codethat19/React-Notes-fullStack",
    demo: "https://mynotes-w2u3.onrender.com/"
  },
  {
    id: 2,
    image: IMG2,
    title: "yourNote",
    github: "https://github.com/codethat19/yourNote",
    demo: "https://yournote.onrender.com/"
  },
  {
    id: 3,
    image: IMG3,
    title: "To-Do List",
    github: "https://github.com/codethat19/To-Do-List-React",
    demo: ""
  },
  {
    id: 4,
    image: IMG4,
    title: "Daily Journal",
    github: "https://github.com/codethat19/Daily-Journal",
    demo: "https://daily-journal-3rnv.onrender.com"
  },
  {
    id: 5,
    image: IMG5,
    title: "Weather App",
    github: "https://github.com/codethat19/Weather-App",
    demo: "https://weather-app-2dzc.onrender.com"
  },
  {
    id: 6,
    image: IMG6,
    title: "Simon Game",
    github: "https://github.com/codethat19/SimonGame",
    demo: "https://codethat19.github.io/SimonGame/"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank">GitHub</a>
                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
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
  