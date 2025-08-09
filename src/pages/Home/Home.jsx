import React from 'react'

function Home() {
  return (
    <div className="container">
      <section className="home-hero" aria-label="Explore the world with FlightApp">
        <div className="hero-art" aria-hidden="true">
          <svg className="map-blobs" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="flagsHint" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff3b3b"/>
                <stop offset="25%" stopColor="#ffd93b"/>
                <stop offset="50%" stopColor="#2ecc71"/>
                <stop offset="75%" stopColor="#3498db"/>
                <stop offset="100%" stopColor="#9b59b6"/>
              </linearGradient>
              <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8"/> 
              </filter>
            </defs>
            <g opacity="0.75">
              <ellipse cx="115" cy="130" rx="90" ry="60" fill="url(#flagsHint)" filter="url(#soft)"/>
              <ellipse cx="205" cy="105" rx="65" ry="45" fill="white" opacity="0.85" filter="url(#soft)"/>
              <ellipse cx="320" cy="105" rx="140" ry="70" fill="white" opacity="0.9" filter="url(#soft)"/>
              <ellipse cx="435" cy="150" rx="85" ry="55" fill="white" opacity="0.9" filter="url(#soft)"/>
              <ellipse cx="520" cy="210" rx="45" ry="28" fill="white" opacity="0.9" filter="url(#soft)"/>
            </g>
          </svg>
          <div className="flight-path"></div>
          <div className="plane" role="img" aria-label="airplane">✈︎</div>
        </div>
      </section>

      <div className="cta">
        <a className="cta-primary" href="/register">REGISTER</a>

        <div className="cta-secondary-row">
          <div className="cta-block">
            <p>Invited by a friend?</p>
            <a className="cta-link" href="#">Enter code</a>
          </div>
          <div className="cta-block cta-right">
            <p>Already a user?</p>
            <a className="cta-link" href="/login">Log In</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home


