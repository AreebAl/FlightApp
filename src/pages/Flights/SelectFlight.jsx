import React from 'react'
import AppHeader from '../../components/common/AppHeader'
import BottomNav from '../../components/common/BottomNav'
import FlightCard from '../../components/ui/FlightCard'

function SelectFlight() {
  return (
    <div className="select-container">
      <AppHeader />

      <div className="select-content">
        <div className="route-summary">
          <h2>NYC → LON</h2>
          <p>Tue, 22 Oct • 1 adult • Economy</p>
        </div>

        <div className="tabs">
          <button className="tab active">Cheapest</button>
          <button className="tab">Fastest</button>
          <button className="tab">Best</button>
        </div>

        <div className="filter-strip">
          <button className="pill">Nonstop</button>
          <button className="pill">Morning</button>
          <button className="pill">1 bag</button>
          <button className="pill">More filters</button>
        </div>

        <div className="flight-list">
          <FlightCard airline="SkyWays" departTime="08:20" arriveTime="20:15" duration="6h 55m" price="$549" stops="Nonstop" />
          <FlightCard airline="AeroJet" departTime="10:05" arriveTime="22:30" duration="7h 25m" price="$589" stops="Nonstop" featured />
          <FlightCard airline="CloudAir" departTime="14:10" arriveTime="02:45" duration="8h 35m" price="$499" stops="1 stop" />
        </div>
      </div>

      <BottomNav activeKey="search" />
    </div>
  )
}

export default SelectFlight


