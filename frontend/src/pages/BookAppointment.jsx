import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const breadcrumbSchema = {
  '@context': 'https://schema.org/',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dragarwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Book Appointment', item: 'https://www.dragarwal.com/book-appointment/' },
  ],
}

const BookAppointment = () => {
  const navigate = useNavigate()
  const [meta, setMeta] = useState({ countries: [], departments: [] })
  const [hospitals, setHospitals] = useState([])
  const [doctors, setDoctors] = useState([])
  const [timeslots, setTimeslots] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [note, setNote] = useState('')

  const [form, setForm] = useState({
    patientName: '',
    patientEmail: '',
    phoneCountryCode: 'IN',
    phoneDialCode: '+91',
    phoneNumber: '',
    country: 'India',
    state: '',
    city: '',
    hospitalId: '',
    hospitalName: '',
    date: '',
    department: 'General Ophthalmology',
    doctorId: '',
    doctorName: '',
    timeslot: '',
    agreeWhatsApp: true,
    agreeTerms: true,
    agreeContact: true,
  })

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const [cRes, dRes] = await Promise.all([
          fetch('/api/meta/countries-states'),
          fetch('/api/meta/departments'),
        ])
        const c = await cRes.json()
        const d = await dRes.json()
        if (!mounted) return
        setMeta({ countries: c.countries || [], departments: d.departments || [] })
      } catch (e) {
        // ignore meta fetch errors; UI will show empty lists
      }
    })()
    return () => { mounted = false }
  }, [])

  const statesForCountry = useMemo(() => {
    const c = meta.countries.find(x => x.name === form.country || x.code === form.phoneCountryCode)
    return c?.states || []
  }, [meta.countries, form.country, form.phoneCountryCode])

  const cityOptions = useMemo(() => {
    const set = new Set()
    hospitals.forEach(h => { if (h.city) set.add(h.city) })
    return Array.from(set).sort()
  }, [hospitals])

  const dateOptions = useMemo(() => {
    const out = []
    const today = new Date()
    for (let i = 0; i < 14; i++) {
      const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i)
      const yyyy = d.getFullYear()
      const mm = String(d.getMonth() + 1).padStart(2, '0')
      const dd = String(d.getDate()).padStart(2, '0')
      const value = `${yyyy}-${mm}-${dd}`
      const label = d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
      out.push({ value, label })
    }
    return out
  }, [])

  // Fallback static slots so dropdown is active even if API hasn't loaded
  const defaultSlots = useMemo(() => (
    ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30']
  ), [])

  useEffect(() => {
    const params = new URLSearchParams()
    if (form.country) params.set('country', form.country)
    if (form.state) params.set('state', form.state)
    if (form.city) params.set('city', form.city)
    fetch(`/api/meta/hospitals?${params.toString()}`)
      .then(r => r.json())
      .then(j => setHospitals(j.hospitals || []))
      .catch(() => setHospitals([]))
  }, [form.country, form.state, form.city])

  useEffect(() => {
    if (!form.hospitalId || !form.department) { setDoctors([]); return }
    const params = new URLSearchParams({ hospitalId: form.hospitalId, department: form.department })
    fetch(`/api/doctors?${params.toString()}`)
      .then(r => r.json())
      .then(j => setDoctors(j.doctors || []))
      .catch(() => setDoctors([]))
  }, [form.hospitalId, form.department])

  useEffect(() => {
    if (!form.date) { setTimeslots([]); return }
    const params = new URLSearchParams({ doctorId: form.doctorId || 'ANY', date: form.date })
    fetch(`/api/timeslots?${params.toString()}`)
      .then(r => r.json())
      .then(j => setTimeslots(j.timeslots || []))
      .catch(() => setTimeslots([]))
  }, [form.doctorId, form.date])

  const onSubmit = async (e) => {
    e.preventDefault()
    // Basic client-side validation to avoid 400s
    const missing = []
    if (!form.patientName) missing.push('Patient Name')
    if (!form.phoneNumber) missing.push('Mobile Number')
    if (!form.country) missing.push('Country')
    if (!form.state) missing.push('State')
    if (!form.city) missing.push('City')
    if (!form.hospitalId) missing.push('Hospital')
    if (!form.date) missing.push('Date')
    if (!form.department) missing.push('Department')
    if (!String(form.doctorId || '').trim()) missing.push('Doctor')
    if (!String(form.timeslot || '').trim()) missing.push('Time Slot')
    if (missing.length) {
      const msg = `Please fill: ${missing.join(', ')}.`
      setNote(msg)
      try { window.scrollTo({ top: 0, behavior: 'smooth' }) } catch {}
      try { window.alert(msg) } catch {}
      return
    }

    setNote('Booking appointment...')
    setSubmitting(true)
    try {
      const payload = { ...form }
      if (!payload.hospitalName) {
        const h = hospitals.find(h => h.id === payload.hospitalId)
        payload.hospitalName = h?.name || 'Selected Hospital'
      }
      if (!payload.doctorName) {
        const d = doctors.find(d => d.id === payload.doctorId)
        payload.doctorName = d?.name || (payload.doctorId === 'ANY' ? 'Any Available Doctor' : 'Selected Doctor')
      }
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json?.error || 'Failed to book appointment')
      setNote('Appointment booked successfully!')
      // Navigate to confirmation page and show reference id
      try { window.alert(`Appointment booked successfully. Ref: ${json.id || ''}`) } catch {}
      navigate('/appointment-confirmed', { state: { id: json.id } })
      setForm(f => ({
        ...f,
        patientName: '',
        patientEmail: '',
        phoneNumber: '',
        hospitalId: '', hospitalName: '',
        date: '', department: f.department,
        doctorId: '', doctorName: '',
        timeslot: '',
      }))
    } catch (err) {
      console.error(err)
      setNote('Booking failed. Please try again.')
      try { window.scrollTo({ top: 0, behavior: 'smooth' }) } catch {}
      try { window.alert(err?.message || 'Booking failed. Please try again.') } catch {}
    } finally {
      setSubmitting(false)
    }
  }

  const onCountryChange = (value) => {
    const country = meta.countries.find(c => c.name === value)
    setForm(f => ({
      ...f,
      country: value,
      phoneCountryCode: country?.code || f.phoneCountryCode,
      phoneDialCode: country?.dialCode || f.phoneDialCode,
      state: '', city: '', hospitalId: '', doctorId: '', timeslot: '',
    }))
  }

  const onStateChange = (value) => {
    setForm(f => ({ ...f, state: value, city: '', hospitalId: '', doctorId: '', timeslot: '' }))
  }

  const onInput = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  return (
    <div className="book-page">
      <section className="book-banner">
        <div className="container">
          <div className='modification'>
            <a href="/"><span>Home</span></a>
            <span>Book Appointment</span>
          </div>
          <ul className="bread-ul">
            <li><a href="/"><span>Home</span></a></li>
            <li><span>Book Appointment</span></li>
          </ul>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
          <div className="book-hero">
            <div className="book-copy">
              <h1 className="primary-heading">Book Appointment</h1>
              <p>Book an appointment at <a className="brand-link" href="https://www.dragarwal.com/eye-hospitals/">Dr Agarwals Eye Hospitals</a> by filling the form below.</p>
              <form className="book-form" onSubmit={onSubmit} noValidate>
                <div className="intl-form-note" aria-live="polite">{note}</div>
                <label className="book-input">
                  <input value={form.patientName} onChange={onInput('patientName')} required name="patientName" type="text" placeholder="Patient's Full Name" />
                </label>
                <label className="book-input with-icon">
                  <input value={form.patientEmail} onChange={onInput('patientEmail')} name="patientEmail" type="email" placeholder="Patient's Email ID (optional)" />
                  <span className="i-icon" aria-hidden="true">i</span>
                </label>
                <div className="book-row">
                  <label className="book-input" style={{ maxWidth: 150 }}>
                    <span className="field-label">Code</span>
                    <select value={form.phoneDialCode} onChange={(e) => setForm(f => ({ ...f, phoneDialCode: e.target.value }))}>
                      {meta.countries.map(c => (
                        <option key={c.code} value={c.dialCode}>{c.name} ({c.dialCode})</option>
                      ))}
                    </select>
                  </label>
                  <label className="book-input with-icon flex-1">
                    <input value={form.phoneNumber} onChange={onInput('phoneNumber')} name="phoneNumber" type="tel" placeholder="Patient’s Mobile Number" required />
                    <span className="i-icon" aria-hidden="true">i</span>
                  </label>
                </div>
                <div className="book-row">
                  <label className="book-input">
                    <span className="field-label">Country</span>
                    <select value={form.country} onChange={(e) => onCountryChange(e.target.value)}>
                      {meta.countries.map(c => (
                        <option key={c.code} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </label>
                  <label className="book-input">
                    <span className="field-label">State</span>
                    <select value={form.state} onChange={(e) => onStateChange(e.target.value)}>
                      <option value="" disabled>Select State</option>
                      {statesForCountry.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </label>
                  <label className="book-input">
                    <span className="field-label">City</span>
                    <select
                      value={form.city}
                      onChange={(e) => setForm(f => ({ ...f, city: e.target.value, hospitalId: '', doctorId: '', timeslot: '' }))}
                      disabled={!cityOptions.length}
                    >
                      <option value="">{cityOptions.length ? 'Select City' : 'No cities'}</option>
                      {cityOptions.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="book-input with-plus">
                  <span className="field-label">Hospital</span>
                  <select value={form.hospitalId} onChange={(e) => setForm(f => ({ ...f, hospitalId: e.target.value, doctorId: '', timeslot: '' }))}>
                    <option value="">Select Hospital</option>
                    {hospitals.map(h => (
                      <option key={h.id} value={h.id}>{h.name} - {h.city}</option>
                    ))}
                  </select>
                  <span className="plus" aria-hidden="true">＋</span>
                </label>
                <label className="book-input">
                  <span className="field-label">Date</span>
                  <select value={form.date} onChange={onInput('date')}>
                    <option value="">Select Date</option>
                    {dateOptions.map(d => (
                      <option key={d.value} value={d.value}>{d.label}</option>
                    ))}
                  </select>
                </label>
                <label className="book-input">
                  <span className="field-label">Department</span>
                  <select value={form.department} onChange={(e) => setForm(f => ({ ...f, department: e.target.value, doctorId: '', timeslot: '' }))}>
                    {meta.departments.map(dep => (
                      <option key={dep} value={dep}>{dep}</option>
                    ))}
                  </select>
                </label>
                <div className="book-row">
                  <label className="book-input">
                    <span className="field-label">Select Doctor</span>
                    <select value={form.doctorId} onChange={(e) => setForm(f => ({ ...f, doctorId: e.target.value, timeslot: '' }))}>
                      <option value="">Select Doctor</option>
                      {doctors.map(d => (
                        <option key={d.id} value={d.id}>{d.name}</option>
                      ))}
                    </select>
                  </label>
                  <label className="book-input">
                    <span className="field-label">Time Slot</span>
                    <select value={form.timeslot} onChange={onInput('timeslot')}>
                      <option value="">Select Time</option>
                      {(timeslots.length ? timeslots : defaultSlots).map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="book-checks">
                  <label className="check">
                    <input type="checkbox" checked={form.agreeWhatsApp} onChange={(e) => setForm(f => ({ ...f, agreeWhatsApp: e.target.checked }))} />
                    <span>Send appointment updates on Whatsapp</span>
                  </label>
                  <label className="check">
                    <input type="checkbox" checked={form.agreeTerms} onChange={(e) => setForm(f => ({ ...f, agreeTerms: e.target.checked }))} />
                    <span>
                      I agree to the <a href="https://www.dragarwal.com/terms-and-conditions/">Terms & Conditions</a> and <a href="https://www.dragarwal.com/privacy-policy/">Privacy Policy</a>.
                    </span>
                  </label>
                  <label className="check">
                    <input type="checkbox" checked={form.agreeContact} onChange={(e) => setForm(f => ({ ...f, agreeContact: e.target.checked }))} />
                    <span>
                      I agree to be contacted by Dr Agarwals Eye Hospital or its representative through SMS/Email, RCS, whatsapp or call. This consent will override any registration for NDNC.
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="book-next"
                >
                  {submitting ? 'Booking...' : 'Book Appointment'}
                </button>
              </form>
            </div>
            <div className="book-visual">
              <img  src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/01/booking-right.jpg" alt="Booking Visual" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BookAppointment
