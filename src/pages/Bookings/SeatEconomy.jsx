import React, { useState } from 'react'
import AppHeader from '../../components/common/AppHeader'

function SeatEconomy() {
  const [selected, setSelected] = useState(new Set())

  const rows = 12
  const left = ['A', 'B', 'C']
  const right = ['D', 'E', 'F'] // 3-3 layout

  function toggleSeat(id) {
    const next = new Set(selected)
    next.has(id) ? next.delete(id) : next.add(id)
    setSelected(next)
  }

  return (
    <div className="seat-container">
      <AppHeader />
      <div className="seat-content">
        <h2 className="screen-title">Choose seats — Economy</h2>
        <div className="legend">
          <span className="seat available" /> Available
          <span className="seat selected" /> Selected
          <span className="seat occupied" /> Occupied
        </div>

        <div className="seat-grid economy">
          {[...Array(rows)].map((_, rIdx) => (
            <div key={rIdx} className="seat-row">
              <div className="row-label">{rIdx + 1}</div>
              <div className="row-seats wide">
                {[...left, 'gap', ...right].map((c) => {
                  if (c === 'gap') return <div key={`gap-${rIdx}`} className="aisle" />
                  const id = `${rIdx + 1}${c}`
                  const isOccupied = (rIdx % 5 === 0 && (c === 'B' || c === 'E'))
                  const className = `seat ${isOccupied ? 'occupied' : selected.has(id) ? 'selected' : 'available'}`
                  return (
                    <button key={id} className={className} disabled={isOccupied} onClick={() => toggleSeat(id)}>{c}</button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="price-bar">
          <div className="price-info">
            <div className="label">Total</div>
            <div className="amount">${(499 + selected.size * 20).toFixed(0)}</div>
          </div>
          <div className="bar-actions">
            <a className="bar-btn" href="/payment">Continue</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeatEconomy


