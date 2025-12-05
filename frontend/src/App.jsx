import React from 'react'
import './App.css'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import VideoSlider from './components/VideoSlider'
import LocationSection from './components/LocationSection'
import SpecialitiesSection from './components/SpecialitiesSection'
import WhyChooseUs from './components/WhyChooseUs'
import OurDoctors from './components/OurDoctors'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'
import PopularSearch from './components/PopularSearch'
import MainFooter from './components/MainFooter'
import Footermini from './components/Footer'


export default function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <HeroSlider />
      <VideoSlider />
      <LocationSection />
      <SpecialitiesSection />
      <WhyChooseUs />
      <OurDoctors />
      <BlogSection />
      <PopularSearch />
      <ContactSection />
      <Footermini />
      <MainFooter />
    </div>
  )
}

