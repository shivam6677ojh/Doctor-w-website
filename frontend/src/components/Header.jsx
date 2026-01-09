import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import './Header.css'
import './HeaderSubmenu.css'

const navLinks = [
  {
    name: 'Locations',
    url: '#',
    submenu: [
      { name: 'Eye Hospitals', url: '/eye-hospitals' },
      {
        name: 'Eye Clinics',
        url: '#',
        submenu: [
          { name: 'About Eye Clinic', url: '/eye-clinic/about' },
          { name: 'Find a Clinic', url: '/eye-hospitals' }
        ]
      }
    ]
  },
  { name: 'Doctors', url: '/book-appointment' },
  {
    name: 'Treatments',
    url: '/eye-treatment',
    type: 'mega',
    submenu: [
      { name: 'Cataract Surgery', url: '/eye-treatment' },
      { name: 'Refractive Surgery', url: '/eye-treatment' },
      { name: 'Dry Eyes', url: '/eye-treatment' },
      { name: 'PDEK', url: '/eye-treatment' },
      { name: 'Anti VEGF Agents', url: '/eye-treatment' },
      { name: 'Cosmetic Eye Surgery', url: '/eye-treatment' },
      { name: 'Vitrectomy', url: '/eye-treatment' },
      { name: 'Lasik', url: '/eye-treatment' },
      { name: 'MIGS', url: '/eye-treatment' },
      { name: 'VIEW MORE', url: '/eye-treatment', className: 'view-more' }
    ]
  },
  {
    name: 'Eye Diseases',
    url: '/eye-diseases',
    type: 'mega',
    submenu: [
      { name: 'Cataract', url: '/eye-diseases' },
      { name: 'Glaucoma', url: '/eye-diseases' },
      { name: 'Diabetic Retinopathy', url: '/eye-diseases' },
      { name: 'Squint', url: '/eye-diseases' },
      { name: 'Macular Hole', url: '/eye-diseases' },
      { name: 'Retinal Detachment', url: '/eye-diseases' },
      { name: 'Keratoconus', url: '/eye-diseases' },
      { name: 'ROP', url: '/eye-diseases' },
      { name: 'VIEW MORE', url: '/eye-diseases', className: 'view-more' }
    ]
  },
  {
    name: 'Education & Training',
    url: '/careers',
    type: 'mega',
    submenu: [
      { name: 'DNB', url: '/careers' },
      { name: 'Fellowship-Ophthalmology', url: '/careers' },
      { name: 'Careers at Dr. Agarwals', url: '/careers' },
      { name: 'Short-Term-Optometry', url: '/careers' },
      { name: 'Short-Term-Ophthalmology', url: '/careers' },
      {
        name: 'Optometry College',
        url: '#',
        submenu: [
          {
            name: 'Optometry college in Chennai(Center of Excellence)',
            url: '#'
          },
          { name: 'Optometry college in Tirunelveli', url: '/careers' }
        ]
      },
      { name: 'Fellowship-Optometry', url: '/careers' },
      { name: 'Internship in Clinical Optometry', url: '/careers' }
    ]
  }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setExpandedMenu(null); // Reset submenus when closing main menu
  };

  const toggleMobile = () => {
    setIsMobileOpen((v) => !v);
    if (isMobileOpen) setExpandedMenu(null);
  };

  const toggleSubmenu = (menuName) => {
    if (expandedMenu === menuName) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(menuName);
    }
  };

  const isInternal = (url) => typeof url === 'string' && url.startsWith('/');

  useEffect(() => {
    if (isMobileOpen) {
      document.body.classList.add('mobile-nav-open')
    } else {
      document.body.classList.remove('mobile-nav-open')
    }
    return () => document.body.classList.remove('mobile-nav-open')
  }, [isMobileOpen])

  return (
    <div className="top-shell">
      <div className="topbar">
        <div className="container-fluid">
          <div className="topmenu">
            <Link to="/blogs" className="topmenu-link">Blog</Link>
            <Link to="/media" className="topmenu-link">Media</Link>
            <Link to="/careers" className="topmenu-link">Careers</Link>
            <Link to="/international-eye-hospital" className="topmenu-link">International Patients</Link>
            <Link to="/eye-test" className="topmenu-link">Eye Test</Link>
            
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
          <div id="desktoptoggler" onClick={toggleMenu} className={isMenuOpen ? 'open' : ''}>
            <div className="toggler-icon"></div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMobileOpen}
            onClick={toggleMobile}
          >
            <span className="navbar-toggler-icon" />
          </button>
          
          <Link className="navbar-brand p-lg-0" to="/">
            <img 
              width="168" 
              height="68" 
              src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2022/05/main_logo-02-01.svg" 
              alt="Dr Agarwals Eye Hospital_logo" 
            />
          </Link>

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
                            {isInternal(subItem.url) ? (
                              <Link to={subItem.url} className={`sub-menu-link ${subItem.className || ''}`}>
                                {subItem.name}
                                {subItem.submenu && <span className="chevron-right">▸</span>}
                              </Link>
                            ) : (
                              <a href={subItem.url} className={`sub-menu-link ${subItem.className || ''}`}>
                                {subItem.name}
                                {subItem.submenu && <span className="chevron-right">▸</span>}
                              </a>
                            )}
                            {subItem.submenu && (
                              <ul className="sub-menu-nested">
                                {subItem.submenu.map((nestedItem, nestedIndex) => (
                                  <li key={nestedIndex} className="sub-menu-item">
                                    {isInternal(nestedItem.url) ? (
                                      <Link to={nestedItem.url} className="sub-menu-link">{nestedItem.name}</Link>
                                    ) : (
                                      <a href={nestedItem.url} className="sub-menu-link">{nestedItem.name}</a>
                                    )}
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
              <Link to="/book-appointment" className="book-button">
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Desktop Menu Dropdown */}
        <div className={`desktop-menu-dropdown ${isMenuOpen ? 'show' : ''}`}>
          <div className="container-fluid px-2 px-lg-5">
            <div className="row">
              <div className="col-md-4">
                <ul className="desktop-menu-list">
                  <li><a href="#">All about eyes!</a></li>
                  <li className={`has-arrow ${expandedMenu === 'leadership' ? 'expanded' : ''}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu('leadership'); }}>
                      Leadership
                    </a>
                    <ul className="desktop-submenu">
                      <li><a href="/careers">Dr. Agarwal’s Health Care Ltd</a></li>
                      <li><a href="#">Dr. Agarwal’s Eye Hospital Ltd</a></li>
                    </ul>
                  </li>
                  <li className={`has-arrow ${expandedMenu === 'news' ? 'expanded' : ''}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu('news'); }}>
                      News & Media
                    </a>
                    <ul className="desktop-submenu">
                      <li><a href="#">Media Kit</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="desktop-menu-list">
                  <li><a href="#">Our Milestones</a></li>
                  <li className={`has-arrow ${expandedMenu === 'investors' ? 'expanded' : ''}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu('investors'); }}>
                      For Investors
                    </a>
                    <ul className="desktop-submenu">
                      <li><a href="#">Dr. Agarwal’s Eye Hospital Ltd</a></li>
                      <li><a href="#">Dr. Agarwal’s Health Care Ltd</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="desktop-menu-list">
                  <li><a href="#">For Doctors</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav${isMobileOpen ? ' open' : ''}`} aria-hidden={!isMobileOpen}>
        <div className="mobile-nav__header">
          <Link className="navbar-brand" to="/" onClick={() => setIsMobileOpen(false)}>
            <img 
              width="140" 
              height="56" 
              src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2022/05/main_logo-02-01.svg" 
              alt="Dr Agarwals Eye Hospital_logo" 
            />
          </Link>
          <button className="mobile-nav__close" aria-label="Close menu" onClick={toggleMobile}>✕</button>
        </div>
        <nav className="mobile-nav__body">
          <ul className="mobile-nav__list">
            {navLinks.map((item, index) => (
              <li key={index} className={`mobile-nav__item ${item.submenu ? 'has-sub' : ''}`}>
                <div className="mobile-nav__link-row">
                  {isInternal(item.url) ? (
                    <Link to={item.url} className="mobile-nav__link" onClick={() => setIsMobileOpen(false)}>
                      {item.name}
                    </Link>
                  ) : (
                    <a href={item.url} className="mobile-nav__link" onClick={() => setIsMobileOpen(false)}>
                      {item.name}
                    </a>
                  )}
                  {item.submenu && (
                    <button
                      className={`mobile-nav__chev ${expandedMenu === item.name ? 'exp' : ''}`}
                      aria-label="Expand submenu"
                      onClick={(e) => { e.preventDefault(); toggleSubmenu(item.name); }}
                    >
                      ▾
                    </button>
                  )}
                </div>
                {item.submenu && (
                  <ul className={`mobile-sub ${expandedMenu === item.name ? 'show' : ''}`}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className={`mobile-sub__item ${subItem.submenu ? 'has-sub' : ''}`}>
                        {isInternal(subItem.url) ? (
                          <Link to={subItem.url} className="mobile-sub__link" onClick={() => setIsMobileOpen(false)}>
                            {subItem.name}
                          </Link>
                        ) : (
                          <a href={subItem.url} className="mobile-sub__link" onClick={() => setIsMobileOpen(false)}>
                            {subItem.name}
                          </a>
                        )}
                        {subItem.submenu && (
                          <ul className="mobile-sub-nested">
                            {subItem.submenu.map((nestedItem, nestedIndex) => (
                              <li key={nestedIndex} className="mobile-sub-nested__item">
                                {isInternal(nestedItem.url) ? (
                                  <Link to={nestedItem.url} className="mobile-sub-nested__link" onClick={() => setIsMobileOpen(false)}>
                                    {nestedItem.name}
                                  </Link>
                                ) : (
                                  <a href={nestedItem.url} className="mobile-sub-nested__link" onClick={() => setIsMobileOpen(false)}>
                                    {nestedItem.name}
                                  </a>
                                )}
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
          <div className="mobile-nav__actions">
            <Link to="/book-appointment" className="book-button" onClick={() => setIsMobileOpen(false)}>
              <span>Book Appointment</span>
            </Link>
          </div>
        </nav>
      </div>
      {/* Scrim is kept as sibling for correct stacking */}
      <button className={`mobile-nav__scrim${isMobileOpen ? ' show' : ''}`} aria-label="Close menu" onClick={toggleMobile} />
    </div>
  )
}
