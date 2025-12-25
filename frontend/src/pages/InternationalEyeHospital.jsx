import React from 'react'
import { useNavigate } from 'react-router-dom'
import LocationSearch from '../components/LocationSearch'

const breadcrumbSchema = {
  '@context': 'https://schema.org/',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'International Eye Hospital', item: '/international-eye-hospital' },
  ],
}

const InternationalEyeHospital = () => {
  const navigate = useNavigate()
  return (
    <div className="intl-page">
      <section className="intl-banner">
        <img
          src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/int-banner.webp"
          alt="International Eye Hospital Banner"
          className="intl-banner-img"
        />
        {/* Right-side top form overlay - positioned relative to banner */}
        <div className="intl-top-form">
          <h2 className="intl-form-title">International Patient Care - Request an appointment</h2>
          <form
            className="intl-form"
            onSubmit={async (e) => {
              e.preventDefault()
              const form = e.currentTarget
              const note = form.querySelector('.intl-form-note')
              const submitBtn = form.querySelector('.intl-submit')
              const data = new FormData(form)
              // Best-effort mapping to backend expectations handled server-side as well
              note && (note.textContent = 'Submitting...')
              submitBtn && submitBtn.setAttribute('disabled', 'true')
              try {
                const base = import.meta.env.VITE_API_BASE || ''
                const res = await fetch(`${base}/api/intl/appointments`, {
                  method: 'POST',
                  body: data,
                })
                const json = await res.json().catch(() => ({}))
                if (!res.ok) {
                  throw new Error(json?.error || 'Submission failed')
                }
                form.reset()
                const fileNameSpan = form.querySelector('.intl-file-name')
                if (fileNameSpan) fileNameSpan.textContent = 'No file chosen'
                note && (note.textContent = 'Submitted successfully. Our team will contact you soon.')
                // Optional UX: redirect to Thank You page
                navigate('/thank-you')
              } catch (err) {
                console.error('Submit error', err)
                note && (note.textContent = 'Submission failed. Please try again.')
              } finally {
                submitBtn && submitBtn.removeAttribute('disabled')
              }
            }}
          >
            <div className="intl-form-note" aria-live="polite"></div>
            <div className="intl-form-row">
              <input type="text" name="fullName" placeholder="Full Name" required />
            </div>
            <div className="intl-form-row intl-form-grid-2">
              <input type="number" name="age" placeholder="Age" min="1" max="150" required />
              <select name="gender" required defaultValue="">
                <option value="" disabled>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="intl-form-row intl-form-grid-2">
              <input type="tel" name="mobile" placeholder="Mobile No." required />
              <select name="treatment" required defaultValue="">
                <option value="" disabled>Treatment</option>
                <option value="Cornea">Cornea</option>
                <option value="Diabetic Retinopathy">Diabetic Retinopathy</option>
                <option value="Glaucoma">Glaucoma</option>
                <option value="Retina">Retina</option>
                <option value="Cataracts">Cataracts</option>
                <option value="Pediatric">Pediatric</option>
                <option value="Oculoplastic">Oculoplastic</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="intl-form-row intl-form-grid-2">
              <input type="email" name="email" placeholder="Email ID" required />
              <div className="intl-file">
                <input
                  type="file"
                  name="report"
                  id="intl-report"
                  accept=".webp,.json,.doc,.jpg,.jpeg,.jpe,.png,.docx,.pdf"
                  onChange={(e) => {
                    const span = e.currentTarget.parentElement?.querySelector('.intl-file-name')
                    const file = e.currentTarget.files && e.currentTarget.files[0]
                    if (span) span.textContent = file ? file.name : 'No file chosen'
                  }}
                />
                <label htmlFor="intl-report">Choose File</label>
                <span className="intl-file-name">No file chosen</span>
              </div>
            </div>
            <div className="intl-form-row">
              <textarea name="message" placeholder="Message" rows={5}></textarea>
            </div>
            <div className="intl-form-row">
              <button type="submit" className="navbook-btn intl-submit">SUBMIT</button>
            </div>
          </form>
        </div>
        <div className="container intl-banner-content">
          <ul className="bread-ul">
            <li><a href="/"><span>Home</span></a></li>
            <li><span>International Eye Hospital</span></li>
          </ul>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
          <h1 className="primary-heading">International Eye Hospital</h1>
          <p className="intl-subtitle">World-class ophthalmic care for international patients and medical travellers.</p>
        </div>
      </section>

      {/* Blue headline stripe */}
      <div className="intl-blue-stripe">
        <h1>Best‑in‑class eye care for international patients</h1>
      </div>

      {/* Stats section */}
      <section className="intl-stats">
        <div className="container">
          <ul className="intl-stats-list">
            <li>
              <div className="intl-stat-number">10,200+</div>
              <div className="intl-stat-label">International Patients Treated</div>
            </li>
            <li>
              <div className="intl-stat-number">700+</div>
              <div className="intl-stat-label">Medical Experts</div>
            </li>
            <li>
              <div className="intl-stat-number">250+</div>
              <div className="intl-stat-label">Hospitals Globally</div>
            </li>
            <li>
              <div className="intl-stat-number">50+</div>
              <div className="intl-stat-label">Countries</div>
            </li>
          </ul>
        </div>
      </section>

      {/* International Patient Services timeline */}
      <section className="intl-services">
        <div className="container">
          <h2 className="primary-heading text-blue">International Patient Services</h2>
          <h3 className="intl-services-sub">Your Hassle-free Treatment Journey at Dr Agarwals Eye Hospital</h3>
          <ul className="timeline-container">
            <li>
              <div className="timeline-left">
                <h3>General Query</h3>
                <p>Start your journey by filling out the form on the website, and our expert team will connect with you to get the required reports and schedule an appointment.</p>
              </div>
              <div className="timeline-right">
                <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/ic-1.webp" alt="General Query icon" />
              </div>
            </li>
            <li>
              <div className="timeline-left">
                <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/ic-2.webp" alt="Pre-arrival Consultation icon" />
              </div>
              <div className="timeline-right">
                <h3>Pre-arrival Consultation</h3>
                <p>Our highly experienced doctors provide consultation over a call, evaluate your eye condition, medical history, reports, and suggest medical tests and a treatment plan with cost estimation.</p>
              </div>
            </li>
            <li>
              <div className="timeline-left">
                <h3>Pre-arrival Arrangements</h3>
                <p>We assign a dedicated service partner who supports you throughout your treatment journey. The dedicated SPOC helps you with an interpreter, passport, visa, invitation letter, billing, travel date, flight ticket, money exchange, airport pick & drop, accommodation, appointment, transportation, & more!</p>
              </div>
              <div className="timeline-right">
                <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/ic-3.webp" alt="Pre-arrival Arrangements icon" />
              </div>
            </li>
            <li>
              <div className="timeline-left">
                <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/ic-4.webp" alt="Eye Treatment icon" />
              </div>
              <div className="timeline-right">
                <h3>Eye Treatment</h3>
                <p>We create a seamless treatment journey throughout the admission process, from expert medical consultation to the final procedure and recovery.</p>
              </div>
            </li>
            <li>
              <div className="timeline-left">
                <h3>Post-treatment Care</h3>
                <p>Your well-being continues beyond the procedure. We help you with post-treatment care, share fit-to-fly & medicine certification for departure and ensure consistent follow-ups for full recovery.</p>
              </div>
              <div className="timeline-right">
                <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/ic-5.webp" alt="Post-treatment Care icon" />
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Treatments slider */}
      <section className="intl-treatments">
        <div className="container">
          <h2 className="primary-heading text-blue">Eye Treatments</h2>
          <div className="intl-slider">
            <button
              type="button"
              className="intl-slide-nav prev"
              aria-label="Previous"
              onClick={() => {
                const track = document.querySelector('.intl-slide-track')
                if (track) track.scrollBy({ left: -320, behavior: 'smooth' })
              }}
            >
              ‹
            </button>
            <div className="intl-slide-viewport">
              <div className="intl-slide-track">
                <a href="#" className="ipt-card" onClick={(e)=>e.preventDefault()}>
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/Clip-1.webp" alt="Complicated Cataract Surgery" />
                  <div className="ipt-card-body">
                    <h3>Complicated Cataract Surgery</h3>
                    <p>Specialized surgical techniques (Glued IOL) for advanced cataracts, coexisting eye conditions, or small pupil size.</p>
                  </div>
                </a>
                <a href="#" className="ipt-card" onClick={(e)=>e.preventDefault()}>
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/Group-30.webp" alt="Diabetic Retinopathy" />
                  <div className="ipt-card-body">
                    <h3>Diabetic Retinopathy</h3>
                    <p>Manage and prevent the progression of retinal damage caused by diabetes.</p>
                  </div>
                </a>
                <a href="#" className="ipt-card" onClick={(e)=>e.preventDefault()}>
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/Clip-3.webp" alt="Paediatric Ophthalmology" />
                  <div className="ipt-card-body">
                    <h3>Paediatric Ophthalmology</h3>
                    <p>Specialized care for children's eye health.</p>
                  </div>
                </a>
                <a href="#" className="ipt-card" onClick={(e)=>e.preventDefault()}>
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/Group-31-e1705387400547.webp" alt="Keratoconus (CAIRS)" />
                  <div className="ipt-card-body">
                    <h3>Keratoconus (CAIRS)</h3>
                    <p>CAIRS and other specialized treatments for corneal irregularities and improved visual acuity.</p>
                  </div>
                </a>
                <a href="#" className="ipt-card" onClick={(e)=>e.preventDefault()}>
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/Rectangle-5-e1705387276648.webp" alt="Cornea Transplant (PDEK)" />
                  <div className="ipt-card-body">
                    <h3>Cornea Transplant (PDEK)</h3>
                    <p>Advanced surgical procedures and dedicated post-operative care.</p>
                  </div>
                </a>
                <a href="#" className="ipt-card" onClick={(e)=>e.preventDefault()}>
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/Rectangle-5-copy-1-e1705387353462.webp" alt="Retina & Uvea Services" />
                  <div className="ipt-card-body">
                    <h3>Retina &amp; Uvea Services</h3>
                    <p>Tailored treatment plans for retinal disorders and uveitis.</p>
                  </div>
                </a>
                <a href="#" className="ipt-card" onClick={(e)=>e.preventDefault()}>
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/Clip-2.webp" alt="Ocular Trauma" />
                  <div className="ipt-card-body">
                    <h3>Ocular Trauma</h3>
                    <p>Emergency evaluation, advanced diagnostic imaging, and comprehensive care.</p>
                  </div>
                </a>
                <a href="#" className="ipt-card" onClick={(e)=>e.preventDefault()}>
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/Clip.webp" alt="Oculoplasty" />
                  <div className="ipt-card-body">
                    <h3>Oculoplasty</h3>
                    <p>Surgical and non-surgical treatments related to the eyelids, orbit, and tear ducts.</p>
                  </div>
                </a>
              </div>
            </div>
            <button
              type="button"
              className="intl-slide-nav next"
              aria-label="Next"
              onClick={() => {
                const track = document.querySelector('.intl-slide-track')
                if (track) track.scrollBy({ left: 320, behavior: 'smooth' })
              }}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Our Eye Hospital Network */}
      <section className="intl-hospitals">
        <div className="container">
          <h2 className="primary-heading text-blue">Our Eye Hospital Network</h2>
          <div className="hospital-network">
            <ul className="hospital-list">
              <li>
                <div className="hospital-card">
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/02/int-chennai.jpg" alt="Chennai - Dr Agarwals Eye Hospital" />
                  <div className="hospital-card-body">
                    <h5>Chennai</h5>
                    <div className="hospital-rating">
                      <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img//international-patients/g-icon.png" alt="Google icon" />
                      <div className="stars">★★★★★</div>
                      <span className="score">4.9</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="hospital-card">
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/02/int-mumbai.jpg" alt="Mumbai - Dr Agarwals Eye Hospital" />
                  <div className="hospital-card-body">
                    <h5>Mumbai</h5>
                    <div className="hospital-rating">
                      <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img//international-patients/g-icon.png" alt="Google icon" />
                      <div className="stars">★★★★★</div>
                      <span className="score">4.9</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="hospital-card">
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/hyd-hos-e1705068654837.webp" alt="Hyderabad - Dr Agarwals Eye Hospital" />
                  <div className="hospital-card-body">
                    <h5>Hyderabad</h5>
                    <div className="hospital-rating">
                      <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img//international-patients/g-icon.png" alt="Google icon" />
                      <div className="stars">★★★★★</div>
                      <span className="score">4.9</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="hospital-card">
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/bng-hos-e1705068900879.webp" alt="Bengaluru - Dr Agarwals Eye Hospital" />
                  <div className="hospital-card-body">
                    <h5>Bengaluru</h5>
                    <div className="hospital-rating">
                      <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img//international-patients/g-icon.png" alt="Google icon" />
                      <div className="stars">★★★★★</div>
                      <span className="score">4.8</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="hospital-card">
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2024/01/kol-hos.webp" alt="Kolkata - Dr Agarwals Eye Hospital" />
                  <div className="hospital-card-body">
                    <h5>Kolkata</h5>
                    <div className="hospital-rating">
                      <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img//international-patients/g-icon.png" alt="Google icon" />
                      <div className="stars">★★★★★</div>
                      <span className="score">4.9</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="hospital-card">
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2022/09/CMD-Exterior.jpg" alt="Cochin - Dr Agarwals Eye Hospital" />
                  <div className="hospital-card-body">
                    <h5>Cochin</h5>
                    <div className="hospital-rating">
                      <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img//international-patients/g-icon.png" alt="Google icon" />
                      <div className="stars">★★★★★</div>
                      <span className="score">4.9</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="btn-section">
              <a href="/eye-hospitals/" className="navbook-btn">EXPLORE MORE</a>
            </div>
          </div>
        </div>
      </section>

      <section className="intl-intro">
        <div className="container">
          <div className="intl-grid">
            <div>
              <h2>Why Choose Us</h2>
          {/* Location search section under header */}
          <LocationSearch />
              <p>
                With a network of advanced eye care centres and leading ophthalmologists, we provide comprehensive
                diagnostics and treatments including LASIK, cataract, retina, cornea, glaucoma, oculoplasty and more.
                Our international desk assists with travel planning, appointments, and post-operative care.
              </p>
            </div>
            <div className="intl-card">
              <h3>Contact International Desk</h3>
              <p>Email: <a href="mailto:international@dragarwal.com">international@dragarwal.com</a></p>
              <p>Phone: <a href="tel:+919594904015">+91 95949 04015</a></p>
              <a className="intl-cta" href="/book-appointment">Book Appointment</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InternationalEyeHospital
