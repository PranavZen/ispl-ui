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
                <SectionTitle titleText="Batters" />
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

                <SectionTitle titleText="All Rounders" />
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

                <SectionTitle titleText="Bowlers" />
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
                <SectionTitle titleText="ALL ROUNDERS" />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/Cwu5FqRx8TV8MO5pF0aV3yTfPGkMIkOwcSyIK962.png"
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
                        <p>Vishwanath Jadhav</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/V9Lod9QZzsaPPDY4VPJmsExRk0uznwSFWsZwyj0a.png"
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
                        <p>Dilip Binjwa</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/6aWIfGxN37iPZf1f59XMLzNORDxe4Q9R7V1cHuJd.png"
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
                        <p>R.Thavith Kumar</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/NJYMT7y12mCBvBkXiCwlJLoKGDeVwsraNKkxGZMS.png"
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
                        <p>VENKATACHALAPATHI VIGNESH</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/jHgMCRLGhlTdHSnTvudS3Divhz5VXdbP9SUyIyOx.png"
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
                        <p>Bablu Patil</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/S0vQOr35Vz3jHi4huGzinuQRGZLa4pSwotUNMvqh.png"
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
                        <p>Harish Parmar</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/IfR5Wn2CcNHLSvOH4zNyF3EhyMpRDpHflZn2MbNT.png"
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
                        <p>VEDANT MAYEKAR</p>
                      </div>
                    </div>
                  </div>
                </div>
                <SectionTitle titleText="BOWLERS" />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/4qNAPjNXOz9ujykhK1bNCiFKwmjhwvvvduMYNYJK.png"
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
                        <p>Pankaj Parel</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/lTp9WGlEqhxK59uYjjPQKZhyY7ilacsCtEINBtIG.png"
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
                        <p>Farhat Ahmad</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/DmLrVHkIBAVDw3BlJiWQDyObDeibrUZfgK8b56Ja.png"
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
                        <p>Farman Khan</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/VOuOrKAqX7BPuh47fDcz7qo3qvLpEwj28qppaXjG.png"
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
                        <p>Aniket Sanap</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/XJoHjouhCeq3ne5QdkDIxxlVVE84m9Yv4vt4N541.png"
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
                        <p>Rajdeep Jadeja</p>
                      </div>
                    </div>
                  </div>
                </div>
                <SectionTitle titleText="BATTERS" />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/dnjW94ppdAAqOTAJhjwPCdvkQIwJNb4W9Kf5kBXo.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Sagar Ali</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/FgS2sqy6pmPrjyCJT2pP8Z2D5QYU8FZg6UawHiHn.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Sanjay Kanojjiya</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/vDzHWYgVYcN4GAVFbjd9zyk0MLylzGBb2rRgh8md.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>ketan mhatre</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="crm-teams01">
                      <figure>
                        <img
                          src="https://www.ispl-t10.com/images/team-master/players/vDnYYQnQVkhOL96nVcj5vKpmYZ3pINUKcNRQVXfD.png"
                          alt="teams01"
                        />
                        <div className="bat-icon">
                          <img src={bat} alt="BATTERS" className="img-fluid" />
                        </div>
                      </figure>
                      <div className="design">
                        <p>Sumeet Dhekale</p>
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
