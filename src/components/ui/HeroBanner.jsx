import React from 'react'

function HeroBanner() {
  return (
    <section className="hero-banner" aria-label="Seasonal deals and inspiration">
      <svg className="hero-overlay" viewBox="0 0 600 240" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6be9f2"/>
            <stop offset="100%" stopColor="#8ad1f7"/>
          </linearGradient>
        </defs>
        <g opacity="0.25">
          <circle cx="80" cy="60" r="60" fill="white"/>
          <circle cx="200" cy="80" r="50" fill="white"/>
          <circle cx="320" cy="60" r="65" fill="white"/>
          <circle cx="460" cy="90" r="45" fill="white"/>
          <circle cx="520" cy="150" r="30" fill="white"/>
        </g>
      </svg>
      <div className="hero-content">
        <div>
          <h3>Ready for takeoff?</h3>
          <p>Discover exclusive flight deals and trending destinations.</p>
        </div>
        <div className="hero-plane" role="img" aria-label="airplane">✈︎</div>
      </div>
    </section>
  )
}

export default HeroBanner


