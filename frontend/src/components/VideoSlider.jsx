import { useState } from 'react'

const videoSlides = [
  {
    id: 1,
    title: "Don’t Let Cataracts Bowl you out! Ft Sachin Tendulkar",
    description: "Spotting the signs of cataracts early is key to preserving clear, vibrant vision. Cataracts gradually cloud your sight, making it harder to see life’s details. If left untreated, they can blur even simple pleasures – from reading a book to recognizing familiar faces. At Dr Agarwals Eye Hospital, our expert surgeons ensure a stress-free procedure to help you regain sharp vision, so you can embrace life’s best moments with clarity!",
    videoId: "JMUNEI3SZ-k" 
  },
  {
    id: 2,
    title: "A Classic Cricket Moment Gets a New Spin! ft Sachin Tendulkar & Glenn McGrath",
    description: "Clarity is key, both in life and on the field. Spotting eye issues early and seeking timely care ensures you never miss life’s winning moments. Get your eyes tested at Dr Agarwals Eye Hospital today, because clear vision is always the winning call!",
    videoId: "6PDWKHGmHLc"
  }
]

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videoSlides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videoSlides.length) % videoSlides.length)
  }

  return (
    <section className="home-campaigns">
      <div className="campaign-container">
        <div className="campaign-slider-wrapper">
          
          <div className="campaign-slide active">
            <div className="campaign-content">
              <h2 className="campaign-title">{videoSlides[currentIndex].title}</h2>
              <p className="campaign-description">{videoSlides[currentIndex].description}</p>
              <a href="#" className="campaign-btn">Know More</a>
            </div>
            
            <div className="campaign-video-wrapper">
              <iframe 
                width="70px" 
                height="100%" 
                src={`https://www.youtube.com/embed/${videoSlides[currentIndex].videoId}?rel=0`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <button className="campaign-nav prev" onClick={prevSlide} aria-label="Previous slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button className="campaign-nav next" onClick={nextSlide} aria-label="Next slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="campaign-controls">
            <div className="campaign-dots">
              {videoSlides.map((_, idx) => (
                <button 
                  key={idx}
                  className={`campaign-dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
