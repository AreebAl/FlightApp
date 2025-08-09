import React from 'react'

function SearchCard() {
  return (
    <section className="search-card">
      <div className="search-row">
        <div className="search-field">
          <label>From</label>
          <input type="text" placeholder="City or airport" />
        </div>
        <div className="search-field">
          <label>To</label>
          <input type="text" placeholder="City or airport" />
        </div>
      </div>
      <div className="search-row">
        <div className="search-field">
          <label>Departure</label>
          <input type="date" />
        </div>
        <div className="search-field">
          <label>Return</label>
          <input type="date" />
        </div>
      </div>
      <a className="cta-primary" href="/flights/select">Search flights</a>
    </section>
  )
}

export default SearchCard


