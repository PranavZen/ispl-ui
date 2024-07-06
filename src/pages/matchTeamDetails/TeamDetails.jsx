import React from "react";
import MatchCard from "../../components/pageComponents/matchPageComponents/matchCard/MatchCard";
import TeamPlayers from "../../components/pageComponents/matchPageComponents/matchTeamPlayers/TeamPlayers";
import { Helmet } from "react-helmet-async";

const TeamDetails = () => {
  return (
    <>
      <Helmet>
        <title>ISPL T10 | Matches</title>
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4XX2NZ7QWK"
        ></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4XX2NZ7QWK');
        `}
        </script>
      </Helmet>
      <MatchCard />
      <TeamPlayers />
    </>
  );
};

export default TeamDetails;
