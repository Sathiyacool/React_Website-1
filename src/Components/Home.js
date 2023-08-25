import React from 'react'
import Chennai from '../Components/Home/Chennai';
import ImgSlider from '../Components/Home/ImgSlider';
import TouristPlaces from '../Components/Home/TouristPlaces';
import Rameswaram from '../Components/Home/Rameswaram';
import Kodaikanal from '../Components/Home/Kodaikanal';
import Ooty from '../Components/Home/Ooty';
import Kanyakumari from '../Components/Home/Kanyakumari';
import Kumbakonam from '../Components/Home/Kumbakonam';
import Madurai from '../Components/Home/Madurai';
import Yarcaud from '../Components/Home/Yarcaud';
import Theni from '../Components/Home/Theni';
import Hogenkkal from '../Components/Home/Hogenkkal';

const Home = () => {
  return (
    <div>
      <ImgSlider />
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

export default Home