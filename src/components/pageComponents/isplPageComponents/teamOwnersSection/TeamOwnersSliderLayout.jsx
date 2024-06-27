import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function TeamOwnersSliderLayout({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    loop: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="teamOwnersSliderContainer">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default TeamOwnersSliderLayout;
