import React from "react";
import "../gridBox/grid.css";
import {
  grid1,
  grid2,
  grid3,
  grid4,
  grid5,
  playIcon,
} from "../../../../../assets/imagePath";
import { Link } from "react-router-dom";

function Grid() {
  return (
    <div className="gridWrap">
      <div className="parent">
        <div className="div1 gridBox">
          <Link to="https://www.youtube.com/embed/I6e0v45n2Y4" data-fancybox>
            {/* <iframe width="914" height="514" src="https://www.youtube.com/embed/I6e0v45n2Y4" title="ISPL Season 2 - Dikha Apna Game #ispl #isplt10 #street2stadium #sachintendulkar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <div className="imgWrapper">
              <img
                src="https://ispl-t10.com/registration-season-2.jpg"
                alt="Dikha Apna Game #isplt10 #street2stadium #amitabhbachchan"
                className="img-fluid"
                loading="lazy"
              />
              <span className="playIconWrap">
                <img
                  src={playIcon}
                  alt=""
                  className="img-fluid"
                  loading="lazy"
                />
              </span>
            </div>
            <div className="contentWrap">
              <h6>Dikha Apna Game #isplt10 #street2stadium #amitabhbachchan</h6>
            </div>
          </Link>
        </div>
        <div className="div2 gridBox">
          <Link to="https://www.youtube.com/embed/QQsavbMfhy4" data-fancybox>
            {/* <iframe width="914" height="514" src="https://www.youtube.com/embed/QQsavbMfhy4" title="Ravi Shastri at ISPL Season 1 Semi Finals #isplt10 #street2stadium #ispl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <div className="imgWrapper">
              <img
                src={grid1}
                alt="Ravi Shastri at ISPL Season 1 Semi Finals"
                className="img-fluid"
                loading="lazy"
              />
              <span className="playIconWrap">
                <img
                  src={playIcon}
                  alt=""
                  className="img-fluid"
                  loading="lazy"
                />
              </span>
            </div>
            <div className="contentWrap">
              <h6>Ravi Shastri at ISPL Season 1 Semi Finals</h6>
              {/* <p>
                Watch what he has to say about ISPL and its effect on the
                cricket fever.
              </p> */}
            </div>
          </Link>
        </div>
        <div className="div3 gridBox">
          <Link to="https://www.youtube.com/embed/AHyHKRx8mbg" data-fancybox>
            {/* <iframe width="1142" height="642" src="https://www.youtube.com/embed/AHyHKRx8mbg" title="ISPL Season 1 -Opening Ceremony #ispl #isplt10 #street2stadium" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <div className="imgWrapper">
              <img
                src={grid2}
                alt="ISPL -Opening Ceremony"
                className="img-fluid"
                loading="lazy"
              />
              <span className="playIconWrap">
                <img
                  src={playIcon}
                  alt=""
                  className="img-fluid"
                  loading="lazy"
                />
              </span>
            </div>
            <div className="contentWrap">
              <h6>ISPL -Opening Ceremony</h6>
            </div>
          </Link>
        </div>
        <div className="div4 gridBox">
          <Link to="https://www.youtube.com/embed/Ar-TanMHEuc" data-fancybox>
            {/* <iframe width="1142" height="642" src="https://www.youtube.com/embed/Ar-TanMHEuc" title="National Anthem at ISPL Season 1 Finals #isplt10 #ispl #street2stadium" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <div className="imgWrapper">
              <img
                src={grid3}
                alt="National Anthem in Finale"
                className="img-fluid"
                loading="lazy"
              />
              <span className="playIconWrap">
                <img
                  src={playIcon}
                  alt=""
                  className="img-fluid"
                  loading="lazy"
                />
              </span>
            </div>
            <div className="contentWrap">
              <h6>National Anthem in Finale</h6>
            </div>
          </Link>
        </div>
        <div className="div5 gridBox">
          <Link to="https://www.youtube.com/embed/u2uxWeNs04s" data-fancybox>
            {/* <iframe width="1142" height="642" src="https://www.youtube.com/embed/u2uxWeNs04s" title="ISPL Season 1 #ispl #isplt10 #street2stadium" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <div className="imgWrapper">
              <img
                src={grid4}
                alt="ISPL Journey"
                className="img-fluid"
                loading="lazy"
              />
              <span className="playIconWrap">
                <img
                  src={playIcon}
                  alt=""
                  className="img-fluid"
                  loading="lazy"
                />
              </span>
            </div>
            <div className="contentWrap">
              <h6>ISPL Journey</h6>
            </div>
          </Link>
        </div>
        <div className="div6 gridBox">
          <Link to="https://www.youtube.com/embed/u2uxWeNs04s" data-fancybox>
            {/* <iframe width="1142" height="642" src="https://www.youtube.com/embed/u2uxWeNs04s" title="ISPL Season 1 #ispl #isplt10 #street2stadium" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <div className="imgWrapper">
              <img
                src={grid5}
                alt="ISPL Season 1"
                className="img-fluid"
                loading="lazy"
              />
              <span className="playIconWrap">
                <img
                  src={playIcon}
                  alt=""
                  className="img-fluid"
                  loading="lazy"
                />
              </span>
            </div>
            <div className="contentWrap">
              <h6>ISPL Season 1</h6>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Grid;
