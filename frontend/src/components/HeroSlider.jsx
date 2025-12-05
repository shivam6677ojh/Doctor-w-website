import React, { useEffect, useState } from 'react'
import '../App.css'
import heroOne from '../assets/Delivering-world-Class-scaled.jpg'
import heroTwo from '../assets/Desktop-Dra-scaled.jpg'
import heroThree from '../assets/Look-Sharper-Live-Better-scaled.jpg'

const heroSlides = [
    {
        id: 'be-the-star',
        src: heroOne,
        alt: 'Friends take a selfie after their successful LASIK',
        eyebrow: 'Enjoy a spectacle-free vision with Blade-free LASIK',
        headline: {
            primary: 'Be the star',
            secondary: 'in every moment of life'
        },
        description: 'Enjoy a spectacle-free vision with Blade-free LASIK at Dr Agarwals Eye Hospital.',
        highlight: 'Blade-free LASIK'
    },
    {
        id: 'world-class-care',
        src: heroTwo,
        alt: 'Doctors at Dr Agarwals Eye Hospital greet patients',
        eyebrow: 'Delivering world-class eye care',
        headline: {
            primary: 'Delivering',
            secondary: 'world-class care'
        },
        description: 'Experience 70+ years of ophthalmic leadership trusted by millions across the globe.',
        highlight: 'Super-specialty centres'
    },
    {
        id: 'look-sharper',
        src: heroThree,
        alt: 'Happy family celebrating crystal-clear eyesight',
        eyebrow: 'Look sharper, live better',
        headline: {
            primary: 'Look sharper',
            secondary: 'live better'
        },
        description: 'Cutting-edge technology and expert ophthalmologists for every life moment.',
        highlight: 'Advanced diagnostics'
    }
]

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 4500)

        return () => clearInterval(timer)
    }, [])

    const goToSlide = (index) => {
        setCurrentSlide((index + heroSlides.length) % heroSlides.length)
    }

    return (
        <main className="hero-slider" aria-label="Dr Agarwals spotlight stories">
            <div className="slide-stage">
                {heroSlides.map((slide, index) => (
                    <article
                        key={slide.id}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        aria-hidden={index === currentSlide ? 'false' : 'true'}
                    >
                        <div className="slide-visual">
                            <img 
                                src={slide.src} 
                                alt={slide.alt} 
                                className="homebanner-desktop"
                                loading="lazy" 
                            />
                        </div>
                    </article>
                ))}
            </div>
            <div className="progress-dots" aria-label="slide indicators">
                {heroSlides.map((slide, index) => (
                    <button
                        key={slide.id}
                        className={`progress-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <span className="dot-bar" />
                    </button>
                ))}
            </div>
        </main>
    )
}
