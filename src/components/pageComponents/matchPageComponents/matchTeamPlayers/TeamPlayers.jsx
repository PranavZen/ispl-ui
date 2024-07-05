import React from "react";
import Tabs from "../../../../components/pageComponents/homePageComponents/pointTableSectionWrap/Tabs";
import { bat, redball } from "../../../../assets/imagePath";
import SectionTitle from "../../../../components/common/sectiontitletext/SectionTitle";
import "../matchTeamPlayers/matchTeamplayers.css";
const TeamPlayers = () => {
  return (
    <>
      <div className="customTeamPlayersDetails">
        <Tabs>
          <div label="MAJHII MUMBAI" spanImg='<i class="fa fa-users"></i>'>
            <div className="playerspage d-inline-block w-100">
              <div className="container">
                <div className="innerTabsSectionTitle">
                  <SectionTitle titleText="Batters" />
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/rUWanPey6VY1VdJhjIiBOhiT7jf1KEI2erhZb5AW.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={bat}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Raviraj Ahire</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/2CBZvqOnETEQJD2MpNE5DsHFUNtrzamlpmKu4Idy.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={bat}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Ajaz Qureshi</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/HUuLR3fbyOcuradQSclaAN4SKoFrBLFB0QHWjwlS.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={bat}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Ashraf Khan</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/Pz6LQX9402G817XwPHmxnMMuT6XlB3X9zumuhLHi.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={bat}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Shreyas Indulkar</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/Qt6E43NKWQpVGJvL0tKv9A8YtAtWC3YEe4X0xIVE.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={bat}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Yogesh Penkar</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="innerTabsSectionTitle">
                  <SectionTitle titleText="All Rounders" />
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/qkLNjnJwcdtbN8MMLc7iKLYqYdABqNiQQE7Jumx1.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Akshay Patil</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/IKCBLoUYO8qkfZGDBMrRPc7pcoVuZpYpwl98KvAm.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Abhishek Kumar Dalhor</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/YFWy4RnUBpx4F7ZIEOVnDmdPPYLJhnORWqQR64pB.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Ahmad Fayaz Rather</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/2FBL8sCYSISmoIRrWVn8Z2xe4j3ZFnPVGaCWmdDP.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Basharat Hussain Wani</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/sZF3eB9m2HcTIL5FbTesQRUVRX6fOz2Q5WHLNFtA.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Murali A Murali</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/tE8v7T55rNC4r5aWi5VYNFXUBqrtl6gTX6TedCl2.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Syed Salman Syed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/eAKNSkVrgPhTklMY2j9SH2MgNpbURCCsoEcDnsN3.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Krushna Pawar</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/1dA2EX9gc0EpWel2dBCPaCyl30kmPm7Atef2Rm9p.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Ravi Gupta</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/HYn4LA5zqcDKCeW7YKKdvUeSfCnE6U8QWtpf7ddH.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Vijay Jaysing</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="innerTabsSectionTitle">
                  <SectionTitle titleText="Bowlers" />
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/UP4aYyeO8b4DWpzRUenxUTGf6842c2NwhVkaGFaL.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={redball}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Deepak Kumar Limboo</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/qpjb45pXXhwY9a9jNm9Ynaz0wWNwJRJcnc7APAuK.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={redball}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
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
          <div label="TIIGERS OF KOLKATA" spanImg='<i class="fa fa-users"></i>'>
            <div className="playerspage d-inline-block w-100">
              <div className="container">
                <div className="innerTabsSectionTitle">
                  <SectionTitle titleText="ALL ROUNDERS" />
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/Ew5qWMgfzmWpCHTAiInZlRqAZyl1gXOxT7hnExPY.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Babbu Rana</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/PFIcatoj2LpTOi6KshOXeYrJqXXCj2r4jdZH3VLt.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Shivam Kamboj</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/B6ucXOVZ8akamiSYKSCokoWbMpLZz6CskTKc9tV5.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>R.Bala Chandran</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/ZCWzhjj3X4WW5ri6OEQDt92KfN6zSU1pOW76HZs9.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Sagar Bhandary</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/jCqGGAbQxsdDASMrEJMWJuJrpfzI6O3e2xsK1l7B.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Bhavesh Pawar</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/9EgmCjZDLVNngqBFru34OcdYdhe4ES5hJhUoY8b8.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={bat}
                            alt="BOWLERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>uzair shaikh</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="innerTabsSectionTitle">
                  <SectionTitle titleText="BOWLERS" />
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/fdtBm9Yr2yrQspeLX7vSDqJspbCoPLfTBd5IQKpF.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={redball}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Akhil singh</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/UN281IrE7RwwUuHvefrKtQAynxsuhwFeGdz7V2Bd.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={redball}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Pritpal singh Pt Johnson</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/0FvCeUjrWL4lkB35t7AAv90R8yrGqHr2WpgZvtVr.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img
                            src={redball}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Raju mukhiya</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/BljMowUrOkZV2hifsUoyEvpnZPSrLQkSO1CC55H9.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={redball}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Shivam Kumar</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="innerTabsSectionTitle">
                  <SectionTitle titleText="BATTERS" />
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/Y2OxVTgSxhwj6QorOipSnuHVkAiMLjxMAsb8HDjG.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={bat}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Munna Shaikh</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/9d5FIW9KEY2BSTsPxaIGC8ep5qLhUE447XkxbrSg.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={bat}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Jonty Sarkar</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/QC4wXTHREM7clpnVaLUeSy7wJvMBFJqhM9ZsrUCh.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={bat}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Fardeen Kazi</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/kbjV3BU2ai0Thqf5ua5QSwGU2Eg77H4aekJI9YND.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={bat}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Pradeep Patil</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/ruUBmBQgYRb5TiDp4XwvDsOU59xTucUamajafMLw.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={bat}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Prathamesh Pawar</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://my.ispl-t10.com/images/team-master/players/vQh37ZlHCkZcBhHmarxqpweSvPSCe2dSeF8BacBs.png"
                          alt="teams01"
                          loading="lazy"
                        />
                        <div className="bat-icon">
                          <img
                            src={bat}
                            alt="BATTERS"
                            className="img-fluid"
                            loading="lazy"
                            F
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Rajat Mundhe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default TeamPlayers;
