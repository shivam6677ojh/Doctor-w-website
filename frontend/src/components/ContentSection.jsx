import React from 'react'
import '../App.css'

export default function ContentSection({ title, subtitle, description, image, reverse, ctaText }) {
  return (
    <section className={`content-section ${reverse ? 'reverse' : ''}`}>
      <div className="content-text">
        {subtitle && <span className="section-subtitle">{subtitle}</span>}
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
        {ctaText && <button className="cta-button">{ctaText}</button>}
      </div>
      <div className="content-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
    </section>
  )
}
