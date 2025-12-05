import React, { useState } from 'react'

const doctors = [
  {
    id: 1,
    name: "Dr. Ashvin Agarwal",
    position: "Chief Clinical Officer",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/03/Dr.-ashvin-agarwal-CMH.jpg",
    badge: "Chief Clinical Officer",
    skills: ["Cornea", "Glaucoma", "Cataract Surgery", "Refractive Surgery", "Anterior Segment"]
  },
  {
    id: 2,
    name: "Prof. Dr. Lional Raj D",
    position: "Regional Head - Clinical Services, Tirunelveli",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/01/Lional-TVL.jpeg",
    skills: ["Cataract", "Glaucoma", "Squint", "Retina", "Cornea", "+ 5 more"]
  },
  {
    id: 3,
    name: "Prof. Dr. MDK Ramalingam",
    position: "Regional Head - Clinical Services, Trichy",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/02/Ramalingam-Trichy.jpg",
    skills: ["Cataract", "Glaucoma", "Cornea Transplantation", "General Ophthalmology", "Refractive Surgery", "+ 1 more"]
  },
  {
    id: 4,
    name: "Dr. Sumanth Reddy J",
    position: "Regional Head - Clinical Services, Tirupati",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/03/Sumanth-Reddy-TPT-B.jpg",
    skills: ["Cataract", "General Ophthalmology", "Neuro Ophthalmology", "Medical Retina", "Vitreo-Retinal"]
  },
  {
    id: 5,
    name: "Dr. Ram S Mirlay",
    position: "Regional Head - Clinical Services, Bangalore",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/02/Ram-Mirlay-SVR.jpg",
    skills: ["Cataract", "General Ophthalmology", "Cataract Surgery", "Refractive Surgery"]
  },
  {
    id: 6,
    name: "Dr. Neera Kanjani",
    position: "Regional Head - Clinical Services, Ahmedabad",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/02/Neera-Kanjani-AHM.jpg",
    skills: ["Glaucoma", "Cornea", "Cataract", "Cataract Surgery", "Refractive Surgery", "+ 4 more"]
  },
  {
    id: 7,
    name: "Dr. Nita A Shah",
    position: "Head - Clinical Services, Chembur",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/02/Nita-Shah-Chembur.jpg",
    skills: ["Cataract", "General Ophthalmology", "Refractive Surgery", "No Touch Lasik (Streamlight)", "Contoura Lasik", "+ 3 more"]
  },
  {
    id: 8,
    name: "Dr. Navratan Dhanuka",
    position: "Regional Head - Clinical Services, Cuttack",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/02/Navratan-Dhanuka-CTK.jpg",
    skills: ["General Ophthalmology"]
  }
]

export default function OurDoctors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 992) setItemsToShow(2);
      else if (window.innerWidth < 1200) setItemsToShow(3);
      else setItemsToShow(4);
    };
    
    handleResize(); // Set initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 > doctors.length - itemsToShow ? 0 : prev + 1
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? doctors.length - itemsToShow : prev - 1
    );
  }

  return (
    <section className="ourdoctors-section">
      <div className="container">
        <h2 className="primary-heading">Our Doctors</h2>
        <p className="sec-subheading">Doctors in the spotlight</p>
        
        <div className="doctors-slider-wrapper">
          <button className="doctor-nav prev" onClick={prevSlide}>‹</button>
          
          <div className="doctors-slider-window">
            <div 
              className="doctors-slider-track"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` 
              }}
            >
              {doctors.map((doctor) => (
                <div 
                  key={doctor.id} 
                  className="doctor-slide-item"
                  style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                >
                  <div className="doctor-card">
                    <div className="doctor-img-wrap">
                      <img src={doctor.image} alt={doctor.name} className="doctor-img" />
                      {doctor.badge && <span className="doctor-badge">{doctor.badge}</span>}
                    </div>
                    <div className="doctor-info">
                      <h3 className="doctor-name">{doctor.name}</h3>
                      <p className="doctor-position">{doctor.position}</p>
                      <ul className="doctor-skills">
                        {doctor.skills.map((skill, idx) => (
                          <li key={idx}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="doctor-actions">
                      <a href="#" className="book-btn">Book Appointment</a>
                      <a href="#" className="learn-more-link">Learn more about {doctor.name}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="doctor-nav next" onClick={nextSlide}>›</button>
        </div>

        <div className="center-btn">
          <a href="#" className="primary-btn">Explore More Doctors</a>
        </div>
      </div>
    </section>
  )
}
