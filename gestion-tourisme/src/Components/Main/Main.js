import React from 'react'
import HotelsMain from './HotelsMain/HotelsMain'
import CafesMain from './CafesMain/CafesMain'
import Restaurants from './RestaurantsMain/RestaurantsMain'
import Places from './PlacesMain/PlacesMain'
import Trips from './TripsMain/TripsMain'
export default function Main() {
  return (
    <div id="main"  >

      <HotelsMain/>
      <CafesMain/>
      <Restaurants/>
      <Places/>
      <Trips/>
    </div>
  )
}
