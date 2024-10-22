import React, { useState, useEffect } from "react";
import "../trialformation/trailformationstyle.css";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { Helmet } from "react-helmet-async";
import Spinner from "../../components/pageComponents/matchPageComponents/spinnercomponent/Spinner";

function TrialFormation() {
  const [selectedZone, setSelectedZone] = useState("westzone");
  const [zoneData, setZoneData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the data from the API
    const fetchZoneData = async () => {
      try {
        const response = await fetch(
          "https://my.ispl-t10.com/api/slots-by-zone"
        );
        const data = await response.json();
        setZoneData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching zone data:", error);
        setLoading(false);
      }
    };
    fetchZoneData();
  }, []);

  useEffect(() => {
    if (zoneData[selectedZone]) {
      setFilteredData(zoneData[selectedZone]); // Filter data based on the selected zone
    } else {
      setFilteredData([]);
    }
  }, [selectedZone, zoneData]);

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
                      </tr>
                      {loading ? (
                        <tr>
                          <td colSpan="4">
                            <Spinner />
                          </td>
                        </tr>
                      ) : filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                          <tr key={index} height="19">
                            <td>{item["Sr No."]}</td>
                            <td>{item.City}</td>
                            <td>{item.From}</td>
                            <td>{item.To}</td>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrialFormation;
