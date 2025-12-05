import React from 'react'
import '../App.css'

const navLinks = [
  {
    name: 'Locations',
    url: '#',
    submenu: [
      { name: 'Eye Hospitals', url: 'https://www.dragarwal.com/eye-hospitals/' },
      {
        name: 'Eye Clinics',
        url: '#',
        submenu: [
          { name: 'About Eye Clinic', url: 'https://www.dragarwal.com/eye-clinic-home/' },
          { name: 'Find a Clinic', url: 'https://www.dragarwal.com/eye-clinics/' }
        ]
      }
    ]
  },
  { name: 'Doctors', url: 'https://www.dragarwal.com/eye-doctors/' },
  {
    name: 'Treatments',
    url: 'https://www.dragarwal.com/eye-treatment/',
    type: 'mega',
    submenu: [
      { name: 'Cataract Surgery', url: 'https://www.dragarwal.com/eye-treatment/cataract-surgery/' },
      { name: 'Refractive Surgery', url: 'https://www.dragarwal.com/eye-treatment/refractive-surgery/' },
      { name: 'Dry Eyes', url: 'https://www.dragarwal.com/eye-treatment/dry-eyes/' },
      { name: 'PDEK', url: 'https://www.dragarwal.com/eye-treatment/pdek/' },
      { name: 'Anti VEGF Agents', url: 'https://www.dragarwal.com/eye-treatment/anti-vegf-agents/' },
      { name: 'Cosmetic Eye Surgery', url: 'https://www.dragarwal.com/cosmetic-clinic/' },
      { name: 'Vitrectomy', url: 'https://www.dragarwal.com/eye-treatment/vitrectomy/' },
      { name: 'Lasik', url: 'https://www.dragarwal.com/eye-treatment/lasik/' },
      { name: 'MIGS', url: 'https://www.dragarwal.com/eye-treatment/minimally-invasive-glaucoma-surgery/' },
      { name: 'VIEW MORE', url: 'https://www.dragarwal.com/eye-treatment/', className: 'view-more' }
    ]
  },
  {
    name: 'Eye Diseases',
    url: 'https://www.dragarwal.com/diseases-conditions/',
    type: 'mega',
    submenu: [
      { name: 'Cataract', url: 'https://www.dragarwal.com/diseases-conditions/cataract/' },
      { name: 'Glaucoma', url: 'https://www.dragarwal.com/diseases-conditions/glaucoma/' },
      { name: 'Diabetic Retinopathy', url: 'https://www.dragarwal.com/diseases-conditions/diabetic-retinopathy/' },
      { name: 'Squint', url: 'https://www.dragarwal.com/diseases-conditions/squint/' },
      { name: 'Macular Hole', url: 'https://www.dragarwal.com/diseases-conditions/macular-hole/' },
      { name: 'Retinal Detachment', url: 'https://www.dragarwal.com/diseases-conditions/retinal-detachment/' },
      { name: 'Keratoconus', url: 'https://www.dragarwal.com/diseases-conditions/keratoconus/' },
      { name: 'ROP', url: 'https://www.dragarwal.com/diseases-conditions/retinopathy-prematurity/' },
      { name: 'VIEW MORE', url: 'https://www.dragarwal.com/diseases-conditions/', className: 'view-more' }
    ]
  },
  {
    name: 'Education & Training',
    url: 'https://www.dragarwal.com/study/',
    type: 'mega',
    submenu: [
      { name: 'DNB', url: 'https://www.dragarwal.com/programs/dnb/' },
      { name: 'Fellowship-Ophthalmology', url: 'https://www.dragarwal.com/courses/fellowship-for-ophthalmologists/' },
      { name: 'Careers at Dr. Agarwals', url: 'https://www.dragarwal.com/careers/' },
      { name: 'Short-Term-Optometry', url: 'https://www.dragarwal.com/programs/certificate-course-in-optometry/' },
      { name: 'Short-Term-Ophthalmology', url: 'https://www.dragarwal.com/programs/certificate-program-in-ophthalmology/' },
      {
        name: 'Optometry College',
        url: '#',
        submenu: [
          {
            name: 'Optometry college in Chennai(Center of Excellence)',
            url: '#',
            submenu: [
              { name: 'Bachelor of Optometry', url: 'https://www.dragarwal.com/programs/bsc-optometry/' },
              { name: 'Master of Optometry', url: 'https://www.dragarwal.com/programs/msc-optometry/' }
            ]
          },
          { name: 'Optometry college in Tirunelveli', url: 'https://www.dragarwal.com/programs/bachelor-of-science-in-optometry/' }
        ]
      },
      { name: 'Fellowship-Optometry', url: 'https://www.dragarwal.com/programs/fellowship-course-in-optometry/' },
      { name: 'Internship in Clinical Optometry', url: 'https://www.dragarwal.com/programs/internship-in-clinical-optometry/' }
    ]
  }
]

