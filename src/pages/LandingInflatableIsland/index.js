import React from 'react'
import inflatablevideo from '../../assets/InflatableIsland/video/file.mp4';
import TISContainer from '../../components/Container/TISContainer';
import { HScreenCarouselBanner } from '../../components/Carousel/HScreenCarouselBanner';
import Introduction from '../../components/Introduction/Introduction';
// import SpiralCarousel from '../Carousel/SpiralCarousel';
import WorldSays from '../../components/WorldSays/WorldSays';
import Attractions from '../../components/Attractions/Attractions';
import Location from '../../components/Location/Location';
import InFlatableBookingSection from '../../components/Booking/InFlatableBookingSection';
import { useRef } from 'react';

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

export default function LandingInflatableIsland() {

  const attracts = useRef(null)

  const handleScroll = () => {
    attracts.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <TISContainer scroll={handleScroll}>
        <HScreenCarouselBanner items={carouselData}/>
        <Introduction />
        {/* <SpiralCarousel/> */}
        <WorldSays/>
        <Attractions setRef={attracts}/>
        <Location/>
        <InFlatableBookingSection/>
    </TISContainer>
  )
}
