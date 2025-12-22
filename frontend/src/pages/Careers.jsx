import React from 'react'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.dragarwal.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Join us as we revolutionize eye care in India',
      item: 'https://www.dragarwal.com/careers/',
    },
  ],
}

const whyChooseItems = [
  {
    title: 'Global Presence',
    description: 'Be part of a network of 200+ branches across India and beyond.',
  },
  {
    title: 'Innovative Technology',
    description:
      'Work with the latest in eye care technology and procedures, including LASIK, cataract surgery, and refractive surgery.',
  },
  {
    title: 'Expert Training and Development',
    description:
      'Access continuous learning, training programs, and professional development to enhance your clinical expertise.',
  },
  {
    title: 'Collaborative Environment',
    description: 'Unique perspectives and experiences fuel innovation and drive our growth.',
  },
]

const offerBenefits = [
  {
    numberImg: 'https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/04/01.webp',
    numberLabel: '01',
    title: 'Growth and Career Advancement',
    description: 'Our coaching programs mentor employees to upskill and take on bigger roles within the organization.',
  },
  {
    numberImg: 'https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/04/02.webp',
    numberLabel: '02',
    title: 'Advanced Facilities',
    description: 'Work in modern, fully equipped hospitals with a focus on patient-centered care.',
  },
  {
    numberImg: 'https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/04/03.webp',
    numberLabel: '03',
    title: 'Work - Life Balance',
    description: 'We offer comprehensive health insurance and parental leave to all our employees.',
  },
  {
    numberImg: 'https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/04/04.webp',
    numberLabel: '04',
    title: 'Recognition and Rewards',
    description: 'Benefit from competitive, performance-based compensation packages.',
  },
  {
    numberImg: 'https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/04/05.webp',
    numberLabel: '05',
    title: 'Supportive Work Environment',
    description: 'Join a team that values collaboration, mutual respect, and positive workplace culture.',
  },
  {
    numberImg: 'https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/04/06.webp',
    numberLabel: '06',
    title: 'Global Exposure',
    description: 'Gain opportunities to learn from experts via international collaborations and networks.',
  },
]

const opportunityRoles = [
  {
    title: 'Cataract Surgeon',
    link: 'https://www.dragarwal.com/careers/cataract-surgeon/',
    locations: ['Tamil Nadu', 'Karnataka'],
    extraCount: '+10',
    summary:
      'Dr Agarwals Eye Hospital is looking for an experienced and skilled Cataract Surgeon to be part of our expanding network.',
  },
  {
    title: 'Retina Surgeon',
    link: 'https://www.dragarwal.com/careers/retina-surgeon/',
    locations: ['Tamil Nadu', 'Andhra Pradesh'],
    extraCount: '+4',
    summary:
      'We are seeking a highly skilled Retina Surgeon to deliver patient-centered care across key southern metros.',
  },
  {
    title: 'Cornea & Refractive Surgeon',
    link: 'https://www.dragarwal.com/careers/cornea-refractive-surgeon-2/',
    locations: ['Tamil Nadu', 'Kerala'],
    extraCount: '+5',
    summary:
      'Help us advance refractive outcomes with expertise in cutting-edge corneal procedures and technology.',
  },
  {
    title: 'Oculoplasty',
    link: 'https://www.dragarwal.com/careers/oculoplasty/',
    locations: ['Chennai'],
    extraCount: null,
    summary: 'Lead complex oculoplastic interventions while mentoring the next generation of ophthalmologists.',
  },
  {
    title: 'Pediatric Ophthalmologist',
    link: 'https://www.dragarwal.com/careers/pediatric-ophthalmologist/',
    locations: ['Karnataka'],
    extraCount: null,
    summary: 'Champion pediatric vision care with a focus on compassionate outcomes for young patients.',
  },
  {
    title: 'Medical Retina',
    link: 'https://www.dragarwal.com/careers/medical-retina/',
    locations: ['Tamil Nadu', 'Karnataka'],
    extraCount: '+1',
    summary:
      'Collaborate with multidisciplinary teams to deliver advanced medical retina care across clinics.',
  },
]

