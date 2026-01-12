import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Title from './components/Title/Title'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import './index.css'
import Footer from './components/Footer/Footer'
import Organizations from './pages/Organizations/Organizations'
import Forms from './pages/Forms/Forms'
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  return (
    <div>
      <Hero />
    </div>
  )
}

const About_us = () => {
  return (
    <div className='container'>
      <About />
    </div>
  )
}

const Clubs = () => {
  return (
    <div className='club-container'>
      <Title subtitle='Come join us' title=' Our Student Organizations'/>
      <Organizations />
    </div>
  )
}

const Contact_us = () => {
  return (
    <div className='contact-container '>
      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact />
    </div>
  )
}


const Documents = () => {
  return (
    <div className='contact-container '>
      <Title subtitle='Forms & Documents' title='Petition, Delegation & Representations
        Forms'/>
      <Forms />
    </div>
  )
}



const App = () => {

  return (
    <Router>
      <Navbar />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/student-clubs" element={<Clubs />} />
        <Route path="/contact" element={<Contact_us />} />
        <Route path="/forms-documents" element={<Documents />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
