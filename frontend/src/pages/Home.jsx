import React from 'react'
import HeroSlider from '../components/HeroSlider'
import VideoSlider from '../components/VideoSlider'
import LocationSection from '../components/LocationSection'
import SpecialitiesSection from '../components/SpecialitiesSection'
import WhyChooseUs from '../components/WhyChooseUs'
import OurDoctors from '../components/OurDoctors'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import PopularSearch from '../components/PopularSearch'

const Home = () => {
  return (
    <>
      <HeroSlider />
      <VideoSlider />
      <LocationSection />
      <SpecialitiesSection />
      <WhyChooseUs />
      <OurDoctors />
      <BlogSection />
      <PopularSearch />
      <ContactSection />
    </>
  )
}

export default Home
