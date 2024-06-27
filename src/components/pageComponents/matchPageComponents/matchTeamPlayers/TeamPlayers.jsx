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
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/FNKlagt87spg6q5iM2qdkZGC6U8gnTMt0sfNu7UI.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Parv Lamba</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/J3CAxAXUfwrFhXcwjPwxae9Xs7hRaJ09KlFkCen5.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Ajit Mohite</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/LNeMkn35WGp1AdK23kX7QiTKIqvLJKcSMZpqkW4k.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Sunil Chawri</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/N0h8xxOQ6EVY3jAXG1DZhVwZix4zXAGliwYRCP7w.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Thomas Dias</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="innerTabsSectionTitle">
                  <SectionTitle titleText="All Rounders" />
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/vD2gXfEoebgBvkXFg00AquimulTUhL7GIYa94XR0.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Rahul Baghel</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/ZBA0pPr9y6NbOeYYTpyDzkC4LCNT4bFW7r57BDi8.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Saroj Paramanik</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/SmL8ttEtgYsCJBIvILAtLfShj6Z2ToMVpaUy5uc7.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Prajjwal Somvanshi</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/PlNkya93jMYKVc3rxjqSdOT2rDgcZa697yrueYa4.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Sharik Yasir</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/FtYeaqVA8Udbweon4J3EbHzdqJqITHskIO0EoJgW.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Harishkumar Kk</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/stEPJ0xKwf91AucXy18EKWQL2b2JWOsuh3twWun9.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Mansoor Kl</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/UkltcA5eISctLm3AC6g8fUS5Ag4oCyYPT5lMcQlJ.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Ankur Singh</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/yiFLHe5Ol9W8EJECFWl9gv29qF51AApMPFVl9Eig.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Bilal Rajput</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/be03aBEBbNPxvkza2efmn9CPglnne0yeb3tlbPaG.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Bunty Patel</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="innerTabsSectionTitle">
                  <SectionTitle titleText="Bowlers" />
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5 ">
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/5P3UZkoLr5CjbJlRpyN5MREl6ybRGAO7Pgn6Q2AI.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>ASHIQ ALI SHAMSU</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/E87yV36Y22mBx6AUlWZ4FOfUuG3PE17Tow9vo1ly.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Akash Gautam</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/77hc8oALwdKk9b3w8B6B2s3KMDdYLYU53ufmVrDB.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Kulwinder Singh</p>
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
                          src="https://www.ispl-t10.com/images/team-master/players/Ew5qWMgfzmWpCHTAiInZlRqAZyl1gXOxT7hnExPY.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
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
                          src="https://www.ispl-t10.com/images/team-master/players/PFIcatoj2LpTOi6KshOXeYrJqXXCj2r4jdZH3VLt.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
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
                          src="https://www.ispl-t10.com/images/team-master/players/B6ucXOVZ8akamiSYKSCokoWbMpLZz6CskTKc9tV5.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
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
                          src="https://www.ispl-t10.com/images/team-master/players/ZCWzhjj3X4WW5ri6OEQDt92KfN6zSU1pOW76HZs9.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
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
                          src="https://www.ispl-t10.com/images/team-master/players/jCqGGAbQxsdDASMrEJMWJuJrpfzI6O3e2xsK1l7B.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
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
                          src="https://www.ispl-t10.com/images/team-master/players/9EgmCjZDLVNngqBFru34OcdYdhe4ES5hJhUoY8b8.png"
                          alt="teams01"
                        />
                        <div className="bat-icon allRoundBox">
                          <img
                            src={redball}
                            alt="BOWLERS"
                            className="img-fluid"
                          />
                          <img src={bat} alt="BOWLERS" className="img-fluid" />
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
                          src="https://www.ispl-t10.com/images/team-master/players/fdtBm9Yr2yrQspeLX7vSDqJspbCoPLfTBd5IQKpF.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img
                            src={redball}
                            alt="BATTERS"
                            className="img-fluid"
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
                          src="https://www.ispl-t10.com/images/team-master/players/UN281IrE7RwwUuHvefrKtQAynxsuhwFeGdz7V2Bd.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img
                            src={redball}
                            alt="BATTERS"
                            className="img-fluid"
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
                          src="https://www.ispl-t10.com/images/team-master/players/0FvCeUjrWL4lkB35t7AAv90R8yrGqHr2WpgZvtVr.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img
                            src={redball}
                            alt="BATTERS"
                            className="img-fluid"
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
                          src="https://www.ispl-t10.com/images/team-master/players/BljMowUrOkZV2hifsUoyEvpnZPSrLQkSO1CC55H9.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img
                            src={redball}
                            alt="BATTERS"
                            className="img-fluid"
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
                          src="https://www.ispl-t10.com/images/team-master/players/Y2OxVTgSxhwj6QorOipSnuHVkAiMLjxMAsb8HDjG.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
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
                          src="https://www.ispl-t10.com/images/team-master/players/9d5FIW9KEY2BSTsPxaIGC8ep5qLhUE447XkxbrSg.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
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
                          src="https://www.ispl-t10.com/images/team-master/players/QC4wXTHREM7clpnVaLUeSy7wJvMBFJqhM9ZsrUCh.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
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
                          src="https://www.ispl-t10.com/images/team-master/players/kbjV3BU2ai0Thqf5ua5QSwGU2Eg77H4aekJI9YND.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
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
                          src="https://www.ispl-t10.com/images/team-master/players/ruUBmBQgYRb5TiDp4XwvDsOU59xTucUamajafMLw.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
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
                          src="https://www.ispl-t10.com/images/team-master/players/vQh37ZlHCkZcBhHmarxqpweSvPSCe2dSeF8BacBs.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
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
