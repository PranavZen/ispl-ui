import React from "react";
import Tabs from "../../homePageComponents/pointTableSectionWrap/Tabs";
import "../MatchDetails/matchDetailsStyles.css";
import MatchRows from "./MatchRows";
import PlayerStatsTable from "./PlayerStatsTable";

function MatchDetails() {
  return (
    <div className="our-history-div d-inline-block w-100 matchDetailsCustom">
      <Tabs>
        <div
          label="Results"
          spanImg='<svg className="customResultBookSvg" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
<path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21" stroke="#263574" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>'
        >
          <div
            className="tab-pane  active show pt8rem"
            id="result"
            role="tabpanel"
          >
            <div className="container">
              <MatchRows />
            </div>
          </div>
        </div>
        <div
          label="Points Table"
          spanImg='<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="svg2" sodipodi:docname="hand-right.svg" inkscape:version="0.48.4 r9939" width="800px" height="800px" viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200" xml:space="preserve">
<sodipodi:namedview inkscape:cy="241.59975" inkscape:cx="1298.265" inkscape:zoom="0.26339286" showgrid="false" id="namedview30" guidetolerance="10" gridtolerance="10" objecttolerance="10" borderopacity="1" bordercolor="#666666" pagecolor="#ffffff" inkscape:current-layer="svg2" inkscape:window-maximized="1" inkscape:window-y="24" inkscape:window-height="876" inkscape:window-width="1535" inkscape:pageshadow="2" inkscape:pageopacity="0" inkscape:window-x="65">
	</sodipodi:namedview>
<path id="path11184" inkscape:connector-curvature="0" d="M0,972.138V556.629c2.192-43.973,37.788-75.724,76.898-76.252h186.106  c53.196-40.854,90.897-97.554,142.165-138.611c18.094-14.432,32.095-30.479,42.003-48.142  c32.214-63.281,12.695-136.954,58.481-187.399c92.008-39.482,202.231,15.751,233.279,102.423  c24.405,70.78,8.052,141.366-22.294,203.877c109.856-0.182,219.71,0.708,329.563,1.292c89.434,6.678,153.202,66.892,153.797,152.504  c-0.244,86.275-74.623,149.017-153.797,150.565h-129.24c-4.308,25.417-12.709,48.465-25.202,69.144  c7.239,53.145-9.327,105.247-41.356,142.812c-17.576,306.75-419.443,124.761-569.952,120.193H76.898  C32.617,1046.939,0.528,1011.445,0,972.138z M277.221,972.138c120.425,2.591,531.909,184.658,492.407-76.252  c43.546-23.471,60.301-86.286,33.603-126.01c40.566-40.005,52.118-90.265,12.925-129.887c38.771,0,77.113-0.216,115.023-0.646  c37.911-0.431,76.253-0.646,115.024-0.646c44.371-0.933,75.122-33.487,75.606-72.374c-1.014-45.976-35.914-75.137-75.606-75.606  c-150.385-0.008-298.632-1.276-438.126-1.292c12.555-100.763,132.769-237.585,10.017-316.963  c-19.652-9.652-35.367-13.749-55.896-10.017c-3.446,1.723-5.385,3.447-5.816,5.17c-0.431,1.723-1.076,4.523-1.938,8.4  c-13.044,79.87-25.221,159.73-87.237,212.601c-68.263,52.343-108.514,134.749-186.752,168.014h-3.231L277.221,972.138z" fill="#263574"/>
</svg>'
        >
          <div className="tab-pane  active show" id="points" role="tabpanel">
            <div className="container ">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                >
                  <div className="table-responsive">
                    <div className="card mb-3">
                      <table
                        width="100%"
                        className="text-center table tab-tables table-bordered table-striped m-0 pb-3"
                      >
                        <thead
                          className="text-light"
                          style={{
                            backgroundColor: "#002458",
                            important: "true",
                          }}
                        >
                          <tr className="ih-pt-tbl">
                            <th>No</th>
                            <th>Team</th>
                            <th>M</th>
                            <th>W</th>
                            <th>L</th>
                            <th>T</th>
                            <th>N/R</th>
                            <th>PTS</th>
                            <th>Net RR</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Majhi Mumbai (Q)</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>6</td>
                            <td>1.247</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Tigers Of Kolkata (Q)</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>6</td>
                            <td>0.5</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Srinagar Ke Veer (Q)</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>6</td>
                            <td>0.156</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Chennai Singhams (Q)</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>6</td>
                            <td>-0.017</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Bangalore Strikers</td>
                            <td>5</td>
                            <td>2</td>
                            <td>3</td>
                            <td>0</td>
                            <td>0</td>
                            <td>4</td>
                            <td>-1.013</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Falcon Risers Hyderabad</td>
                            <td>5</td>
                            <td>1</td>
                            <td>4</td>
                            <td>0</td>
                            <td>0</td>
                            <td>2</td>
                            <td>-0.688</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div label="Player Stats">
          <div className="tab-pane  active show" id="statsId" role="tabpanel">
            <div className="container ">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                >
                  <PlayerStatsTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default MatchDetails;
