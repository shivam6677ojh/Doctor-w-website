import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MainFooter from './components/MainFooter'
import Footermini from './components/Footer'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Media from './pages/Media'
import Careers from './pages/Careers'
import EyeTest from './pages/EyeTest'
import BookAppointment from './pages/BookAppointment'
import InternationalEyeHospital from './pages/InternationalEyeHospital'
import SubmissionSuccess from './pages/SubmissionSuccess'
import AppointmentConfirmed from './pages/AppointmentConfirmed'
import EyeHospitals from './pages/EyeHospitals'

export default function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/eye-hospitals" element={<EyeHospitals />} />
          <Route path="/media" element={<Media />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/eye-test" element={<EyeTest />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/international-eye-hospital" element={<InternationalEyeHospital />} />
          <Route path="/thank-you" element={<SubmissionSuccess />} />
          <Route path="/appointment-confirmed" element={<AppointmentConfirmed />} />
        </Routes>
        <Footermini />
        <MainFooter />
      </div>
    </Router>
  )
}

