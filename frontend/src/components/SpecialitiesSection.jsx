import React, { useState } from 'react'

const AccordionItem = ({ title, subtitle, content, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-col">
      <div className={`cardbox ${isOpen ? 'open' : ''}`}>
        <div className="cardbox-content">
          <div className="cardbox-header" onClick={() => setIsOpen(!isOpen)}>
            <h4>{title}</h4>
            {subtitle && <span>{subtitle}</span>}
            <div className="accordion-icon">{isOpen ? '−' : '+'}</div>
          </div>
          <div className={`cardbox-collapse ${isOpen ? 'show' : ''}`}>
            <div className="cardbox-body">
              <p>{content}</p>
            </div>
            <a href={link} className="cardbox-footer">Learn more about {title}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SpecialitiesSection() {
  return (
    <section className="card-section">
      <div className="container">
        
        {/* International Patients Box */}
        <div className="international-box">
          <img 
            src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/03/international-patient-e1614850147695.png" 
            className="international-img" 
            alt="Aeroplane Icon" 
          />
          <div className="international-txt">
            <h2 className="primary-heading">International Patients</h2>
            <p>Planning to travel to India for emergency eye care? Looking for a second opinion on your diagnosis? Our international team can help you with travel documentation for visas, travel planning and also guide you to comfortable accommodation options near our hospitals. We encourage you to send your reports and case history to us in advance, so that we can schedule appointments with the right specialists.</p>
            <a href="#" className="primary-btn white-btn">Plan a Visit</a>
          </div>
        </div>

        {/* Our Specialities */}
        <div className="ourspecialities">
          <h2 className="primary-heading">Our Specialities</h2>
          <p>Combining exceptional knowledge and experience with the latest in ophthalmic technology, we provide complete eye care across multiple specialities. Read more about our deep expertise in areas like cataract, refractive error correction with laser, glaucoma management, squint and others.</p>
        </div>

        {/* Diseases Section */}
        <div className="diseases-section">
          <h3 className="section-subtitle">Diseases</h3>
          <div className="cardbox-row">
            <AccordionItem 
              title="Cataract"
              subtitle="Over 20 lakh+ eyes treated"
              content="Cataracts are a common eye condition causing cloudiness in the lens, leading to blurred vision. We offer clear solutions."
              link="#"
            />
            <AccordionItem 
              title="Glaucoma"
              content="Glaucoma is a stealthy sight-stealer, is a disease that sneaks up on your eyes, stealing your sight slowly."
              link="#"
            />
            <AccordionItem 
              title="Diabetic Retinopathy"
              content="Diabetic Retinopathy is a condition where diabetes can harm your eyes over time. If unchecked, can lead to vision problems."
              link="#"
            />
          </div>
          <div className="center-btn">
            <a href="#" className="primary-btn">Explore More Diseases</a>
          </div>
        </div>

        {/* Treatments Section */}
        <div className="diseases-section">
          <h3 className="section-subtitle">Treatments</h3>
          <div className="cardbox-row">
            <AccordionItem 
              title="Refractive Surgery"
              content="What is Refractive Surgery Refractive surgery is a specialized eye correction surgery designed to correct vision problems by reshaping the..."
              link="#"
            />
            <AccordionItem 
              title="Children’s Eye Care"
              content="Paediatric ophthalmology is a subspecialty of ophthalmology that concentrates on treating the various eye problems affecting children Studies show that..."
              link="#"
            />
            <AccordionItem 
              title="Neuro Ophthalmology"
              content="Neuro Ophthalmology is a specialty that concentrates on the neurological problems related to the eye Like we all know the..."
              link="#"
            />
          </div>
          <div className="center-btn">
            <a href="#" className="primary-btn">Explore More Treatments</a>
          </div>
        </div>

      </div>
    </section>
  )
}
