import React, { useEffect, useMemo, useState } from 'react'
import './ManualSearch.css'

export default function ManualSearch({ hospitals = [], onFilter }) {
  const [tab, setTab] = useState('region') // region | state | city
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('/api/meta/countries-states')
      .then(r => r.json())
      .then(j => setCountries(j.countries || []))
      .catch(() => setCountries([]))
  }, [])

  const indiaStates = useMemo(() => {
    const ind = countries.find(c => c.name === 'India' || c.code === 'IN')
    return ind?.states || []
  }, [countries])

  const cityList = useMemo(() => {
    const s = new Set()
    hospitals.forEach(h => { if (h.city) s.add(h.city) })
    return Array.from(s).sort()
  }, [hospitals])

  const apply = (f) => { onFilter && onFilter(f) }

  return (
    <section className="manual-search container">
      <h3 className="manual-title">SEARCH MANUALLY</h3>
      <div className="manual-tabs">
        <button className={tab === 'region' ? 'active' : ''} onClick={() => setTab('region')}>Region</button>
        <button className={tab === 'state' ? 'active' : ''} onClick={() => setTab('state')}>State</button>
        <button className={tab === 'city' ? 'active' : ''} onClick={() => setTab('city')}>City</button>
      </div>

      {tab === 'region' && (
        <div className="manual-grid">
          <div className="manual-card map india" onClick={() => apply({ country: 'India', state: '', city: '' })}>
            <span className="label">India</span>
          </div>
          <div className="manual-card map africa" onClick={() => apply({ country: 'Africa', state: '', city: '' })}>
            <span className="label">Africa</span>
          </div>
        </div>
      )}

      {tab === 'state' && (
        <div className="pill-row">
          {indiaStates.map(s => (
            <button key={s} className="pill" onClick={() => apply({ country: 'India', state: s, city: '' })}>{s}</button>
          ))}
          {!indiaStates.length && <div className="hint">States will appear once data loads.</div>}
        </div>
      )}

      {tab === 'city' && (
        <div className="pill-row">
          {cityList.map(c => (
            <button key={c} className="pill" onClick={() => apply({ country: '', state: '', city: c })}>{c}</button>
          ))}
          {!cityList.length && <div className="hint">Cities will appear after hospitals load.</div>}
        </div>
      )}
    </section>
  )
}
