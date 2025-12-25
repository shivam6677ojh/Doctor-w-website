import React, { useState } from 'react'
import './AboutEyeClinic.css'

export default function AboutEyeClinic() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [resultsHtml, setResultsHtml] = useState('')
  const [message, setMessage] = useState('')

  const images = [
    'https://agarwals-219c6.kxcdn.com/wp-content/uploads/2023/11/Consulatation-GOW.jpg',
    'https://agarwals-219c6.kxcdn.com/wp-content/uploads/2023/11/Opticals-CGL.jpg',
    'https://agarwals-219c6.kxcdn.com/wp-content/uploads/2023/11/Opticals-GOW.jpg',
    'https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/eye-clinic/clinic-home-banner.webp'
  ]

  return (
    <>
      <section className="ce-hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-7">
              <div className="hero-text-box pr-lg-5">
                <div className="hero-text-wrapper">
                  <div className="hero-text">
                    <h1>
                      Dr Agarwals Eye Clinic
                      <br />
                      Making Advanced Eyecare
                      <br />
                      Accessible
                    </h1>

                    <div className="happy-patients-box">
                      <div>
                        <img
                          src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/eye-clinic/20min.svg"
                          className="img-fluid no-lazyload-img"
                          alt="icon"
                        />
                      </div>
                      <div>
                        <b>Complete Eye Exam in</b>
                        <p className="fw-600">20 mins*</p>
                      </div>
                    </div>

                    <div className="happy-patients-box bg-oran mt-4 d-flex d-md-none">
                      <div>
                        <img
                          width="21"
                          height="21"
                          src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/07/World-Class-Facilities.svg"
                          className="img-fluid no-lazyload-img"
                          alt="icon"
                        />
                      </div>
                      <div>
                        <b>World Class Facilities</b>
                      </div>
                    </div>

                    <div className="happy-patients-box d-flex align-items-center mt-4 pt-4 pt-md-3">
                      <a href="/book-appointment" className="sky-btn d-inline-block">Book Appointment</a>
                      <button
                        id="openGallery"
                        className="sky-btn sky-btn2 d-inline-block ml-1"
                        type="button"
                        onClick={() => setGalleryOpen(!galleryOpen)}
                      >
                        Gallery
                      </button>
                    </div>
                  </div>
                  <img
                    src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/cataract-sachin-tendulkar-img.png"
                    className="sachin-head-img no-lazyload-img"
                    alt="Sachin"
                  />
                </div>

                {galleryOpen && (
                  <div className="mt-4">
                    <div className="row">
                      {images.map((src, i) => (
                        <div className="col-6 col-md-4 mb-3" key={i}>
                          <a href={src} target="_blank" rel="noreferrer">
                            <img src={src} alt={`Gallery ${i + 1}`} className="img-fluid" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="most-trusted-hospitals-box">
                  <div>
                    <h4 className="m-0">50+</h4>
                    <p>Eye Clinics Across India</p>
                  </div>
                  <div>
                    <h4 className="m-0">40+</h4>
                    <p>Towns Across India</p>
                  </div>
                  <div>
                    <h4 className="m-0">60+</h4>
                    <p>Years OF Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="clinic-home-banner d-none d-md-block">
                {images.slice(0,5).map((src, i) => (
                  <img key={i} src={src} alt={`Clinic ${i+1}`} className="img-fluid" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="clinic-home-choose why-choose-section">
        <div className="container">
          <div className="clinic-home-border">
            <div className="clinic-home-header d-md-flex justify-content-between align-items-center mb-4 mb-md-3">
              <h2 className="mb-3 mb-md-0 text-left">World-Class Eye Care, Delivered Nationwide</h2>
              <a href="/eye-clinic-home/eye-clinic-about/" className="sky-btn d-inline-block">know More</a>
            </div>
            <div className="row g-4">
              <div className="col-12 col-md-4">
                <div className="why-choose-box">
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/eye-clinic/why-choose-img1.svg" alt="" />
                  <h4>Backed by 60+ Years of Eye Care Expertise</h4>
                  <p>The trusted legacy of Dr Agarwals Eye Hospital, now in your neighbourhood</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="why-choose-box">
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/eye-clinic/why-choose-img2.svg" alt="" />
                  <h4>World-Class Doctors, At Your Nearest Clinic</h4>
                  <p>In-clinic or live tele-consults with senior doctors, powered by real-time diagnostics.</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="why-choose-box active">
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/eye-clinic/why-choose-img3.svg" alt="" />
                  <h4>International Brands, In your Neighborhood</h4>
                  <p>Choose from international precision lenses & eyewear brands, right where you are</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Search Section */}
      <section className="clinic-home-map">
        <div className="container">
          <div className="clinic-home-border">
            <div className="row align-items-center">
              <div className="col-12 col-md-7 pl-md-0 order-2 order-md-1">
                <div className="why-choose-box">
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/eye-clinic/dra-map.webp" alt="India map" className="img-fluid d-none d-md-block my-4" />
                  <img src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/10/Map-mob-new.png" alt="India map mobile" className="img-fluid d-block d-md-none" />
                </div>
              </div>
              <div className="col-12 col-md-5 pl-md-0 order-1 order-md-2">
                <h2 className="mb-3 mb-md-0 fw-bold">50+ State Of The Art Eye Clinics Across India</h2>
                <div className="eye-clinic-widget my-4">
                  <form className="horizontal-search-wrap pl-3 pr-1 py-1" onSubmit={async (e) => {
                    e.preventDefault()
                    setMessage('Searching...')
                    setResultsHtml('')
                    try {
                      const body = new URLSearchParams({ action: 'da_micro_page_search_eye_clinic', q: query, location })
                      const res = await fetch('https://www.dragarwal.com/wp-admin/admin-ajax.php', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body
                      })
                      const data = await res.json()
                      if (data?.success && data?.data?.html) {
                        setResultsHtml(data.data.html)
                        setMessage('')
                      } else {
                        setMessage(data?.data?.message || 'No results found.')
                      }
                    } catch (err) {
                      setMessage('Unable to fetch results right now.')
                    }
                  }}>
                    <div className="form-row align-items-center">
                      <div className="col-5 position-relative">
                        <span className="icon-location" aria-hidden="true">📍</span>
                        <select value={location} onChange={(e) => setLocation(e.target.value)} className="form-control pl-4 bg-transparent border-0">
                          <option value="">Search by Location</option>
                          <option value="378">Andhra Pradesh</option>
                          <option value="427">Karnataka</option>
                          <option value="526">Kerala</option>
                          <option value="406">Odisha</option>
                          <option value="424">Puducherry</option>
                          <option value="490">Punjab</option>
                          <option value="380">Tamil Nadu</option>
                          <option value="408">Telangana</option>
                          <option value="515">Uttar Pradesh</option>
                        </select>
                      </div>
                      <div className="col-4 position-relative">
                        <span className="icon-search" aria-hidden="true">🔍</span>
                        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" className="form-control pl-4 bg-transparent border-0" placeholder="Search…" />
                      </div>
                      <div className="col-3">
                        <button type="submit" className="sky-btn w-100 px-1">Search</button>
                      </div>
                    </div>
                  </form>

                  {resultsHtml ? (
                    <div className="horizontal-serach-results d-flex overflow-auto py-3" style={{ gap: '1rem' }} dangerouslySetInnerHTML={{ __html: resultsHtml }} />
                  ) : (
                    <div className="text-center text-muted my-3">{message}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15 Step Comprehensive Eye Care */}
      <section className="clinic-home-steps">
        <div className="container">
          <div className="clinic-home-border">
            <div className="clinic-home-header d-md-flex justify-content-between align-items-center mb-4 mb-md-3 mt-4 mt-md-0">
              <h2 className="mb-3 mb-md-0">15 Step Comprehensive Eye Care, In 20mins*</h2>
              <a href="/eye-clinic-home/eye-clinic-care-steps/" className="sky-btn d-inline-block">know More</a>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="clinic-home-step d-flex justify-content-between align-items-center bg-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/eye-clinic/step4.svg" className="img-fluid" alt="Visual Acuity" />
                    <h5 className="h6 mb-0 fw-medium ml-3 ml-md-2">Visual Acuity Assessment</h5>
                  </div>
                  <span>01</span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="clinic-home-step d-flex justify-content-between align-items-center bg-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/eye-clinic/step1.svg" className="img-fluid" alt="Spectacle Power Test" />
                    <h5 className="h6 mb-0 fw-medium ml-3 ml-md-2">Spectacle Power Test</h5>
                  </div>
                  <span>02</span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="clinic-home-step d-flex justify-content-between align-items-center bg-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/eye-clinic/step6.svg" className="img-fluid" alt="Eye Coordination" />
                    <h5 className="h6 mb-0 fw-medium ml-3 ml-md-2">Eye Coordination Check</h5>
                  </div>
                  <span>03</span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="clinic-home-step d-flex justify-content-between align-items-center bg-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/eye-clinic/step3.svg" className="img-fluid" alt="Dry Eye Test" />
                    <h5 className="h6 mb-0 fw-medium ml-3 ml-md-2">Dry Eye Test</h5>
                  </div>
                  <span>04</span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="clinic-home-step d-flex justify-content-between align-items-center bg-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/eye-clinic/step5.svg" className="img-fluid" alt="Eye Pressure Testing" />
                    <h5 className="h6 mb-0 fw-medium ml-3 ml-md-2">Eye Pressure Testing</h5>
                  </div>
                  <span>05</span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="clinic-home-step d-flex justify-content-between align-items-center bg-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/eye-clinic/step2.svg" className="img-fluid" alt="Early Cataract Checkup" />
                    <h5 className="h6 mb-0 fw-medium ml-3 ml-md-2">Early Cataract Checkup</h5>
                  </div>
                  <span>06</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
