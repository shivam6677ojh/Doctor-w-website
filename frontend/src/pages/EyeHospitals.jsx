import React, { useEffect, useState, useMemo } from 'react'
import LocationSearch from '../components/LocationSearch'
import ManualSearch from '../components/ManualSearch'
import PopularSearch from '../components/PopularSearch'

export default function EyeHospitals() {
  const API_BASE = import.meta.env.VITE_API_BASE || ''
  const [hospitals, setHospitals] = useState([])
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({ country: '', state: '', city: '' })

  useEffect(() => {
    fetch(`${API_BASE}/api/meta/hospitals`)
      .then(r => r.json())
      .then(j => setHospitals(j.hospitals || []))
      .catch(() => setHospitals([]))
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const hasFilters = filters.country || filters.state || filters.city
    if (!q && !hasFilters) return hospitals
    return hospitals.filter(h => {
      const matchText = q ? ((h.name || '').toLowerCase().includes(q) || (h.city || '').toLowerCase().includes(q) || (h.state || '').toLowerCase().includes(q)) : true
      const matchCountry = filters.country ? (h.country || '').toLowerCase() === filters.country.toLowerCase() : true
      const matchState = filters.state ? (h.state || '').toLowerCase() === filters.state.toLowerCase() : true
      const matchCity = filters.city ? (h.city || '').toLowerCase() === filters.city.toLowerCase() : true
      return matchText && matchCountry && matchState && matchCity
    })
  }, [hospitals, query, filters])

  return (
    <div className="eye-hospitals-page">
      <LocationSearch />
      <ManualSearch hospitals={hospitals} onFilter={(f) => setFilters(f)} />
      <div className="container" style={{ padding: '32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto 16px' }}>
          <input
            type="text"
            placeholder="Filter by name, city or state"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control"
          />
          {(filters.country || filters.state || filters.city) && (
            <div style={{ marginTop: 8, color: '#6c757d' }}>
              Showing results for
              {filters.country && ` country: ${filters.country}`}
              {filters.state && `, state: ${filters.state}`}
              {filters.city && `, city: ${filters.city}`}
              {' '}<button className="btn btn-sm btn-link" onClick={() => setFilters({ country: '', state: '', city: '' })}>clear</button>
            </div>
          )}
        </div>
        <div className="row">
          {filtered.map(h => (
            <div key={h.id} className="col-md-6" style={{ marginBottom: 16 }}>
              <div className="card" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ marginBottom: 8 }}>{h.name}</h5>
                  <p className="card-text" style={{ marginBottom: 4 }}>
                    <strong>City:</strong> {h.city} &nbsp; | &nbsp; <strong>State:</strong> {h.state}
                  </p>
                  <p className="card-text" style={{ marginBottom: 4 }}>
                    <strong>Country:</strong> {h.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {!filtered.length && (
            <div className="col-12" style={{ textAlign: 'center', color: '#6c757d' }}>
              No hospitals found.
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <PopularSearch />
      </div>
    </div>
  )
}
