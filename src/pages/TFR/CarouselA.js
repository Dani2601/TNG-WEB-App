import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import banner1 from "../../assets/TFR/BANNER-MAIN.jpg";
import banner2 from "../../assets/TFR/Home.png";
import { useSelector } from "react-redux";

export default function CarouselA() {
  const carouselData = [
    {
      id: 1,
      imageSrc: banner1,
    },
  ];

  const carouselDatab = [
    {
      id: 1,
      imageSrc: banner2,
    },
  ];
  const { user } = useSelector((state) => state.record);

  const PrevArrow = (props) => (
    <button {...props} className="slick-arrow slick-prev">
      <MdArrowBackIos color="black" />
    </button>
  );

  const NextArrow = (props) => (
    <button {...props} className="slick-arrow slick-next">
      <MdArrowForwardIos color="black" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div id="carouselA">
      {" "}
      {/* Carousel */}
      <Slider {...settings} className="-mb-2">
        {carouselData.map((item) => (
          <div key={item.id} className="w-screen">
            <img src={item.imageSrc} alt={item.id} className="w-screen" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
