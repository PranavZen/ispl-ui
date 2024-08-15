import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TableSlider({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    loop: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500, 
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className="tableSliderWrap">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default TableSlider;
