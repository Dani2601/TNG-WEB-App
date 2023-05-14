import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBack, MdArrowBackIos, MdArrowForward, MdArrowForwardIos } from 'react-icons/md';
import "./carousel.css"

export function CarouselBanner({items}) {

    const PrevArrow = (props) => (
        <button {...props} className="slick-arrow slick-prev">
            <MdArrowBackIos color='black'/>
        </button>
    );
      
    const NextArrow = (props) => (
        <button {...props} className="slick-arrow slick-next">
            <MdArrowForwardIos color='black'/>
        </button>
    );
      
    const settings = {
        dots: true,
        infinite: true,
        speed: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
    };

    return (
        <Slider {...settings}>
            {items.map((item) => (
                <div key={item.id} className="h-full">
                    <img src={item.imageSrc} alt={item.id} className="h-full"/>
                </div>
            ))}
        </Slider>
    )
}
