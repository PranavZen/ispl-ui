import React from "react";
import "../newspage/newspagestyle.css";
// import EventsnNewsCard from "../../components/pageComponents/homePageComponents/newseventsSectionWrap/eventnewscard/EventsnNewsCard";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import newsLinks from './NewsData.json'
import imageData from './imageData.json'

function NewsPages() {
  return (
    <section id="newsSection">
      <Helmet>
        <title>ISPL T10 | News</title>
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

      <div className="container">
        <SectionTitle titleText="NEWS Articles" />
        <div className="row">
          <div className="col-lg-10 col-md-12 mx-auto">
            <div className="newsGridWrap row">
              {imageData.map((newsItem, index) => (
                <div
                  className={`newsImgBox col-lg-6 col-md-4 col-12 box${index + 1}`}
                  key={index}
                >
                  <Link
                    to={newsItem.imgUrl}
                    data-fancybox
                    className="comon-links-divb05"
                  >
                    <figure>
                      <img
                        src={newsItem.imgUrl}
                        alt={newsItem.altText}
                        loading="lazy"
                        className="img-fluid"
                      />
                    </figure>
                    <span>
                      {newsItem.title}
                      <i>Date : {newsItem.date}</i>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/******************All News ******************/}

        <SectionTitle titleText="ALL NEWS" />
        <div className="row">
          <div className="col-lg-10 col-md-12 mx-auto">
            <ul className="newList">
              {newsLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} target="_blank" rel="noreferrer" data-fancybox={link["data-fancybox"]}>
                    <span>
                      {index + 1}. {link.text} <i>({link.source})</i>
                    </span>
                  </Link>
                </li> 
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsPages;
