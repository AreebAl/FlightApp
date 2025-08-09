import React from 'react'

function PromoCards() {
  const cards = [
    { title: 'Summer Savings', subtitle: 'Up to 30% off', emoji: '🌞' },
    { title: 'Weekend Getaways', subtitle: 'Quick trips', emoji: '🧳' },
    { title: 'Long-haul Comfort', subtitle: 'Best airlines', emoji: '🛫' },
  ]

  return (
    <div className="promo-scroller">
      {cards.map((c) => (
        <article key={c.title} className="promo-card">
          <div className="promo-emoji" aria-hidden>{c.emoji}</div>
          <div className="promo-text">
            <h4>{c.title}</h4>
            <p>{c.subtitle}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default PromoCards