const Careers = () => {
  const handleSearchSubmit = (event) => {
    event.preventDefault()
  }

  const handleApplySubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="career-page">
      <section className="career-hero">
        <div className="container">
          <div className="career-banner" role="region" aria-label="Careers hero">
            <ul className="bread-ul breadcrumb-list">
              <li>
                <a href="/">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <span>Join us as we revolutionize eye care in India</span>
              </li>
            </ul>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="career-banner-content">
              <div className="career-banner-left">
                <p className="career-overline">Your Dream Career Starts Here</p>
                <h1>
                  Lead the Way in Eye Care Innovation at
                  <br />
                  Dr Agarwals Eye Hospital
                </h1>

                <form className="career-search" onSubmit={handleSearchSubmit} role="search">
                  <label className="visually-hidden" htmlFor="career-search-input">
                    Search by location or job title
                  </label>
                  <input
                    id="career-search-input"
                    type="search"
                    placeholder="Location or Job Title"
                    autoComplete="off"
                    aria-label="Search by location or job title"
                  />
                  <button type="submit">Search</button>
                </form>
              </div>

              <div className="career-banner-image" aria-hidden="true">
                <img
                  src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/04/Mask-group.png"
                  alt="Ophthalmologist using a slit lamp"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-join-section">
        <div className="container">
          <div className="join-row">
            <div className="join-img">
              <img
                className="join-main"
                src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/04/join-img.png"
                alt="Smiling healthcare professional"
                loading="lazy"
              />
              <img
                className="join-curve"
                src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/04/join-curve.png"
                alt=""
                role="presentation"
                loading="lazy"
              />
            </div>
            <div className="join-content">
              <h3>
                Join Our Esteemed Team of
                <br />
                Healthcare Professionals
              </h3>
              <p>
                At Dr Agarwals Eye Hospital, we are committed to delivering the highest standard of eye care excellence.
                As a leading name in the field of ophthalmology, we are always looking for skilled, compassionate, and
                dedicated doctors to join our growing team. If you are passionate about advancing your career and making a
                meaningful impact in the field of eye care, we invite you to explore the opportunities available with us.
              </p>
              <a className="join-btn" href="/careers#openings">
                Join Us to see the difference
              </a>
            </div>
          </div>

          <div className="why-us-section">
            <h2>Why Choose Us?</h2>
            <div className="why-card-grid">
              {whyChooseItems.map((item) => (
                <article className="why-card" key={item.title}>
                  <img
                    src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/ic-career-readmore.svg"
                    alt=""
                    role="presentation"
                    className="arrow-icon"
                    loading="lazy"
                  />
                  <div>
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="offer-section">
        <div className="container">
          <h2>What We Offer</h2>
          <p className="offer-subtitle">Sign up, search, and apply</p>
          <div className="offer-grid">
            {offerBenefits.map((item, index) => (
              <article className="offer-card" key={item.title}>
                <img className="offer-number" src={item.numberImg} alt={item.numberLabel} loading="lazy" />
                <div className="offer-inner">
                  <img
                    className="offer-icon"
                    src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/04/offer-icon.webp"
                    alt=""
                    role="presentation"
                    loading="lazy"
                  />
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <span className="offer-arrow-wrap">
                    <img
                      className="offer-arrow"
                      src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/ic-career-readmore.svg"
                      alt=""
                      role="presentation"
                      loading="lazy"
                    />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opportunities-section" id="openings">
        <div className="container">
          <div className="opportunities-header">
            <h2>Opportunities Available</h2>
            <p>We are hiring doctors across multiple locations</p>
          </div>
          <div className="opportunities-grid">
            {opportunityRoles.map((role) => (
              <article className="opportunity-card" key={role.title}>
                <div className="opportunity-icon">
                  <img
                    src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/ic-surgeon-white.svg"
                    alt="Specialist icon"
                    loading="lazy"
                  />
                </div>
                <h3>{role.title}</h3>
                <div className="opportunity-location">
                  <div className="location-label">
                    <img
                      src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/ic-map-marker.svg"
                      alt="Location pin"
                      loading="lazy"
                    />
                    <span>Location</span>
                  </div>
                  <div className="location-list">
                    <ul>
                      {role.locations.map((city) => (
                        <li key={city}>{city}</li>
                      ))}
                    </ul>
                    {role.extraCount && <span className="extra-count">{role.extraCount}</span>}
                  </div>
                </div>
                <p className="opportunity-summary">{role.summary}</p>
                <a className="apply-btn" href={role.link} target="_blank" rel="noreferrer noopener">
                  Apply Now
                </a>
              </article>
            ))}
          </div>
          <div className="opportunities-nav" aria-hidden="true">
            <button type="button" className="nav-bubble" aria-label="Previous opportunities">
              <span>‹</span>
            </button>
            <button type="button" className="nav-bubble" aria-label="Next opportunities">
              <span>›</span>
            </button>
          </div>
        </div>
      </section>

      <section className="apply-section">
        <div className="container">
          <div className="apply-card">
            <div className="apply-form-col">
              <h2>Apply Now</h2>
              <form className="apply-form" onSubmit={handleApplySubmit} noValidate>
                <fieldset className="apply-toggle" aria-label="Select applicant type">
                  <label>
                    <input type="radio" name="applicantType" defaultChecked />
                    <span>Doctors</span>
                  </label>
                  <label>
                    <input type="radio" name="applicantType" />
                    <span>Non Doctors</span>
                  </label>
                </fieldset>

                <div className="input-grid">
                  <label className="input-field">
                    <span className="visually-hidden">Full name</span>
                    <input type="text" name="fullName" placeholder="Full Name" autoComplete="off" />
                    <img
                      src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/career-form-name.svg"
                      alt=""
                      role="presentation"
                    />
                  </label>
                  <label className="input-field">
                    <span className="visually-hidden">Email address</span>
                    <input type="email" name="email" placeholder="Email" autoComplete="off" />
                    <img
                      src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/career-form-mail.svg"
                      alt=""
                      role="presentation"
                    />
                  </label>
                </div>

                <div className="input-grid">
                  <div className="phone-field">
                    <div className="country-pill">
                      <img
                        src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/flags/in.png"
                        alt="India flag"
                      />
                      <span>+91</span>
                    </div>
                    <input type="tel" name="phone" placeholder="Mobile Number" autoComplete="off" />
                    <img
                      src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/career-form-ph.svg"
                      alt=""
                      role="presentation"
                    />
                  </div>
                  <label className="input-field">
                    <span className="visually-hidden">Preferred location</span>
                    <input type="text" name="location" placeholder="Preferred Location" autoComplete="off" />
                    <img
                      src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/career-form-location.svg"
                      alt=""
                      role="presentation"
                    />
                  </label>
                </div>

                <div className="upload-field">
                  <div className="upload-label">
                    <strong>Resume (PDF | DOC)</strong>
                    <p>Attach up to 5 files, max 5MB each.</p>
                  </div>
                  <label className="upload-input">
                    <span className="visually-hidden">Upload resume</span>
                    <input type="file" name="resume" accept="application/pdf,.doc,.docx" />
                    <button type="button">Upload</button>
                  </label>
                </div>

                <button type="submit" className="primary-submit">
                  Submit
                </button>
              </form>
            </div>
            <aside className="apply-info-card">
              <h3>For more information</h3>
              <div className="info-row">
                <div className="info-icon">
                  <img
                    src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/ic-phone-white.svg"
                    alt="Phone icon"
                  />
                </div>
                <div>
                  <small>Call Us</small>
                  <a href="tel:9594901868">9594901868</a>
                </div>
              </div>
              <div className="info-row">
                <div className="info-icon">
                  <img
                    src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/ic-mail-white.svg"
                    alt="Mail icon"
                  />
                </div>
                <div>
                  <small>Write to Us</small>
                  <a href="mailto:jobs@dragarwal.com">jobs@dragarwal.com</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
