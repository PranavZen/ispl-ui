import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../hompageBannerSection/banner.css";
import BannerSlideItem from "./BannerSlideItem";
import { banner1, banner2, banner3, banner4 } from "../../../../assets/imagePath";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <section id="bannerSection">
      <Slider {...settings}>
        <BannerSlideItem
          tagline="“AB CHALTE HAI STREET TO STADIUM”"
          bannerImg={banner1}
          title="ISPL is Committed to Bridging the gap between street cricket and stadium glory !"
          buttonName="Register Now"
        />
        <BannerSlideItem
          tagline="“AB CHALTE HAI STREET TO STADIUM”"
          bannerImg={banner2}
          title="ISPL is Committed to Bridging the gap between street cricket and stadium glory !"
          buttonName="Register Now"
        />
        <BannerSlideItem
          tagline="“AB CHALTE HAI STREET TO STADIUM”"
          bannerImg={banner3}
          title="ISPL is Committed to Bridging the gap between street cricket and stadium glory !"
          buttonName="Register Now"
        />
        {/* <BannerSlideItem
          tagline="“AB CHALTE HAI STREET TO STADIUM”"
          bannerImg={banner4}
          title="ISPL is Committed to Bridging the gap between street cricket and stadium glory !"
          buttonName="Register Now"
        /> */}
      </Slider>
    </section>
  );
}

export default Banner;
