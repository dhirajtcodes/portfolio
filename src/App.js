import React from 'react'
import Header from './components/core/header/Header'
import Navbar from './components/core/nav/Navbar'
import About from './components/pages/about/About';
import Experience from './components/pages/experience/Experience'
import Testimonial from './components/pages/testimonial/Testimonial'
import Services from './components/pages/services/Services'
import Portfolio from './components/pages/portfolio/Portfolio'
import Contact from './components/pages/contact/Contact'
import Footer from './components/core/footer/Footer'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <>
        <Router>
    <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      {/* <Services/> */}
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      </Router>
    </>
  )
}

export default App