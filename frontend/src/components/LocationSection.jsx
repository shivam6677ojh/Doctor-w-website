import React from 'react'
import { Link } from 'react-router-dom'

export default function LocationSection() {
  return (
    <section className="location-section home-location">
      <img 
        src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2022/03/location-bg-1.png" 
        alt="Dr. Agarwal Locations Map" 
        className="location-bg-img" 
      />
      <div className="location-container">
        <div className="locationbox">
          <h2 className="location-heading">Locations</h2>
          <p className="location-subheading">Experience innovative eye care, no matter where you are</p>
          
          <div className="location-stats">
            <div className="stat-item">
              <h3>
                <span className="stat-number">250</span>+ Eye hospitals
              </h3>
            </div>
            <div className="stat-item">
              <h3>
                <span className="stat-number">10</span> Countries
              </h3>
            </div>
            <div className="stat-item">
              <h3>
                A team of <span className="stat-number">700</span>+ doctors
              </h3>
            </div>
          </div>
          
          <Link to="/eye-hospitals" className="find-hospital-btn">Find an Eye hospital near you</Link>
        </div>
      </div>
    </section>
  )
}
