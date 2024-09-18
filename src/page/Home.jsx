import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
import BackToTop from '../components/BackToTop'
import Team from '../components/Team'
import { Services } from '../components/Services'
import Templates from '../components/Templates'
import Work from '../components/Work'
import Pricing from '../components/Pricing'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Work/>
      <Pricing/>
      <Templates/>
      <Team/>
      <CallToAction/>
      <Footer/>
      <BackToTop/>
    </div>
  )
}
