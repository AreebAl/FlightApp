import React from 'react'

function FlightCard({ airline, departTime, arriveTime, duration, price, stops, featured = false }) {
  return (
    <article className={`flight-card ${featured ? 'featured' : ''}`}>
      <div className="flight-main">
        <div className="airline">{airline}</div>
        <div className="times">
          <strong>{departTime}</strong>
          <span className="sep">→</span>
          <strong>{arriveTime}</strong>
        </div>
        <div className="meta">
          <span>{duration}</span>
          <span className="dot"/>
          <span>{stops}</span>
        </div>
      </div>
      <div className="flight-price">
        <div className="price">{price}</div>
        <a className="mini-cta" href="/booking">Select</a>
      </div>
    </article>
  )
}

export default FlightCard


