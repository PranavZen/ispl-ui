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
          <Link
            to="https://www.youtube.com/watch?v=QQsavbMfhy4"
            data-fancybox
          >
            <div className="imgWrapper">
              <img
                src="https://my.ispl-t10.com/images/videos/thumbnail/2BTbG0z1rxumYLQ1ENHuXFfGBZaSRfqnwIH9MXDD.jpg"
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
              <p>
                Watch what he has to say about ISPL and its effect on the
                cricket fever.
              </p>
            </div>
          </Link>
        </div>
        <div className="div2 gridBox">
          <Link
            to="https://youtu.be/AHyHKRx8mbg?si=eBJA2jYklbBbUhkO"
            data-fancybox
          >
            <div className="imgWrapper">
              <img
                src="https://my.ispl-t10.com/images/videos/thumbnail/ptWFTfIn2fSeVEUqSlPlEBH99l2PFZEnTWXmtrNZ.jpg"
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
        <div className="div3 gridBox">
          <Link
            to="https://youtu.be/Ar-TanMHEuc?si=imGGwU3lZcTLUPTl"
            data-fancybox
          >
            <div className="imgWrapper">
              <img
                src="https://my.ispl-t10.com/images/videos/thumbnail/JphM6koPhcLSHiTPO3ifK0qrh42xnUAAfeYHX8u1.jpg"
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
        <div className="div4 gridBox">
          <Link
            to="https://youtu.be/u2uxWeNs04s?si=3d_ZDjCzrNm3NOQ-"
            data-fancybox
          >
            <div className="imgWrapper">
              <img
                src="https://my.ispl-t10.com/images/videos/thumbnail/P3Dipr75lXUGXVkC63CU7pNbC0zoj9GGiMmlEuVL.jpg"
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
        <div className="div5 gridBox">
          <Link
            to="https://youtu.be/u2uxWeNs04s?si=2-8ed4RQcaukOFw1"
            data-fancybox
          >
            <div className="imgWrapper">
              <img
                src="https://my.ispl-t10.com/images/videos/thumbnail/MQpRHg1UsJJlOY0nVrkFL8PyJN7Pf7NXGkbeZpHG.jpg"
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
