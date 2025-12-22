import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function AppointmentConfirmed() {
  const { state } = useLocation()
  const id = state?.id
  return (
    <div className="container" style={{ padding: '2rem 0 4rem' }}>
      <ul className="bread-ul">
        <li><Link to="/"><span>Home</span></Link></li>
        <li><span>Appointment Confirmed</span></li>
      </ul>
      <section style={{ background: '#0a2e63', color: '#fff', padding: '2.5rem 2rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: '720px' }}>
          <h1 className="primary-heading" style={{ color: '#fff' }}>Appointment Confirmed</h1>
          <p>Your appointment has been confirmed.</p>
          <p>You will receive the appointment details soon on your registered WhatsApp number. Thank you for choosing us — we’re committed to providing you with the best eye care solutions.</p>
          {id && (
            <p style={{ marginTop: '0.5rem', opacity: 0.9 }}>Reference ID: <strong>{id}</strong></p>
          )}
        </div>
        <div aria-hidden="true" style={{ opacity: 0.2, fontSize: '6rem', lineHeight: 1 }}>✓</div>
      </section>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/" className="navbook-btn">Go to Home</Link>
      </div>
    </div>
  )
}
