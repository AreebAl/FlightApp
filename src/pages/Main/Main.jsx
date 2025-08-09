import React from 'react'
import AppHeader from '../../components/common/AppHeader'
import SearchCard from '../../components/ui/SearchCard'
import BottomNav from '../../components/common/BottomNav'
import HeroBanner from '../../components/ui/HeroBanner'
import Chips from '../../components/ui/Chips'

function Main() {
  return (
    <div className="main-container">
      <AppHeader />
      <div className="main-content">
        <HeroBanner />
        <h2 className="screen-title">Find your next flight</h2>
        <Chips items={["One way", "Round trip", "Multi-city"]} activeIndex={1} />
        <SearchCard />
      </div>
      <BottomNav activeKey="home" />
    </div>
  )
}

export default Main


