import React from 'react'
import TouristPlaces from './Placestovisit/TouristPlaces'
import Chennai from './Placestovisit/Chennai'
import Rameswaram from './Placestovisit/Rameswaram'
import Kodaikanal from './Placestovisit/Kodaikanal'
import Ooty from './Placestovisit/Ooty'
import Kanyakumari from './Placestovisit/Kanyakumari'
import Kumbakonam from './Placestovisit/Kumbakonam'
import Madurai from './Placestovisit/Madurai'
import Yarcaud from './Placestovisit/Yarcaud'
import Theni from './Placestovisit/Theni'
import Hogenkkal from './Placestovisit/Hogenkkal'

const Placestovisit = () => {
  return (
    <div className='container'>
      <TouristPlaces />
      <Chennai />
      <Rameswaram />
      <Kodaikanal />
      <Ooty />
      <Kanyakumari />
      <Kumbakonam />
      <Madurai />
      <Yarcaud />
      <Theni />
      <Hogenkkal />
    </div>
  )
}

export default Placestovisit