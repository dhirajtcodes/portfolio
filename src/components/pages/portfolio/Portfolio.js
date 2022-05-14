import React, {useState} from 'react'
import Img1 from '../../../assets/portfolio1.jpg'
import Img2 from '../../../assets/portfolio2.jpg'
import Img3 from '../../../assets/portfolio3.jpg'
import Img4 from '../../../assets/portfolio4.jpg'
import Img5 from '../../../assets/portfolio5.png'
import Img6 from '../../../assets/portfolio6.jpg'

const Portfolio = () => {
   const [portfolio] = useState([
     {
       id: 1,
       Img: Img1,
       para: "Fastpay help people to transfer money with smart way.",
       title: 'FastPay',
       github: 'https://github.com/dhirajtcodes/fastpay',
       live: 'https://dhirajtcodes.github.io/fastpay/'
     },
     {
      id: 2,
      Img: Img2,
      para: "Check out price & graph of Cryptocurrencies with simple way",
      title: 'CryptoBase',
      github: 'https://github.com/dhirajtcodes/cryptobase',
      live: 'https://dhirajtcodes.github.io/cryptobase/'
    },
    {
      id: 3,
      Img: Img3,
      para: "Hello This",
      title: 'This is my portfolio items',
      github: 'https://github.com/',
      live: 'www.example.com'
    },
    {
      id: 4,
      Img: Img4,
      para: "Springvale is appointment booking platform for dental patients",
      title: 'SpringVale Dental Clinic',
      github: 'https://github.com/',
      live: 'www.example.com'
    },
    {
      id: 5,
      Img: Img5,
      para: "Hello This",
      title: 'This is my portfolio items',
      github: 'https://github.com/',
      live: 'www.example.com'
    },
    {
      id: 6,
      Img: Img6,
      para: "Hello This",
      title: 'This is my portfolio items',
      github: 'https://github.com/',
      live: 'www.example.com'
    },
])



  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio-container">
      {portfolio.map((items) => {
        return(
          <article className="portfolio-item">
          <div className="portfolio-item-img">
              <img src={items.Img} alt="portfolio1" />
          </div>
          <div className="project-text">
            <h3>{items.title}</h3>
            <p>{items.para}</p>
          </div>      
            <div className="portfolio-item-cta">
            <a href={items.github} title="Check application code" className="btn" target='_blank' rel="noreferrer">Github</a>
        <a href={items.live} title="Live web-application" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </article>
        )
      })}

      </div>
      
    </section>
  )
}

export default Portfolio