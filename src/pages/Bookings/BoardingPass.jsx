import React from 'react'
import AppHeader from '../../components/common/AppHeader'
import './boarding.css'

function BoardingPass() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-300 to-sky-400 p-3 font-sans">
      <div className="relative w-full max-w-[500px] mx-auto select-none">
        <button className="back-btn" aria-label="Go Back" onClick={() => history.back()}>
          <svg viewBox="0 0 24 24" fill="none" >
            <path d="M15 18l-6-6 6-6" stroke="#222" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="header text-3xl font-extrabold text-gray-900 mb-6">E-Ticket</h1>

        <div className="bp-vertical">
          {/* Header */}
          <div className="bp-header">
            <div className="left">
              <img className="ai-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5K9GkjE7b0_NT0NiXSYhHVSrqElEZnL0veQ&s" alt="Air India" />
            </div>
            <div className="right">
              <div className="airline">AIR INDIA</div>
              <div className="date">26 May 2023</div>
            </div>
          </div>

          {/* Flight details */}
          <div className="bp-flight">
            <div className="col">
              <div className="time">08:30</div>
              <div className="city">CHENNAI</div>
            </div>
            <div className="mid">
              <div className="plane" aria-hidden>✈︎</div>
              <div className="duration">1 hour</div>
            </div>
            <div className="col">
              <div className="time">09:30</div>
              <div className="city">BANGALORE</div>
            </div>
          </div>

          {/* Passenger */}
          <div className="bp-passenger-row">
            <div className="p-left">
              <img className="avatar" src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd02135e-09b5-4063-989e-30b421116a55.png" alt="Dinakaran" />
              <div className="p-meta">
                <div className="p-name">Dinakaran</div>
                <div className="p-sub">22 years, Male</div>
              </div>
            </div>
            <div className="p-seat" aria-label="Seat number">
              <svg className="seat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 10v7a1 1 0 1 0 2 0v-7H7Zm6-3.168a3.53 3.53 0 0 0-4 0v1.168h4v-1.168ZM15 17v-7h-2v7a2 2 0 0 0 4 0v-7h-2Z" /></svg>
              <span>17 D</span>
            </div>
          </div>

          {/* Perforation divider */}
          <div className="bp-perforation" />

          {/* Flight specifics */}
          <div className="bp-specs">
            <div className="cell"><div className="value">Economy</div><div className="label">Class</div></div>
            <div className="cell"><div className="value">4</div><div className="label">Gate</div></div>
            <div className="cell"><div className="value">3</div><div className="label">Terminal</div></div>
            <div className="cell"><div className="value">DJ017</div><div className="label">Flight</div></div>
          </div>

          {/* QR */}
          <div className="bp-qr">
            <div className="qr-box">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/559e8315-24ce-4f28-9b46-18f1d47c0161.png" alt="QR code" />
            </div>
            <div className="qr-label">Scan for boarding details</div>
          </div>
        </div>

        <button className="btn-print" type="button" aria-label="Print the E-ticket" onClick={() => window.print()}>
          PRINT
        </button>
      </div>
    </div>
  )
}

export default BoardingPass


