import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";

function MajhiMumbai() {
  return (
    <section className="teamPage">
      <div className="about-page-main comon-sub-page-main d-inline-block w-100" style={{ backgroundImage: 'url(https://www.ispl-t10.com/assets/image/ispl-bg.jpg)' }}>
        <div className="about-club-top">
          <div className="container">
            <div className="row row-cols-3 row-cols-md-6 team-logos justify-content-center">
              <div className="col text-center">
                <Link to="/team-list/chennai-singams">
                  <img src="https://www.ispl-t10.com/images/team-master/teams/bjbZn8mrGvQLq8YZBccwvPge7kXwtCo17zdDGZyl.png" alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/majhi-mumbai">
                  <img src="https://www.ispl-t10.com/images/team-master/teams/l0WvkaiAK483mzsHgU44h4uAXFkzUr9PWWd8D3DU.png" alt="" className="bg-info img-fluid" />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/tiigers-of-kolkata">
                  <img src="https://www.ispl-t10.com/images/team-master/teams/5PVSNCiBIBHYA94YN0ezkMMglhucXbX0JmIM2Svm.png" alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/srinagar-ke-veer">
                  <img src="https://www.ispl-t10.com/images/team-master/teams/bbe0uutmwUfRVW4FrpGg7EmHBs8kOd1DSimaIKjZ.png" alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/kvn-bangalore-strikers">
                  <img src="https://www.ispl-t10.com/images/team-master/teams/jzVTaGm8x3sv0HJFsbDELFR0juXkWCKUdturAY7e.png" alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="col text-center">
                <Link to="/team-list/falcon-risers-hyderabad">
                  <img src="https://www.ispl-t10.com/images/team-master/teams/swp1DD0AQL6lQPc9SbwPlWNPx6IjBCosZDzBFZ1t.png" alt="" className="img-fluid" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="about-page-main custom-about comon-sub-page-main d-inline-block w-100">
          <div className="about-club-top">
            <div className="container">
              <div className="row g-3 d-flex justify-content-center">
                <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                  <div className="team-logo">
                    <Link to="">
                      <img src="https://www.ispl-t10.com/images/team-master/teams/l0WvkaiAK483mzsHgU44h4uAXFkzUr9PWWd8D3DU.png" alt="" />
                    </Link>
                  </div>
                  <div className="team-name align-text-center">
                    <h2>MAJHI MUMBAI</h2>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="team-detail-text">
                    <p><span>Owner</span> <b>-</b> Neeti Agarwal / Amitabh Bachchan</p>
                    <p><span>Coach</span> <b>-</b> Yogesh Penkar</p>
                    <p><span>Venue</span> <b>-</b> MUMBAI</p>
                    <p><span>Captain</span> <b>-</b> Yogesh Penkar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="playerspage d-inline-block w-100">
        <div className="container">
          <div className="container">
          <SectionTitle titleText="ALL ROUNDERS" />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/qkLNjnJwcdtbN8MMLc7iKLYqYdABqNiQQE7Jumx1.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Akshay Patil</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/IKCBLoUYO8qkfZGDBMrRPc7pcoVuZpYpwl98KvAm.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Abhishek Kumar Dalhor</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/YFWy4RnUBpx4F7ZIEOVnDmdPPYLJhnORWqQR64pB.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Ahmad Fayaz Rather</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/2FBL8sCYSISmoIRrWVn8Z2xe4j3ZFnPVGaCWmdDP.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Basharat Hussain Wani</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/sZF3eB9m2HcTIL5FbTesQRUVRX6fOz2Q5WHLNFtA.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Murali A Murali</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/tE8v7T55rNC4r5aWi5VYNFXUBqrtl6gTX6TedCl2.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Syed Salman Syed</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/eAKNSkVrgPhTklMY2j9SH2MgNpbURCCsoEcDnsN3.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Krushna Pawar</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/1dA2EX9gc0EpWel2dBCPaCyl30kmPm7Atef2Rm9p.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Ravi Gupta</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/HYn4LA5zqcDKCeW7YKKdvUeSfCnE6U8QWtpf7ddH.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Vijay Jaysing</p>
                  </div>
                </div>
              </div>
            </div>
            <SectionTitle titleText="BATTERS" />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/rUWanPey6VY1VdJhjIiBOhiT7jf1KEI2erhZb5AW.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Raviraj Ahire</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/2CBZvqOnETEQJD2MpNE5DsHFUNtrzamlpmKu4Idy.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Ajaz Qureshi</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/HUuLR3fbyOcuradQSclaAN4SKoFrBLFB0QHWjwlS.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Ashraf Khan</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/Pz6LQX9402G817XwPHmxnMMuT6XlB3X9zumuhLHi.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Shreyas Indulkar</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/Qt6E43NKWQpVGJvL0tKv9A8YtAtWC3YEe4X0xIVE.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Yogesh Penkar</p>
                  </div>
                </div>
              </div>
            </div>
            <SectionTitle titleText="BOWLERS" />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/UP4aYyeO8b4DWpzRUenxUTGf6842c2NwhVkaGFaL.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Deepak Kumar Limboo</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="crm-teams01">
                  <figure>
                    <img src="https://www.ispl-t10.com/images/team-master/players/qpjb45pXXhwY9a9jNm9Ynaz0wWNwJRJcnc7APAuK.png" alt="teams01" />
                    <div className="bat-icon"><i className="fas fa-baseball"></i></div>
                  </figure>
                  <div className="design">
                    <p>Devid Gogoi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MajhiMumbai;
