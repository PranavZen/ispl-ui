import React, { useEffect, useState } from "react";
import "../pointTableSectionWrap/pointtablesection.css";
import Tabs from "./Tabs";
import MatchResultCard from "./matchresultcard/MatchResultCard";
import SqareButton from "../../../common/cta/SqareButton";
import ResultSlider from "./tableSliderLayout/ResultSlider";
import axios from "axios";
import Spinner from "../../matchPageComponents/spinnercomponent/Spinner";
import {
  qlfy,
  team1,
  team2,
  team3,
  team4,
  team5,
} from "../../../../assets/imagePath";
import TableSlider from "./tableSliderLayout/TableSlider";
import PointsTableCard from "./pointscard/PointsTableCard";

function formatDate(dateString) {
  const options = { day: "numeric", month: "short", year: "numeric" };
  return new Date(dateString).toLocaleDateString("en-IN", options);
}

function formatTime(timeString) {
  let [hours, minutes] = timeString.split(":");
  hours = parseInt(hours, 10);
  const period = hours >= 12 ? "PM" : "AM";

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  return `${hours}:${minutes} ${period}`;
}

function PointTableSection() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log("matches :", matches);
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          "https://my.ispl-t10.com/api/matches/results"
        );
        setMatches(response.data.data.result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching matches:", error);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const getWinMessage = (match) => {
    if (match.team_one_scrore > match.team_two_scrore) {
      return `${match.from_team_name.toUpperCase()} WON BY ${
        match.team_one_scrore - match.team_two_scrore
      } RUNS`;
    } else if (match.team_one_scrore < match.team_two_scrore) {
      return `${match.to_team_name.toUpperCase()} WON BY ${
        match.team_two_scrore - match.team_one_scrore
      } RUNS`;
    }
    return "MATCH TIED";
  };
  const getCategoryName = (match) => {
    if (match.cat_id === 3) {
      return "LEAGUE MATCH";
    } else if (match.category_name === "QUALIFIER 1") {
      return "SEMIFINAL 1";
    } else if (match.category_name === "QUALIFIER 2") {
      return "SEMIFINAL 2";
    } else if (match.category_name === "FINAL") {
      return "FINAL";
    } else {
      return match.category_name;
    }
  };
  return (
    <section id="pointsTableSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 mx-auto">
            <Tabs>
              {/* <div
                label="Points Table"
                spanImg='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M4.125 15.75C3.62772 15.75 3.15081 15.5525 2.79917 15.2008C2.44754 14.8492 2.25 14.3723 2.25 13.875V1.125C2.25 0.826631 2.13147 0.540483 1.9205 0.329505C1.70952 0.118526 1.42337 0 1.125 0C0.826631 0 0.540483 0.118526 0.329505 0.329505C0.118526 0.540483 0 0.826631 0 1.125L0 13.875C0 14.969 0.434597 16.0182 1.20818 16.7918C1.98177 17.5654 3.03098 18 4.125 18H16.875C17.1734 18 17.4595 17.8815 17.6705 17.6705C17.8815 17.4595 18 17.1734 18 16.875C18 16.5766 17.8815 16.2905 17.6705 16.0795C17.4595 15.8685 17.1734 15.75 16.875 15.75H4.125Z" fill="white"/>
<path d="M14.625 13.5C14.9234 13.5 15.2095 13.3815 15.4205 13.1705C15.6315 12.9595 15.75 12.6734 15.75 12.375V7.875C15.75 7.57663 15.6315 7.29048 15.4205 7.0795C15.2095 6.86853 14.9234 6.75 14.625 6.75C14.3266 6.75 14.0405 6.86853 13.8295 7.0795C13.6185 7.29048 13.5 7.57663 13.5 7.875V12.375C13.5 12.6734 13.6185 12.9595 13.8295 13.1705C14.0405 13.3815 14.3266 13.5 14.625 13.5Z" fill="white"/>
<path d="M5.625 13.5C5.92337 13.5 6.20952 13.3815 6.4205 13.1705C6.63147 12.9595 6.75 12.6734 6.75 12.375V7.875C6.75 7.57663 6.63147 7.29048 6.4205 7.0795C6.20952 6.86853 5.92337 6.75 5.625 6.75C5.32663 6.75 5.04048 6.86853 4.8295 7.0795C4.61853 7.29048 4.5 7.57663 4.5 7.875V12.375C4.5 12.6734 4.61853 12.9595 4.8295 13.1705C5.04048 13.3815 5.32663 13.5 5.625 13.5Z" fill="white"/>
<path d="M10.125 13.5C10.4234 13.5 10.7095 13.3815 10.9205 13.1705C11.1315 12.9595 11.25 12.6734 11.25 12.375V4.125C11.25 3.82663 11.1315 3.54048 10.9205 3.3295C10.7095 3.11853 10.4234 3 10.125 3C9.82663 3 9.54048 3.11853 9.3295 3.3295C9.11853 3.54048 9 3.82663 9 4.125V12.375C9 12.6734 9.11853 12.9595 9.3295 13.1705C9.54048 13.3815 9.82663 13.5 10.125 13.5Z" fill="white"/>
</svg>'
              >
                <TableSlider>
                  <PointsTableCard
                    addClassName="card4"
                    cardNum="1"
                    teamLogo={team4}
                    teamName="Majhi Mumbai"
                    pts="6"
                    playedgames="5"
                    winsPt="3"
                    nrr="1.247"
                    // winLable="w"
                    // lossLable="l"
                    tag={qlfy}
                    fullPtsLink="/matches"
                  />
                  <PointsTableCard
                    addClassName="card3"
                    cardNum="2"
                    teamLogo={team3}
                    teamName="Tiigers Of Kolkata"
                    pts="6"
                    playedgames="5"
                    winsPt="3"
                    nrr="0.5"
                    // winLable="w"
                    // lossLable="l"
                    tag={qlfy}
                    fullPtsLink="/matches"
                  />
                  <PointsTableCard
                    addClassName="card5"
                    cardNum="3"
                    teamLogo={team5}
                    teamName="Srinagar Ke Veer"
                    pts="6"
                    playedgames="5"
                    winsPt="3"
                    nrr="0.156"
                    // winLable="w"
                    // lossLable="l"
                    tag={qlfy}
                    fullPtsLink="/matches"
                  />
                  <PointsTableCard
                    addClassName="card1"
                    cardNum="4"
                    teamLogo={team1}
                    teamName="Chennai Singhams"
                    pts="6"
                    playedgames="5"
                    winsPt="3"
                    nrr="-0.017"
                    // winLable="w"
                    // lossLable="l"
                    tag={qlfy}
                    fullPtsLink="/matches"
                  />
                  <PointsTableCard
                    addClassName="card2"
                    cardNum="5"
                    teamLogo={team2}
                    teamName="Bangalore Strikers"
                    pts="4"
                    playedgames="5"
                    winsPt="2"
                    nrr="-1.013"
                    // winLable="w"
                    // lossLable="l"
                    // tag={qlfy}
                    fullPtsLink="/matches"
                  />
                  <PointsTableCard
                    addClassName="card6"
                    cardNum="6"
                    teamLogo="https://my.ispl-t10.com/images/team-master/teams/swp1DD0AQL6lQPc9SbwPlWNPx6IjBCosZDzBFZ1t.png"
                    teamName="Falcon Risers Hyderabad"
                    pts="2"
                    playedgames="5"
                    winsPt="1"
                    nrr="-0.688"
                    // winLable="w"
                    // lossLable="l"
                    // tag={qlfy}
                    fullPtsLink="/matches"
                  />
                </TableSlider>
              </div> */}
              <div
                label="Match Result"
                spanImg='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M3.75006 4.50007C3.75006 4.08531 4.08606 3.75006 4.50007 3.75006H6.7501C7.16411 3.75006 7.50011 4.08531 7.50011 4.50007C7.50011 4.91482 7.16411 5.25008 6.7501 5.25008H4.50007C4.08606 5.25008 3.75006 4.91482 3.75006 4.50007ZM8.25012 6.7501H4.50007C4.08606 6.7501 3.75006 7.08536 3.75006 7.50011C3.75006 7.91487 4.08606 8.25012 4.50007 8.25012H8.25012C8.66413 8.25012 9.00013 7.91487 9.00013 7.50011C9.00013 7.08536 8.66413 6.7501 8.25012 6.7501ZM8.25012 9.75014H4.50007C4.08606 9.75014 3.75006 10.0854 3.75006 10.5002C3.75006 10.9149 4.08606 11.2502 4.50007 11.2502H8.25012C8.66413 11.2502 9.00013 10.9149 9.00013 10.5002C9.00013 10.0854 8.66413 9.75014 8.25012 9.75014ZM17.9545 3.4928C17.8465 3.19655 17.5645 3.00004 17.2503 3.00004H14.9995L14.203 0.765011C14.0935 0.471757 13.813 0.276754 13.5002 0.276754C13.1874 0.276754 12.9062 0.471757 12.7974 0.765011L12.0009 3.00004H9.75014C9.43589 3.00004 9.15464 3.19655 9.04663 3.4913C8.93788 3.78681 9.02563 4.11756 9.26564 4.32156L11.0484 5.77284L10.3427 8.03487C10.2474 8.33862 10.3539 8.66938 10.6082 8.86063C10.7409 8.96038 10.8992 9.01063 11.0582 9.01063C11.2037 9.01063 11.3492 8.96863 11.4752 8.88388L13.5062 7.52486L15.5717 8.86963C15.838 9.04288 16.186 9.02938 16.4387 8.83513C16.6915 8.64088 16.7935 8.30787 16.693 8.00562L15.9587 5.77059L17.7333 4.32531C17.974 4.12206 18.0625 3.79056 17.9545 3.4943V3.4928ZM16.5002 15.0002V15.3752C16.5002 16.8227 15.3227 18.0003 13.8752 18.0003H2.62429C1.17752 18.0003 0 16.8227 0 15.3752V3.75006C0 1.68228 1.68228 0 3.75006 0H9.75014C10.1642 0 10.5002 0.335255 10.5002 0.750011C10.5002 1.16477 10.1642 1.50002 9.75014 1.50002H3.75006C2.50954 1.50002 1.50002 2.50954 1.50002 3.75006V15.3752C1.50002 15.9955 2.00478 16.5002 2.62504 16.5002C3.2453 16.5002 3.75006 15.9955 3.75006 15.3752V15.0002C3.75006 13.7597 4.75957 12.7502 6.00009 12.7502H12.7502V10.5002C12.7502 10.0854 13.0862 9.75014 13.5002 9.75014C13.9142 9.75014 14.2502 10.0854 14.2502 10.5002V12.7502C15.4907 12.7502 16.5002 13.7597 16.5002 15.0002ZM15.0002 15.0002C15.0002 14.5862 14.6635 14.2502 14.2502 14.2502H6.00009C5.58683 14.2502 5.25008 14.5862 5.25008 15.0002V15.3752C5.25008 15.7772 5.15858 16.159 4.99657 16.5002H13.8752C14.4955 16.5002 15.0002 15.9955 15.0002 15.3752V15.0002Z" fill="white"/>
</svg>'
              >
                <ResultSlider>
                  {loading ? (
                    <Spinner />
                  ) : (
                    matches.map((match) => (
                      <MatchResultCard
                        key={match.id}
                        matchStatus={getCategoryName(match)}
                        team1finalScore={match.team_one_scrore}
                        team1Out={match.team_one_wicket}
                        team1Over={match.team_one_over}
                        team2finalScore={match.team_two_scrore}
                        team2Out={match.team_two_wicket}
                        team2Over={match.team_two_over}
                        dateTime={formatDate(match.match_date)}
                        mTime={formatTime(match.match_time)}
                        finalresult={getWinMessage(match)}
                        location={match.stadium_name}
                        to_team_name={match.to_team_name}
                        team1Logo={match.from_team_logo}
                        team2Logo={match.to_team_logo}
                      />
                    ))
                  )}
                </ResultSlider>
                <div className="tabBtnWrap">
                  <SqareButton
                    classNameText="sqrBtn"
                    btnName="Full Match Result"
                    svgFill="#fbe29a"
                    textColor="#fbe29a"
                    bordercolor="#fbe29a"
                    btnLinkUrl="/matches"
                  />
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PointTableSection;
