import React, { useState, useEffect } from "react";
import "../trialformation/trailformationstyle.css";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import PageStaticData from "./PageStaticData";
import southzone from "./zonedata/southzone";
import northzone from "./zonedata/northzone";
import eastzone from "./zonedata/eastzone";
import centralzone from "./zonedata/centralzone";
import westzone from "./zonedata/westzone";
import { Helmet } from "react-helmet-async";

function TrialFormation() {
  const [selectedZone, setSelectedZone] = useState("westzone");
  const [filteredData, setFilteredData] = useState([]);
  // console.log("selectedZone ", selectedZone)
  // console.log("filteredData ", filteredData)

  

  useEffect(() => {
    const zoneDataMap = {
      southzone,
      northzone,
      eastzone,
      centralzone,
      westzone,
    };
    setFilteredData(zoneDataMap[selectedZone]);
  }, [selectedZone]);

  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value);
  };

  return (
    <section id="trialFormationSection">
      <Helmet>
        <title>ISPL T10 | Trial Dates</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-11 col-md-12 col-12 mx-auto">
            <div className="text-center">
              <SectionTitle titleText="Trial Dates" />
            </div>
            <PageStaticData />
            <div className="filterBtnWrap">
              <label htmlFor="filterSelect" className="form-label">
                Select Zone:
              </label>
              <select
                className="form-select"
                id="filterSelect"
                onChange={handleZoneChange}
                value={selectedZone}
              >
                <option value="">-- Select Zone --</option>
                <option value="southzone">South Zone</option>
                <option value="northzone">North Zone</option>
                <option value="eastzone">East Zone</option>
                <option value="centralzone">Central Zone</option>
                <option value="westzone">West Zone</option>
              </select>
            </div>
            <div className="table-responsive mt-2">
              <div className="container">
                <div className="row">
                  <table
                    width="100%"
                    className="text-center table tab-tables table-bordered table-striped m-0 pb-3"
                  >
                    <tbody>
                      <tr height="38" className="tHead">
                        <td height="38">Sr No.</td>
                        <td>City</td>
                        <td>From</td>
                        <td>To</td>
                        {/* <td>Ground</td> */}
                      </tr>
                      {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                          <tr key={index} height="19">
                            <td>{item["Sr No."]}</td>
                            <td>{item.City}</td>
                            <td>{item.From}</td>
                            <td>{item.To}</td>
                            {/* <td>{item.Ground}</td> */}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4">No data available for this zone.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="trailListDataWrap">
              <h4>West Zone Final Trail Dates:</h4>
              <ul>
                <li>
                  West Zone Final Trials will be conducted from 5th Nov’24 to
                  9th Nov’24
                </li>
              </ul>
            </div>
            <div className="trailListDataWrap">
              <h4>South zone final trail Dates:</h4>
              <ul>
                <li>
                  South Zone Final Trials will be conducted from 26th Oct’24 to
                  28th Oct’24
                </li>
              </ul>
            </div>
            <div className="trailListDataWrap">
              <h4>North zone final trail Dates:</h4>
              <ul>
                <li>
                  North Zone Final Trials will be conducted from 2nd Nov’24 to
                  4th Nov’24
                </li>
              </ul>
            </div>
            <div className="trailListDataWrap">
              <h4>East zone final trail Dates:</h4>
              <ul>
                <li>
                  East Zone Final Trials will be conducted from 2nd Nov’24 to 3rd
                  Nov’24
                </li>
              </ul>
            </div>
            <div className="trailListDataWrap">
              <h4>Central zone final trail Dates:</h4>
              <ul>
                <li>
                Central Zone Final Trials will be conducted from 26th OCt'24 to 28th
                  Oct'24
                </li>
              </ul>
            </div>
            <p className="btmText">
              Simulation of all Zone Matches scheduled for 12th Nov’24 & 13th
              Nov’24
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrialFormation;
