import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../hompageBannerSection/banner.css";
import BannerSlideItem from "./BannerSlideItem";
import { banner1, banner2, banner3, banner5, banner6 } from "../../../../assets/imagePath";
import axios from "axios";

function Banner() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [completedStatus, setCompletedStatus] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("apiToken");
    if (token) {
      setIsLoggedIn(true);
      fetchUserDashboard();
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const fetchUserDashboard = async () => {
    try {
      const response = await axios.get(
        'https://my.ispl-t10.com/api/user-dashboard-api',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('apiToken')}`,
          },
        }
      );
      // Assuming response.data contains the completed_status
      setCompletedStatus(response.data.completed_status);
    } catch (error) {
      console.error('Error fetching user dashboard:', error);
    }
  };

 
  const handleLogout = () => {
    localStorage.removeItem('apiToken');
    setIsLoggedIn(false);
  };


  const settings = {
    dots: true,
    infinite: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
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
    <>
      <section id="bannerSection">
        <Slider {...settings}>
        <BannerSlideItem
            // tagline="“AB CHALTE HAI STREET TO STADIUM”"
            bannerImg={banner6}
            // title="ISPL is Committed to Bridging the gap between street cricket and stadium glory !"
            // buttonName="Register Now"
            altTitle="ISPL=T10"
            // completedStatus={completedStatus}
          />
          <BannerSlideItem
            // tagline="“AB CHALTE HAI STREET TO STADIUM”"
            bannerImg={banner5}
            // title="ISPL is Committed to Bridging the gap between street cricket and stadium glory !"
            // buttonName="Register Now"
            altTitle="ISPL=T10"
            // completedStatus={completedStatus}
          />
          <BannerSlideItem
            tagline="“AB CHALTE HAI STREET TO STADIUM”"
            bannerImg={banner2}
            title="ISPL is Committed to Bridging the gap between street cricket and stadium glory !"
            buttonName="Spot Registration"
            altTitle="ISPL=T10"
            completedStatus={completedStatus}
          />
          <BannerSlideItem
            tagline="“AB CHALTE HAI STREET TO STADIUM”"
            bannerImg={banner3}
            title="ISPL is Committed to Bridging the gap between street cricket and stadium glory !"
            buttonName="Spot Registration"
            altTitle="ISPL=T10"
            completedStatus={completedStatus}
          />
        </Slider>
      </section>
    </>
  );
}

export default Banner;
