import React from "react";
import Tabs from "../../homePageComponents/pointTableSectionWrap/Tabs";
import "../MatchDetails/matchDetailsStyles.css";
import MatchRows from "./MatchRows";

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
                              <td>Team Name</td>
                              <td>Name&nbsp;</td>
                              <td>Last Name</td>
                              <td>R</td>
                              <td>B</td>
                              <td>4s</td>
                              <td>6s</td>
                              <td>Strike rate</td>
                              
                              <td>Ov</td>
                              <td>M</td>
                              <td>R</td>
                              <td>W</td>
                            </tr>
                            <tr height="19">
                              <td height="19">1</td>
                              <td>Mumbai</td>
                              <td>Akshay</td>
                              <td>Patil</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">2</td>
                              <td>Mumbai</td>
                              <td>Raviraj</td>
                              <td>Ahire</td>
                              <td>36</td>
                              <td>44</td>
                              <td>4</td>
                              <td>1</td>
                              <td>81.818</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">3</td>
                              <td>Mumbai</td>
                              <td>Abhishek Kumar</td>
                              <td>Dalhor</td>
                              <td>194</td>
                              <td>92</td>
                              <td>5</td>
                              <td>19</td>
                              <td>210.87</td>
                              
                              <td>14</td>
                              <td>0</td>
                              <td>160</td>
                              <td>9</td>
                            </tr>
                            <tr height="19">
                              <td height="19">4</td>
                              <td>Mumbai</td>
                              <td>Deepak Kumar</td>
                              <td>Limboo</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>2</td>
                              <td>0</td>
                              <td>18</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">5</td>
                              <td>Mumbai</td>
                              <td>Devid</td>
                              <td>Gogoi</td>
                              <td>1</td>
                              <td>3</td>
                              <td>0</td>
                              <td>0</td>
                              <td>33.333</td>
                              
                              <td>11.9</td>
                              <td>0</td>
                              <td>115</td>
                              <td>11</td>
                            </tr>
                            <tr height="19">
                              <td height="19">6</td>
                              <td>Mumbai</td>
                              <td>Ahmad Fayaz</td>
                              <td>Rather</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">7</td>
                              <td>Mumbai</td>
                              <td>Basharat Hussain</td>
                              <td>Wani</td>
                              <td>3</td>
                              <td>6</td>
                              <td>0</td>
                              <td>0</td>
                              <td>50</td>
                              
                              <td>10</td>
                              <td>0</td>
                              <td>107</td>
                              <td>11</td>
                            </tr>
                            <tr height="19">
                              <td height="19">8</td>
                              <td>Mumbai</td>
                              <td>Murali A</td>
                              <td>Murali</td>
                              <td>8</td>
                              <td>7</td>
                              <td>2</td>
                              <td>0</td>
                              <td>114.29</td>
                              
                              <td>3</td>
                              <td>0</td>
                              <td>29</td>
                              <td>1</td>
                            </tr>
                            <tr height="19">
                              <td height="19">9</td>
                              <td>Mumbai</td>
                              <td>Syed Salman</td>
                              <td>Syed</td>
                              <td>20</td>
                              <td>12</td>
                              <td>0</td>
                              <td>3</td>
                              <td>166.67</td>
                              
                              <td>1</td>
                              <td>0</td>
                              <td>14</td>
                              <td>1</td>
                            </tr>
                            <tr height="19">
                              <td height="19">10</td>
                              <td>Mumbai</td>
                              <td>Ajaz</td>
                              <td>Qureshi</td>
                              <td>121</td>
                              <td>83</td>
                              <td>3</td>
                              <td>11</td>
                              <td>145.78</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">11</td>
                              <td>Mumbai</td>
                              <td>Ashraf</td>
                              <td>Khan</td>
                              <td>31</td>
                              <td>20</td>
                              <td>1</td>
                              <td>3</td>
                              <td>155</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">12</td>
                              <td>Mumbai</td>
                              <td>Krushna&nbsp;</td>
                              <td>Pawar&nbsp;</td>
                              <td>63</td>
                              <td>34</td>
                              <td>1</td>
                              <td>8</td>
                              <td>185.29</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">13</td>
                              <td>Mumbai</td>
                              <td>Ravi</td>
                              <td>Gupta</td>
                              <td>6</td>
                              <td>8</td>
                              <td>0</td>
                              <td>0</td>
                              <td>75</td>
                              
                              <td>11</td>
                              <td>3</td>
                              <td>46</td>
                              <td>3</td>
                            </tr>
                            <tr height="19">
                              <td height="19">14</td>
                              <td>Mumbai</td>
                              <td>Shreyas</td>
                              <td>Indulkar</td>
                              <td>6</td>
                              <td>7</td>
                              <td>1</td>
                              <td>0</td>
                              <td>85.714</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">15</td>
                              <td>Mumbai</td>
                              <td>Vijay</td>
                              <td>Pawle</td>
                              <td>62</td>
                              <td>44</td>
                              <td>1</td>
                              <td>6</td>
                              <td>140.91</td>
                              
                              <td>13.4</td>
                              <td>0</td>
                              <td>156</td>
                              <td>6</td>
                            </tr>
                            <tr height="19">
                              <td height="19">16</td>
                              <td>Mumbai</td>
                              <td>Yogesh</td>
                              <td>Penkar</td>
                              <td>104</td>
                              <td>52</td>
                              <td>7</td>
                              <td>9</td>
                              <td>200</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">17</td>
                              <td>Srinagar</td>
                              <td>Navneet Singh</td>
                              <td>Parihar</td>
                              <td>1</td>
                              <td>3</td>
                              <td>0</td>
                              <td>0</td>
                              <td>33.333</td>
                              
                              <td>12</td>
                              <td>0</td>
                              <td>127</td>
                              <td>7</td>
                            </tr>
                            <tr height="19">
                              <td height="19">18</td>
                              <td>Srinagar</td>
                              <td>Tanish</td>
                              <td>Naik</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">19</td>
                              <td>Srinagar</td>
                              <td>Lokesh</td>
                              <td>Lokesh</td>
                              <td>139</td>
                              <td>58</td>
                              <td>5</td>
                              <td>8</td>
                              <td>239.66</td>
                              
                              <td>7</td>
                              <td>0</td>
                              <td>103</td>
                              <td>5</td>
                            </tr>
                            <tr height="19">
                              <td height="19">20</td>
                              <td>Srinagar</td>
                              <td>Mohammed</td>
                              <td>Nadeem</td>
                              <td>105</td>
                              <td>78</td>
                              <td>16</td>
                              <td>3</td>
                              <td>134.62</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">21</td>
                              <td>Srinagar</td>
                              <td>Aditya</td>
                              <td>Babbar</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">22</td>
                              <td>Srinagar</td>
                              <td>Deepak</td>
                              <td>Dogra</td>
                              <td>39</td>
                              <td>31</td>
                              <td>2</td>
                              <td>3</td>
                              <td>125.81</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">23</td>
                              <td>Srinagar</td>
                              <td>Ahmed</td>
                              <td>Askari</td>
                              <td>52</td>
                              <td>30</td>
                              <td>4</td>
                              <td>4</td>
                              <td>173.33</td>
                              
                              <td>1</td>
                              <td>0</td>
                              <td>15</td>
                              <td>2</td>
                            </tr>
                            <tr height="19">
                              <td height="19">24</td>
                              <td>Srinagar</td>
                              <td>Kavinram</td>
                              <td>Rameshbabu</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">25</td>
                              <td>Srinagar</td>
                              <td>Sumesh</td>
                              <td>B</td>
                              <td>0</td>
                              <td>2</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">26</td>
                              <td>Srinagar</td>
                              <td>Aishwary&nbsp;</td>
                              <td>Surve</td>
                              <td>50</td>
                              <td>34</td>
                              <td>3</td>
                              <td>2</td>
                              <td>147.06</td>
                              
                              <td>11</td>
                              <td>1</td>
                              <td>27</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">27</td>
                              <td>Srinagar</td>
                              <td>Bhushan</td>
                              <td>Gole</td>
                              <td>12</td>
                              <td>16</td>
                              <td>0</td>
                              <td>0</td>
                              <td>75</td>
                              
                              <td>5.4</td>
                              <td>0</td>
                              <td>86</td>
                              <td>8</td>
                            </tr>
                            <tr height="19">
                              <td height="19">28</td>
                              <td>Srinagar</td>
                              <td>Omkar</td>
                              <td>Desai</td>
                              <td>86</td>
                              <td>57</td>
                              <td>3</td>
                              <td>8</td>
                              <td>150.88</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">29</td>
                              <td>Srinagar</td>
                              <td>Pritam</td>
                              <td>Bari</td>
                              <td>12</td>
                              <td>8</td>
                              <td>0</td>
                              <td>2</td>
                              <td>150</td>
                              
                              <td>10</td>
                              <td>0</td>
                              <td>133</td>
                              <td>5</td>
                            </tr>
                            <tr height="19">
                              <td height="19">30</td>
                              <td>Srinagar</td>
                              <td>Rajesh</td>
                              <td>Sorte</td>
                              <td>24</td>
                              <td>21</td>
                              <td>2</td>
                              <td>0</td>
                              <td>114.29</td>
                              
                              <td>12</td>
                              <td>0</td>
                              <td>114</td>
                              <td>11</td>
                            </tr>
                            <tr height="19">
                              <td height="19">31</td>
                              <td>Srinagar</td>
                              <td>Rohit</td>
                              <td>Yadav</td>
                              <td>2</td>
                              <td>3</td>
                              <td>0</td>
                              <td>0</td>
                              <td>66.667</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">32</td>
                              <td>Srinagar</td>
                              <td>Vineet</td>
                              <td>Todkar</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">33</td>
                              <td>Kolkata</td>
                              <td>Akhil</td>
                              <td>Singh</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">34</td>
                              <td>Kolkata</td>
                              <td>Munna</td>
                              <td>Shaikh</td>
                              <td>116</td>
                              <td>95</td>
                              <td>10</td>
                              <td>5</td>
                              <td>122.11</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">35</td>
                              <td>Kolkata</td>
                              <td>Jonty</td>
                              <td>Sarkar</td>
                              <td>50</td>
                              <td>29</td>
                              <td>2</td>
                              <td>6</td>
                              <td>172.41</td>
                              
                              <td>8</td>
                              <td>0</td>
                              <td>79</td>
                              <td>5</td>
                            </tr>
                            <tr height="19">
                              <td height="19">36</td>
                              <td>Kolkata</td>
                              <td>Pritpal Singh</td>
                              <td>Pt Johnson</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>2</td>
                              <td>0</td>
                              <td>28</td>
                              <td>2</td>
                            </tr>
                            <tr height="19">
                              <td height="19">37</td>
                              <td>Kolkata</td>
                              <td>Raju</td>
                              <td>Mukhiya</td>
                              <td>0</td>
                              <td>5</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>13</td>
                              <td>0</td>
                              <td>94</td>
                              <td>14</td>
                            </tr>
                            <tr height="19">
                              <td height="19">38</td>
                              <td>Kolkata</td>
                              <td>Shivam</td>
                              <td>Kumar</td>
                              <td>12</td>
                              <td>8</td>
                              <td>0</td>
                              <td>1</td>
                              <td>150</td>
                              
                              <td>10</td>
                              <td>0</td>
                              <td>87</td>
                              <td>5</td>
                            </tr>
                            <tr height="19">
                              <td height="19">39</td>
                              <td>Kolkata</td>
                              <td>Babbu</td>
                              <td>Rana</td>
                              <td>6</td>
                              <td>6</td>
                              <td>1</td>
                              <td>0</td>
                              <td>100</td>
                              
                              <td>11</td>
                              <td>0</td>
                              <td>122</td>
                              <td>9</td>
                            </tr>
                            <tr height="19">
                              <td height="19">40</td>
                              <td>Kolkata</td>
                              <td>Shivam</td>
                              <td>Kamboj</td>
                              <td>12</td>
                              <td>8</td>
                              <td>0</td>
                              <td>1</td>
                              <td>150</td>
                              
                              <td>10</td>
                              <td>0</td>
                              <td>87</td>
                              <td>5</td>
                            </tr>
                            <tr height="19">
                              <td height="19">41</td>
                              <td>Kolkata</td>
                              <td>R.Bala</td>
                              <td>Chandran</td>
                              <td>7</td>
                              <td>8</td>
                              <td>1</td>
                              <td>0</td>
                              <td>87.5</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">42</td>
                              <td>Kolkata</td>
                              <td>Sagar</td>
                              <td>Bhandary</td>
                              <td>8</td>
                              <td>7</td>
                              <td>0</td>
                              <td>1</td>
                              <td>114.29</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">43</td>
                              <td>Kolkata</td>
                              <td>Bhavesh</td>
                              <td>Pawar</td>
                              <td>60</td>
                              <td>30</td>
                              <td>1</td>
                              <td>6</td>
                              <td>200</td>
                              
                              <td>13.2</td>
                              <td>0</td>
                              <td>102</td>
                              <td>13</td>
                            </tr>
                            <tr height="19">
                              <td height="19">44</td>
                              <td>Kolkata</td>
                              <td>Fardeen</td>
                              <td>Kazi</td>
                              <td>71</td>
                              <td>47</td>
                              <td>6</td>
                              <td>5</td>
                              <td>151.06</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">45</td>
                              <td>Kolkata</td>
                              <td>Pradeep</td>
                              <td>Patil</td>
                              <td>24</td>
                              <td>24</td>
                              <td>1</td>
                              <td>2</td>
                              <td>100</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">46</td>
                              <td>Kolkata</td>
                              <td>Prathamesh</td>
                              <td>Pawar</td>
                              <td>165</td>
                              <td>##</td>
                              <td>9</td>
                              <td>14</td>
                              <td>147.32</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">47</td>
                              <td>Kolkata</td>
                              <td>Rajat</td>
                              <td>Mundhe</td>
                              <td>34</td>
                              <td>27</td>
                              <td>0</td>
                              <td>4</td>
                              <td>125.93</td>
                              
                              <td>12</td>
                              <td>0</td>
                              <td>46</td>
                              <td>1</td>
                            </tr>
                            <tr height="19">
                              <td height="19">48</td>
                              <td>Kolkata</td>
                              <td>Uzair</td>
                              <td>Shaikh</td>
                              <td>4</td>
                              <td>5</td>
                              <td>0</td>
                              <td>0</td>
                              <td>80</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">49</td>
                              <td>Chennai</td>
                              <td>Dilip</td>
                              <td>Binjwa</td>
                              <td>43</td>
                              <td>34</td>
                              <td>3</td>
                              <td>2</td>
                              <td>126.47</td>
                              
                              <td>10.5</td>
                              <td>0</td>
                              <td>153</td>
                              <td>11</td>
                            </tr>
                            <tr height="19">
                              <td height="19">50</td>
                              <td>Chennai</td>
                              <td>Pankaj</td>
                              <td>Parel</td>
                              <td>1</td>
                              <td>4</td>
                              <td>0</td>
                              <td>0</td>
                              <td>25</td>
                              
                              <td>4</td>
                              <td>0</td>
                              <td>55</td>
                              <td>1</td>
                            </tr>
                            <tr height="19">
                              <td height="19">51</td>
                              <td>Chennai</td>
                              <td>Sagar</td>
                              <td>Ali</td>
                              <td>102</td>
                              <td>67</td>
                              <td>3</td>
                              <td>9</td>
                              <td>152.24</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">52</td>
                              <td>Chennai</td>
                              <td>Sanjay</td>
                              <td>Kanojjiya</td>
                              <td>91</td>
                              <td>55</td>
                              <td>5</td>
                              <td>8</td>
                              <td>165.45</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">53</td>
                              <td>Chennai</td>
                              <td>Farhat</td>
                              <td>Ahmad</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">54</td>
                              <td>Chennai</td>
                              <td>Farman</td>
                              <td>Khan</td>
                              <td>7</td>
                              <td>10</td>
                              <td>0</td>
                              <td>0</td>
                              <td>70</td>
                              
                              <td>12</td>
                              <td>0</td>
                              <td>131</td>
                              <td>5</td>
                            </tr>
                            <tr height="19">
                              <td height="19">55</td>
                              <td>Chennai</td>
                              <td>R.Thavith</td>
                              <td>Kumar</td>
                              <td>1</td>
                              <td>5</td>
                              <td>0</td>
                              <td>0</td>
                              <td>20</td>
                              
                              <td>6</td>
                              <td>0</td>
                              <td>53</td>
                              <td>6</td>
                            </tr>
                            <tr height="19">
                              <td height="19">56</td>
                              <td>Chennai</td>
                              <td>Venkatachalapathi</td>
                              <td>Vignesh</td>
                              <td>10</td>
                              <td>5</td>
                              <td>0</td>
                              <td>1</td>
                              <td>200</td>
                              
                              <td>6</td>
                              <td>0</td>
                              <td>23</td>
                              <td>3</td>
                            </tr>
                            <tr height="19">
                              <td height="19">57</td>
                              <td>Chennai</td>
                              <td>Aniket</td>
                              <td>Sanap</td>
                              <td>6</td>
                              <td>2</td>
                              <td>0</td>
                              <td>1</td>
                              <td>300</td>
                              
                              <td>2</td>
                              <td>0</td>
                              <td>31</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">58</td>
                              <td>Chennai</td>
                              <td>Bablu</td>
                              <td>Patil</td>
                              <td>109</td>
                              <td>45</td>
                              <td>4</td>
                              <td>10</td>
                              <td>242.22</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">59</td>
                              <td>Chennai</td>
                              <td>Harish</td>
                              <td>Parmar</td>
                              <td>0</td>
                              <td>1</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">60</td>
                              <td>Chennai</td>
                              <td>Ketan</td>
                              <td>Mhatre</td>
                              <td>148</td>
                              <td>79</td>
                              <td>5</td>
                              <td>17</td>
                              <td>187.34</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">61</td>
                              <td>Chennai</td>
                              <td>Rajdeep</td>
                              <td>Jadeja</td>
                              <td>0</td>
                              <td>1</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>6</td>
                              <td>0</td>
                              <td>73</td>
                              <td>4</td>
                            </tr>
                            <tr height="19">
                              <td height="19">62</td>
                              <td>Chennai</td>
                              <td>Sumeet</td>
                              <td>Dhekale</td>
                              <td>28</td>
                              <td>29</td>
                              <td>0</td>
                              <td>2</td>
                              <td>96.552</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">63</td>
                              <td>Chennai</td>
                              <td>Vedant</td>
                              <td>Mayekar</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">64</td>
                              <td>Chennai</td>
                              <td>Vishwanath</td>
                              <td>Jadhav</td>
                              <td>32</td>
                              <td>27</td>
                              <td>2</td>
                              <td>2</td>
                              <td>118.52</td>
                              
                              <td>12</td>
                              <td>0</td>
                              <td>124</td>
                              <td>8</td>
                            </tr>
                            <tr height="19">
                              <td height="19">65</td>
                              <td>Bengaluru</td>
                              <td>Parv</td>
                              <td>Lamba</td>
                              <td>1</td>
                              <td>3</td>
                              <td>0</td>
                              <td>0</td>
                              <td>33.333</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">66</td>
                              <td>Bengaluru</td>
                              <td>Rahul</td>
                              <td>Baghel</td>
                              <td>14</td>
                              <td>14</td>
                              <td>0</td>
                              <td>1</td>
                              <td>100</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">67</td>
                              <td>Bengaluru</td>
                              <td>Ashiq Ali</td>
                              <td>Shamsu</td>
                              <td>23</td>
                              <td>19</td>
                              <td>1</td>
                              <td>1</td>
                              <td>121.05</td>
                              
                              <td>9</td>
                              <td>0</td>
                              <td>88</td>
                              <td>6</td>
                            </tr>
                            <tr height="19">
                              <td height="19">68</td>
                              <td>Bengaluru</td>
                              <td>Saroj</td>
                              <td>Paramanik</td>
                              <td>47</td>
                              <td>27</td>
                              <td>2</td>
                              <td>5</td>
                              <td>174.07</td>
                              
                              <td>9</td>
                              <td>0</td>
                              <td>93</td>
                              <td>7</td>
                            </tr>
                            <tr height="19">
                              <td height="19">69</td>
                              <td>Bengaluru</td>
                              <td>Akash</td>
                              <td>Gautam</td>
                              <td>0</td>
                              <td>2</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>2</td>
                              <td>0</td>
                              <td>5</td>
                              <td>3</td>
                            </tr>
                            <tr height="19">
                              <td height="19">70</td>
                              <td>Bengaluru</td>
                              <td>Kulwinder</td>
                              <td>Singh</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>2</td>
                              <td>0</td>
                              <td>31</td>
                              <td>1</td>
                            </tr>
                            <tr height="19">
                              <td height="19">71</td>
                              <td>Bengaluru</td>
                              <td>Prajjwal</td>
                              <td>Somvanshi</td>
                              <td>1</td>
                              <td>4</td>
                              <td>0</td>
                              <td>0</td>
                              <td>25</td>
                              
                              <td>8</td>
                              <td>0</td>
                              <td>67</td>
                              <td>6</td>
                            </tr>
                            <tr height="19">
                              <td height="19">72</td>
                              <td>Bengaluru</td>
                              <td>Sharik</td>
                              <td>Yasir</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">73</td>
                              <td>Bengaluru</td>
                              <td>Harishkumar</td>
                              <td>Kk</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">74</td>
                              <td>Bengaluru</td>
                              <td>Mansoor</td>
                              <td>Kl</td>
                              <td>63</td>
                              <td>42</td>
                              <td>1</td>
                              <td>7</td>
                              <td>150</td>
                              
                              <td>7</td>
                              <td>0</td>
                              <td>64</td>
                              <td>4</td>
                            </tr>
                            <tr height="19">
                              <td height="19">75</td>
                              <td>Bengaluru</td>
                              <td>Ajit</td>
                              <td>Mohite</td>
                              <td>8</td>
                              <td>15</td>
                              <td>1</td>
                              <td>0</td>
                              <td>53.333</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">76</td>
                              <td>Bengaluru</td>
                              <td>Ankur</td>
                              <td>Singh</td>
                              <td>26</td>
                              <td>31</td>
                              <td>2</td>
                              <td>1</td>
                              <td>83.871</td>
                              
                              <td>8.1</td>
                              <td>0</td>
                              <td>86</td>
                              <td>3</td>
                            </tr>
                            <tr height="19">
                              <td height="19">77</td>
                              <td>Bengaluru</td>
                              <td>Bilal</td>
                              <td>Rajput</td>
                              <td>14</td>
                              <td>14</td>
                              <td>1</td>
                              <td>0</td>
                              <td>100</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">78</td>
                              <td>Bengaluru</td>
                              <td>Bunty</td>
                              <td>Patel</td>
                              <td>53</td>
                              <td>31</td>
                              <td>0</td>
                              <td>5</td>
                              <td>170.97</td>
                              
                              <td>0.1</td>
                              <td>0</td>
                              <td>4</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">79</td>
                              <td>Bengaluru</td>
                              <td>Sunil</td>
                              <td>Chawri</td>
                              <td>62</td>
                              <td>46</td>
                              <td>4</td>
                              <td>5</td>
                              <td>134.78</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">80</td>
                              <td>Bengaluru</td>
                              <td>Thomas</td>
                              <td>Dias</td>
                              <td>75</td>
                              <td>56</td>
                              <td>7</td>
                              <td>4</td>
                              <td>133.93</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">81</td>
                              <td>Hyderabad</td>
                              <td>Anand</td>
                              <td>Baghel</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">82</td>
                              <td>Hyderabad</td>
                              <td>Irfan</td>
                              <td>Patel</td>
                              <td>9</td>
                              <td>7</td>
                              <td>0</td>
                              <td>1</td>
                              <td>128.57</td>
                              
                              <td>7.3</td>
                              <td>0</td>
                              <td>83</td>
                              <td>7</td>
                            </tr>
                            <tr height="19">
                              <td height="19">83</td>
                              <td>Hyderabad</td>
                              <td>Anurag</td>
                              <td>Sarshar</td>
                              <td>2</td>
                              <td>8</td>
                              <td>0</td>
                              <td>0</td>
                              <td>25</td>
                              
                              <td>9</td>
                              <td>0</td>
                              <td>85</td>
                              <td>4</td>
                            </tr>
                            <tr height="19">
                              <td height="19">84</td>
                              <td>Hyderabad</td>
                              <td>Jagat</td>
                              <td>Sarkar</td>
                              <td>46</td>
                              <td>37</td>
                              <td>1</td>
                              <td>5</td>
                              <td>124.32</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">85</td>
                              <td>Hyderabad</td>
                              <td>Furqan</td>
                              <td>Khan</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">86</td>
                              <td>Hyderabad</td>
                              <td>Ubaid</td>
                              <td>Bashir</td>
                              <td>0</td>
                              <td>4</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">87</td>
                              <td>Hyderabad</td>
                              <td>Varun</td>
                              <td>Kumar</td>
                              <td>28</td>
                              <td>23</td>
                              <td>2</td>
                              <td>2</td>
                              <td>121.74</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">88</td>
                              <td>Hyderabad</td>
                              <td>C. Dhilip Ranjan</td>
                              <td>C. Dhilip Ranjan</td>
                              <td>1</td>
                              <td>2</td>
                              <td>0</td>
                              <td>0</td>
                              <td>50</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">89</td>
                              <td>Hyderabad</td>
                              <td>Vivek</td>
                              <td>Mohanan</td>
                              <td>48</td>
                              <td>43</td>
                              <td>3</td>
                              <td>4</td>
                              <td>111.63</td>
                              
                              <td>10</td>
                              <td>0</td>
                              <td>37</td>
                              <td>3</td>
                            </tr>
                            <tr height="19">
                              <td height="19">90</td>
                              <td>Hyderabad</td>
                              <td>Yasar Arafath</td>
                              <td>Md</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">91</td>
                              <td>Hyderabad</td>
                              <td>Krishna</td>
                              <td>Satpute</td>
                              <td>99</td>
                              <td>73</td>
                              <td>5</td>
                              <td>10</td>
                              <td>135.62</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">92</td>
                              <td>Hyderabad</td>
                              <td>Nitin&nbsp; Anili</td>
                              <td>Matunge</td>
                              <td>1</td>
                              <td>2</td>
                              <td>0</td>
                              <td>0</td>
                              <td>50</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">93</td>
                              <td>Hyderabad</td>
                              <td>Prathamesh</td>
                              <td>Thakare</td>
                              <td>26</td>
                              <td>12</td>
                              <td>1</td>
                              <td>3</td>
                              <td>216.67</td>
                              
                              <td>1.5</td>
                              <td>0</td>
                              <td>25</td>
                              <td>4</td>
                            </tr>
                            <tr height="19">
                              <td height="19">94</td>
                              <td>Hyderabad</td>
                              <td>Shreyash</td>
                              <td>Kadam</td>
                              <td>60</td>
                              <td>29</td>
                              <td>3</td>
                              <td>3</td>
                              <td>206.9</td>
                              
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                              <td>0</td>
                            </tr>
                            <tr height="19">
                              <td height="19">95</td>
                              <td>Hyderabad</td>
                              <td>Vicky</td>
                              <td>Bhoir</td>
                              <td>8</td>
                              <td>8</td>
                              <td>1</td>
                              <td>0</td>
                              <td>100</td>
                              
                              <td>10</td>
                              <td>0</td>
                              <td>89</td>
                              <td>6</td>
                            </tr>
                            <tr height="19">
                              <td height="19">96</td>
                              <td>Hyderabad</td>
                              <td>Vishwajit</td>
                              <td>Thakur</td>
                              <td>40</td>
                              <td>36</td>
                              <td>0</td>
                              <td>2</td>
                              <td>111.11</td>
                              
                              <td>9</td>
                              <td>0</td>
                              <td>108</td>
                              <td>7</td>
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
        </div>
      </Tabs>
    </div>
  );
}

export default MatchDetails;
