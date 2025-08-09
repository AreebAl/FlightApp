import React, { useState } from 'react'
import AppHeader from '../../components/common/AppHeader'

function SeatBusiness() {
  const [selected, setSelected] = useState(new Set())

  const rows = 6
  const cols = ['A', 'B', 'C', 'D'] // 2-2 layout

  function toggleSeat(seatId) {
    const next = new Set(selected)
    next.has(seatId) ? next.delete(seatId) : next.add(seatId)
    setSelected(next)
  }

  return (
    <div className="seat-container">
      <AppHeader />
      <div className="seat-content">
        <h2 className="screen-title">Choose seats — Business</h2>
        <div className="legend">
          <span className="seat available" /> Available
          <span className="seat selected" /> Selected
          <span className="seat occupied" /> Occupied
        </div>

        <div className="seat-grid business">
          {[...Array(rows)].map((_, rIdx) => (
            <div key={rIdx} className="seat-row">
              <div className="row-label">{rIdx + 1}</div>
              <div className="row-seats">
                {cols.map((c, cIdx) => {
                  const id = `${rIdx + 1}${c}`
                  const isOccupied = (rIdx === 2 && (c === 'B' || c === 'C')) || (rIdx === 4 && c === 'A')
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
            <div className="amount">${(589 + selected.size * 60).toFixed(0)}</div>
          </div>
          <div className="bar-actions">
            <a className="bar-btn" href="/payment">Continue</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeatBusiness


