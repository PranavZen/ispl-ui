import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../spinnercomponent/Spinner";

function PlayerStatsTable() {
  const [playerStats, setPlayerStats] = useState([]);
  const [filteredStats, setFilteredStats] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPlayerStats = async () => {
      try {
        const response = await axios.get(
          "https://my.ispl-t10.com/api/player-stat"
        );
        const sortedPlayerStats = response.data.data.player_stat.sort(
          (a, b) => b.runs_batting - a.runs_batting
        );
        setPlayerStats(sortedPlayerStats);
        setFilteredStats(sortedPlayerStats);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching player stats:", error);
      }
    };

    fetchPlayerStats();
  }, []);

  useEffect(() => {
    const applyFilter = () => {
      let filteredData = [...playerStats];

      switch (filterType) {
        case "top_batsman":
          filteredData = filteredData.sort(
            (a, b) => b.runs_batting - a.runs_batting
          );
          break;
        case "top_bowlers":
          filteredData = filteredData.sort((a, b) => b.wickets - a.wickets);
          break;
        case "top_fours":
          filteredData = filteredData.sort((a, b) => b.fours - a.fours);
          break;
        case "top_sixes":
          filteredData = filteredData.sort((a, b) => b.sixs - a.sixs);
          break;
        case "top_strike_rates":
          filteredData = filteredData.sort(
            (a, b) => parseFloat(b.strike_rate) - parseFloat(a.strike_rate)
          );
          break;
        default:
          // No filter selected, use original data
          filteredData = playerStats;
      }

      setFilteredStats(filteredData);
    };

    applyFilter();
  }, [filterType, playerStats]);

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  return (
    <>
      <div className="filterBtnWrap">
        <label htmlFor="filterSelect" className="form-label">
          Select Filter:
        </label>
        <select
          className="form-select"
          id="filterSelect"
          onChange={handleFilterChange}
        >
          <option value="">-- Select Filter --</option>
          <option value="top_batsman">Top Batsman Scorers</option>
          <option value="top_bowlers">Top Wicket Takers</option>
          <option value="top_fours">Top 4's</option>
          <option value="top_sixes">Top 6's</option>
          <option value="top_strike_rates">Top Strike Rates</option>
        </select>
      </div>
      <div className="table-responsive mt-2">
        <div className="container">
          <div className="row">
            {loading ? (
              <Spinner />
            ) : (
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
                  {filteredStats.map((player, index) => (
                    <tr key={index} height="19">
                      <td>{index + 1}</td>
                      <td>{player.team_name}</td>
                      <td>{player.first_name}</td>
                      <td>{player.last_name}</td>
                      <td>{player.runs_batting}</td>
                      <td>{player.balls_batting}</td>
                      <td>{player.fours}</td>
                      <td>{player.sixs}</td>
                      <td>{player.strike_rate}</td>
                      <td>{player.over_bowling}</td>
                      <td>{player.matches_bowling}</td>
                      <td>{player.runs_bowling}</td>
                      <td>{player.wickets}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerStatsTable;
