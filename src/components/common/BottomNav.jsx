import React from 'react'
import { Link } from 'react-router-dom'

function BottomNav({ activeKey = 'home' }) {
  const items = [
    { key: 'home', label: 'Home', to: '/main', icon: '🏠' },
    { key: 'trips', label: 'Trips', to: '#', icon: '🧳' },
    { key: 'search', label: 'Search', to: '#', icon: '🔎' },
    { key: 'profile', label: 'Profile', to: '#', icon: '👤' }
  ]

  return (
    <nav className="bottom-nav" aria-label="Primary">
      {items.map(item => (
        <Link key={item.key} to={item.to} className={`nav-item ${activeKey === item.key ? 'active' : ''}`}>
          <span className="icon" aria-hidden>{item.icon}</span>
          <span className="label">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}

export default BottomNav


