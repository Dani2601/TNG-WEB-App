// src/SpiralCarousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './spiral.css';

const carouselData = [
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

const SpiralCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="spiral-carousel">
      <Slider {...settings}>
        {
            carouselData.map((item, index) => (
                <div key={index}>
                    <img src={item.imageSrc} alt={`Slide ${index}`} />
                </div>
            ))
        }
      </Slider>
    </div>
  );
};

export default SpiralCarousel;
