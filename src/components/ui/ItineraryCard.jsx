import React from 'react'

function ItineraryCard({ airline, route, date, timeRange, duration, stops }) {
  return (
    <section className="itinerary-card" aria-label="Itinerary summary">
      <div className="row">
        <div className="airline">{airline}</div>
        <div className="route">{route}</div>
      </div>
      <div className="row subtle">
        <div>{date}</div>
        <div>{timeRange}</div>
      </div>
      <div className="row subtle">
        <div>{duration}</div>
        <div>{stops}</div>
      </div>
    </section>
  )
}

export default ItineraryCard


