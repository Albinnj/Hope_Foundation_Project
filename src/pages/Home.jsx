/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero-Section/HeroSection'
import Courses from '../components/Courses-section/Courses'
import AboutUs from '../components/About-us/AboutUs'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <Fragment>
        <Header />
        <HeroSection />
        <Courses />
        <AboutUs />
        <Footer />
    </Fragment>
  )
}

export default Home