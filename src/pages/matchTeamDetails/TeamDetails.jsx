import React, { useEffect, useState } from "react";
import MatchCard from "../../components/pageComponents/matchPageComponents/matchCard/MatchCard";
import TeamPlayers from "../../components/pageComponents/matchPageComponents/matchTeamPlayers/TeamPlayers";
import axios from "axios";
import Spinner from "../../components/pageComponents/matchPageComponents/spinnercomponent/Spinner";
import { useParams } from "react-router-dom"; // Add this import
import { Helmet } from "react-helmet-async";

function formatDate(dateString) {
  const options = { day: "numeric", month: "short", year: "numeric" };
  return new Date(dateString).toLocaleDateString("en-IN", options);
}

function formatTime(timeString) {
  let [hours, minutes] = timeString.split(':');
  hours = parseInt(hours, 10);
  const period = hours >= 12 ? 'PM' : 'AM';

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  return `${hours}:${minutes} ${period}`;
}

const TeamDetails = () => {
  const { id } = useParams(); // Get the id from the URL
  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState(null);

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

    const fetchTeamPlayers = async () => {
      try {
        const response = await axios.get(
          `https://my.ispl-t10.com/api/matches/match-center/${id}`
        );
        setTeamPlayers(response.data.data);
      } catch (error) {
        console.error("Error fetching team players:", error);
      }
    };

    fetchMatches();
    fetchTeamPlayers();
  }, [id]);

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

  // Find the match with the given id
  const match = matches.find((match) => match.id === parseInt(id));

  return (
    <div className="innerPageMatchCenter">
     <Helmet>
        <title>ISPL T10 | Match Center</title>
        <meta
          name="description"
          content="This is the home page of our website."
        />
        <meta name="keywords" content="home, main, index" />
        <meta name="author" content="Author Name" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Home Page" />
        <meta
          property="og:description"
          content="This is the home page of our website."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/" />
        <meta
          property="og:image"
          content="https://www.example.com/home-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Page" />
        <meta
          name="twitter:description"
          content="This is the home page of our website."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/home-image.jpg"
        />
        <link rel="canonical" href="https://www.example.com/" />
        
      </Helmet>
      {loading ? (
        <Spinner />
      ) : !match ? (
        <p>No match found</p>
      ) : (
        <MatchCard
          key={match.id}
          team_one_scrore={match.team_one_scrore}
          team_one_wicket={match.team_one_wicket}
          team_one_over={match.team_one_over}
          team_two_scrore={match.team_two_scrore}
          team_two_wicket={match.team_two_wicket}
          team_two_over={match.team_two_over}
          match_date={formatDate(match.match_date)}
          match_time={formatTime(match.match_time)}
          win_message={getWinMessage(match)}
          stadium_name={match.stadium_name}
          to_team_name={match.to_team_name}
          to_team_logo={match.to_team_logo}
          from_team_logo={match.from_team_logo}
        />
      )}
      <TeamPlayers teamPlayers={teamPlayers} />
    </div>
  );
};

export default TeamDetails;