export default function Header() {
  return (
    <div className="top-shell">
      <div className="topbar">
        <div className="container-fluid">
          <div className="topmenu">
            <a href="https://www.dragarwal.com/blogs/" className="topmenu-link">Blog</a>
            <a href="https://www.dragarwal.com/media-coverage/" className="topmenu-link">Media</a>
            <a href="https://www.dragarwal.com/careers/" className="topmenu-link">Careers</a>
            <a href="https://www.dragarwal.com/international-eye-hospital/" className="topmenu-link">International Patients</a>
            <a href="https://www.dragarwal.com/eye-test/" className="topmenu-link">Eye Test</a>
            
            <div className="gtranslate_wrapper">
              <select className="gt_selector" aria-label="Language" defaultValue="en|en">
                <option value="">Language</option>
                <option value="en|bn">Bengali</option>
                <option value="en|en">English</option>
                <option value="en|gu">Gujarati</option>
                <option value="en|hi">Hindi</option>
                <option value="en|kn">Kannada</option>
                <option value="en|ml">Malayalam</option>
                <option value="en|mr">Marathi</option>
                <option value="en|sw">Swahili</option>
                <option value="en|ta">Tamil</option>
                <option value="en|te">Telugu</option>
              </select>
            </div>

            <a href="#" className="topmenu-link request-callback">Request A Call Back</a>
            <div className="topmenu-link call-us">
              Call Us <span><a href="tel:9594904015">95949 04015</a></span>
            </div>
          </div>
        </div>
      </div>

      <header className="site-header navbar navbar-expand-lg agarwalnav py-lg-2">
        <div className="container-fluid px-2 px-lg-5">
          <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          
          <a className="navbar-brand p-lg-0" href="https://www.dragarwal.com">
            <img 
              width="168" 
              height="68" 
              src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2022/05/main_logo-02-01.svg" 
              alt="Dr Agarwals Eye Hospital_logo" 
            />
          </a>

          <div className="collapse navbar-collapse" id="navbarsExample05">
            <nav className="primary-nav" aria-label="main navigation">
              <ul className="nav-list">
                {navLinks.map((item, index) => (
                  <li key={index} className={`nav-item ${item.submenu ? 'has-submenu' : ''} ${item.type === 'mega' ? 'has-mega-menu' : ''}`}>
                    <a href={item.url} className="nav-link">
                      {item.name}
                      <span className="chevron" aria-hidden="true">▾</span>
                    </a>
                    {item.submenu && (
                      <ul className={`sub-menu ${item.type === 'mega' ? 'mega-menu' : ''}`}>
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className={`sub-menu-item ${subItem.submenu ? 'has-submenu' : ''}`}>
                            <a href={subItem.url} className={`sub-menu-link ${subItem.className || ''}`}>
                              {subItem.name}
                              {subItem.submenu && <span className="chevron-right">▸</span>}
                            </a>
                            {subItem.submenu && (
                              <ul className="sub-menu-nested">
                                {subItem.submenu.map((nestedItem, nestedIndex) => (
                                  <li key={nestedIndex} className="sub-menu-item">
                                    <a href={nestedItem.url} className="sub-menu-link">{nestedItem.name}</a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="header-actions">
              <div className="search-box">
                <button className="search-button" aria-label="Search">
                  <svg viewBox="0 0 24 24" role="presentation" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="16" y1="16" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <a href="https://www.dragarwal.com/book-appointment/" className="book-button">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
