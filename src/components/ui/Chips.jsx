import React from 'react'

function Chips({ items = [], activeIndex = 0 }) {
  return (
    <div className="chips">
      {items.map((label, idx) => (
        <button key={label} className={`chip ${idx === activeIndex ? 'active' : ''}`}>{label}</button>
      ))}
    </div>
  )
}

export default Chips


