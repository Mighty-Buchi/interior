import React from 'react'
import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import Footer from './sections/Footer'
import Section from './sections/Section'
import Contact from './sections/Contact'

const page = () => {
  return (
    <div>
      <Hero/>
      <Section/>
      <Gallery/>
      <Contact/>
    </div>
  )
}

export default page
