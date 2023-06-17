import React from 'react'
import {Topbar } from '../Navbar'
import InflatableMenubar from '../Navbar/InflatableMenubar'
import { CarouselBanner } from '../Carousel/CarouselBanner'
import inflatablevideo from '../../assets/InflatableIsland/video/file.mp4';
import { HScreenCarouselBanner } from '../Carousel/HScreenCarouselBanner';
import Introduction from '../Introduction/Introduction';
import SpiralCarousel from '../Carousel/SpiralCarousel';
import WorldSays from '../WorldSays/WorldSays';
import Attractions from '../Attractions/Attractions';
import Location from '../Location/Location';
import InFlatableBookingSection from '../Booking/InFlatableBookingSection';

const carouselData = [
  {
    id: 1,
    imageSrc: inflatablevideo,
    type: 'video'
  },
  {
    id: 2,
    imageSrc: "https://static.wixstatic.com/media/00f21d_858dacc19cae4a6e95bc0a7c3b8c3831~mv2.jpg/v1/fill/w_1831,h_786,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/00f21d_858dacc19cae4a6e95bc0a7c3b8c3831~mv2.jpg",
    type: 'img'
  },
  {
    id: 3,
    imageSrc: "https://static.wixstatic.com/media/00f21d_bb9f839bc626409fb1a5db2b44cf57a5~mv2.jpg/v1/fill/w_1831,h_786,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/00f21d_bb9f839bc626409fb1a5db2b44cf57a5~mv2.jpg",
    type: 'img'
  }
];

export default function TFRContainer({children}) {
  return (
    <div className='flex flex-col w-full'>
        <Topbar/>
        <InflatableMenubar/>
        <HScreenCarouselBanner items={carouselData}/>
        <Introduction/>
        {/* <SpiralCarousel/> */}
        <WorldSays/>
        <Attractions/>
        <Location/>
        <InFlatableBookingSection/>
    </div>
  )
}