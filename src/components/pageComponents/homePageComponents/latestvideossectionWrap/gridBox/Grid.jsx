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
          <Link to="">
            <div className="imgWrapper">
              <img src={grid1} alt="" className="img-fluid" />
              <span className="playIconWrap">
                <img src={playIcon} alt="" className="img-fluid" />
              </span>
            </div>
            <div className="contentWrap">
              <h6>Ravi Shastri at ISPL Season 1 Semi Finals</h6>
              <p>
                Watch what he has to say about ISPL and its effect on the
                cricket fever. Watch what he has to say about ISPL and its
                effect on the cricket fever. Watch what he has to say about ISPL
                and its effect on the cricket fever. Watch what he has to say
                about ISPL and its effect on the cricket fever.
              </p>
            </div>
            <div className="cardFooter">
              <span>22 May 2024</span>
            </div>
          </Link>
        </div>
        <div className="div2 gridBox">
          <Link to="">
            <div className="imgWrapper">
              <img src={grid4} alt="" className="img-fluid" />
              <span className="playIconWrap">
                <img src={playIcon} alt="" className="img-fluid" />
              </span>
            </div>
            <div className="contentWrap">
              <h6>ISPL -Opening Ceremony</h6>
            </div>
          </Link>
        </div>
        <div className="div3 gridBox">
          <Link to="">
            <div className="imgWrapper">
              <img src={grid3} alt="" className="img-fluid" />
              <span className="playIconWrap">
                <img src={playIcon} alt="" className="img-fluid" />
              </span>
            </div>
            <div className="contentWrap">
              <h6>Here's to an amazing season!</h6>
            </div>
          </Link>
        </div>
        <div className="div4 gridBox">
          <Link to="">
            <div className="imgWrapper">
              <img src={grid2} alt="" className="img-fluid" />
              <span className="playIconWrap">
                <img src={playIcon} alt="" className="img-fluid" />
              </span>
            </div>
            <div className="contentWrap">
              <h6>A moment now made eternal in our memories!</h6>
            </div>
          </Link>
        </div>
        <div className="div5 gridBox">
          <Link to="">
            <div className="imgWrapper">
              <img src={grid5} alt="" className="img-fluid" />
              <span className="playIconWrap">
                <img src={playIcon} alt="" className="img-fluid" />
              </span>
            </div>
            <div className="contentWrap">
              <h6>A moment now made eternal in our memories!</h6>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Grid;
