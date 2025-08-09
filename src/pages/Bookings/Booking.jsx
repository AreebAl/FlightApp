import React, { useState } from 'react'
import AppHeader from '../../components/common/AppHeader'
import ItineraryCard from '../../components/ui/ItineraryCard'

function Booking() {
  const [fullName, setFullName] = useState('')
  const [passport, setPassport] = useState('')

  return (
    <div className="booking-container">
      <AppHeader />

      <div className="booking-content">
        <h2 className="screen-title">Booking details</h2>
        <ItineraryCard airline="AeroJet" route="NYC → LON" date="Tue, 22 Oct" timeRange="10:05 – 22:30" duration="7h 25m" stops="Nonstop" />

        <section className="passenger-form">
          <h3 className="section-title">Passenger</h3>
          <div className="field">
            <label htmlFor="fullName">Full name</label>
            <input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Jane Doe" />
          </div>
          <div className="field">
            <label htmlFor="passport">Passport / ID</label>
            <input id="passport" value={passport} onChange={(e) => setPassport(e.target.value)} placeholder="A12345678" />
          </div>
        </section>

        <div className="price-bar">
          <div className="price-info">
            <div className="label">Total</div>
            <div className="amount">$589</div>
          </div>
          <div className="bar-actions">
            <a className="bar-btn" href="/seats/economy">Economy seats</a>
            <a className="bar-btn alt" href="/seats/business">Business seats</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking


