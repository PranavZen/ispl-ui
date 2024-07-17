import React from "react";
import "../newspage/newspagestyle.css";
// import EventsnNewsCard from "../../components/pageComponents/homePageComponents/newseventsSectionWrap/eventnewscard/EventsnNewsCard";
import SectionTitle from "../../components/common/sectiontitletext/SectionTitle";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { paper1, paper2, paper3, paper4 } from "../../assets/imagePath";

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
              <div className="newsImgBox col-lg-6 col-md-4 col-12 box1">
                <Link
                  to="https://my.ispl-t10.com/assets/img/media/paper4.jpg"
                  data-fancybox
                  className="comon-links-divb05"
                >
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/assets/img/media/paper4.jpg"
                      alt="Pudhari"
                      loading="lazy"
                      className="img-fluid"
                    />
                  </figure>
                  <span>
                    Pudhari
                    <i>Date : February 26, 2024</i>
                  </span>
                </Link>
              </div>
              <div className="newsImgBox col-lg-6 col-md-4 col-12 box2">
                <Link
                  to="https://my.ispl-t10.com/assets/img/media/paper1.jpg"
                  data-fancybox
                  className="comon-links-divb05"
                >
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/assets/img/media/paper1.jpg"
                      alt="Daily Excelsior"
                      loading="lazy"
                      className="img-fluid"
                    />
                  </figure>
                  <span>
                    Daily Excelsior
                    <i>Date : February 26, 2024</i>
                  </span>
                </Link>
              </div>
              <div className="newsImgBox col-lg-6 col-md-4 col-12 box3">
                <Link
                  to="https://my.ispl-t10.com/assets/img/media/paper2.jpg"
                  data-fancybox
                  className="comon-links-divb05"
                >
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/assets/img/media/paper2.jpg"
                      alt="Mid-Day"
                      loading="lazy"
                      className="img-fluid"
                    />
                  </figure>
                  <span>
                    Mid-Day
                    <i>Date : February 26, 2024</i>
                  </span>
                </Link>
              </div>
              <div className="newsImgBox col-lg-6 col-md-4 col-12 box4">
                <Link
                  to="https://my.ispl-t10.com/assets/img/media/paper3.jpg"
                  data-fancybox
                  className="comon-links-divb05"
                >
                  <figure>
                    <img
                      src="https://my.ispl-t10.com/assets/img/media/paper3.jpg"
                      alt="Hindustan Times"
                      loading="lazy"
                      className="img-fluid"
                    />
                  </figure>
                  <span>
                    Hindustan Times
                    <i>Date : February 26, 2024</i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <SectionTitle titleText="ALL NEWS" />
        <div className="row">
          <div className="col-lg-10 col-md-12 mx-auto">
            <ul className="newList">
              <li>
                <Link
                  to="https://www.ptinews.com/story/sports/East-Zone-cricketer-Dalhor-bought-for-Rs-27-lakh-in-ISPL-auction/1316141"
                  rel="noreferrer"
                >
                  <span>
                    1. East Zone cricketer Dalhor bought for Rs 27 lakh in ISPL
                    auction
                    <i>( PTI )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://aninews.in/news/entertainment/out-of-box/ispl-saif-ali-khan-super-excited-to-be-brand-ambassador-of-tigers-of-kolkata20240225184713/"
                  rel="noreferrer"
                >
                  <span>
                    2. ISPL: Saif Ali Khan opens up on his love for cricket and
                    'City of Joy' Kolkata
                    <i>( ANI )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://aninews.in/news/sports/cricket/when-i-was-11-or-12-i-was-not-selected-sachin-tendulkar-recalls-setback-during-cricketing-journey20240225224025/"
                  rel="noreferrer"
                >
                  <span>
                    3. When I was 11 or 12, I was not selected.....: Sachin
                    Tendulkar recalls setback during cricketing journey
                    <i>( PTI )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.mid-day.com/sports/cricket/article/rs-27-lakh-for-abhishek-dalhor-lock-kiya-jaye-say-team-big-b-23336979"
                  rel="noreferrer"
                >
                  <span>
                    4. Rs 27 lakh for Abhishek Dalhor? Lock kiya jaye, say Team
                    Big B<i>( Mid-Day )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.amarujala.com/photo-gallery/entertainment/ispl-auction-press-conferance-tiger-of-kolkata-owner-saif-ali-khan-manjhi-mumbai-abhishek-bachchan-2024-02-25"
                  rel="noreferrer"
                >
                  <span>
                    5. ISPL: आईएसपीएल को लेकर उत्साहित हैं बॉलीवुड सितारे,
                    सैफ-अभिषेक ने टूर्नामेंट को लेकर कही यह बात
                    <i>( Amar Ujala )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://theprint.in/sport/east-zone-cricketer-dalhor-bought-for-rs-27-lakh-in-ispl-auction/1978562/"
                  rel="noreferrer"
                >
                  <span>
                    6. East Zone cricketer Dalhor bought for Rs 27 lakh in ISPL
                    auction
                    <i>( The Print )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.lokmattimes.com/cricket/news/when-i-was-11-or-12-i-was-not-selected-sachin-tendulkar-recalls-setback-during-cricketing-journey/"
                  rel="noreferrer"
                >
                  <span>
                    7. When I was 11 or 12, I was not selected.....: Sachin
                    Tendulkar recalls setback during cricketing journey
                    <i>( Lokmat Times )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.sportstiger.com/photos/cricket/in-pictures-glimpses-from-ispl-inaugural-season-auction"
                  rel="noreferrer"
                >
                  <span>
                    8. In pictures: Glimpses from ISPL inaugural season auction
                    <i>( Sports Tiger )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.risingkashmir.com/anantnags-farhat-ahmad-auctioned-in-maiden-ispl-4a02dafe-f922-4846-bb97-6b5213a335b7"
                  rel="noreferrer"
                >
                  <span>
                    9. Anantnag's Farhat Ahmad auctioned in maiden ISPL
                    <i>( Rising Kashmir )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.mykhel.com/cricket/chennai-singams-ispl-2024-squad-complete-list-of-players-money-spent-266493.html"
                  rel="noreferrer"
                >
                  <span>
                    10. Chennai Singams ISPL 2024 Squad: Complete List of
                    Players, Money Spent
                    <i>( My Khel )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.latestly.com/agency-news/entertainment-news-ispl-saif-ali-khan-opens-up-on-his-love-for-cricket-and-city-of-joy-kolkata-5782329.html#google_vignette"
                  rel="noreferrer"
                >
                  <span>
                    11. Entertainment News | ISPL: Saif Ali Khan Opens Up on His
                    Love for Cricket and 'City of Joy' Kolkata
                    <i>( Latestly )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.bollywoodhungama.com/news/parties-and-events/photos-saif-ali-khan-sachin-tendulkar-snapped-ispl-indian-street-premiere-league-event/"
                  rel="noreferrer"
                >
                  <span>
                    12. Saif Ali Khan, Abhishek Bachchan and Sachin Tendulkar
                    snapped at the ISPL (Indian Street Premiere League) event
                    <i>( Bollywood Hungam )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://hindi.asianetnews.com/webstories/entertainment/entertainment-news/saif-ali-khan-abhishek-bachchan-sachin-tendulkar-were-present-in-ispl-auction-rps-d4zq5rz"
                  rel="noreferrer"
                >
                  <span>
                    13. IPL के बाद मचेगी ISPL की धूम, ऑक्शन मेंपहुंचेये हफल्म
                    स्टार
                    <i>( Asianet News )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/saif-ali-khan-brand-ambassador-of-tigers-of-kolkata-in-ispl/articleshow/108001491.cms"
                  rel="noreferrer"
                >
                  <span>
                    14. ISPL: Saif Ali Khan super excited to be brand ambassador
                    of Tiigers of Kolkata
                    <i>( The Times of India )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.outlookindia.com/sports/cricket/indian-street-premier-league-2024-abhishek-kumar-dalhor-hits-jackpot-joins-amitabh-bachchan-owned-majhi-mumbai-for-inr-27-lakh"
                  rel="noreferrer"
                >
                  <span>
                    15. Indian Street Premier League 2024: Abhishek Kumar Dalhor
                    Hits Jackpot, Joins Amitabh Bachchan-Owned Majhi Mumbai For
                    INR 27 Lakh
                    <i>( Outlook India )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.mykhel.com/cricket/bangalore-strikers-ispl-2024-squad-complete-list-of-players-money-spent-biggest-buys-266499.html"
                  rel="noreferrer"
                >
                  <span>
                    16. Bangalore Strikers ISPL 2024 Squad: Complete List of
                    Players, Money Spent, Biggest Buys
                    <i>( My Khel )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.dailyexcelsior.com/east-zone-cricketer-dalhor-bought-for-rs-27-lakh-in-ispl-auction/"
                  rel="noreferrer"
                >
                  <span>
                    17. East Zone cricketer Dalhor bought for Rs 27 lakh in ISPL
                    auction
                    <i>( Daily Excelsior )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.mykhel.com/cricket/ispl-2024-auction-most-expensive-players-top-10-buys-indian-street-premier-league-266501.html"
                  rel="noreferrer"
                >
                  <span>
                    18. ISPL 2024 Most Expensive Players: Top 10 Auction Buys of
                    Indian Street Premier League
                    <i>( My Khel )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.ptinews.com/story/sports/East-Zone-cricketer-Dalhor-bought-for-Rs-27-lakh-in-ISPL-auction/1316141"
                  rel="noreferrer"
                >
                  <span>
                    19. Films stars at the ISPL auction
                    <i>( Asianet News )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.mykhel.com/cricket/majhi-mumbai-ispl-2024-squad-complete-list-of-players-money-spent-biggest-buys-266509.html"
                  rel="noreferrer"
                >
                  <span>
                    20. Majhi Mumbai ISPL 2024 Squad: Complete List of Players,
                    Money Spent, Biggest Buys
                    <i>( My Khel )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.bhaskar.com/local/mp/alirajpur/news/selection-in-ispl-from-tribal-dominated-district-132640210.html"
                  rel="noreferrer"
                >
                  <span>
                    21. आहदवासी बाहल्य हिलेसे हआ ISPL मेचयन:कलेक्टर नेसम्माहनत
                    कर हकया आहथाक सियोग
                    <i>( Dainik Bhaskar )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.newsdrum.in/sports/east-zone-cricketer-dalhor-bought-for-rs-27-lakh-in-ispl-auction-3999111"
                  rel="noreferrer"
                >
                  <span>
                    22. East Zone cricketer Dalhor bought for Rs 27 lakh in ISPL
                    auction
                    <i>( NewsDrum )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.latestly.com/agency-news/sports-news-east-zone-cricketer-dalhor-bought-for-rs-27-lakh-in-ispl-auction-5782438.html"
                  rel="noreferrer"
                >
                  <span>
                    23. Sports News | East Zone Cricketer Dalhor Bought for Rs
                    27 Lakh in ISPL Auction
                    <i>( Latestly )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.devdiscourse.com/article/sports-games/2839697-east-zone-cricketer-dalhor-bought-for-rs-27-lakh-in-ispl-auction"
                  rel="noreferrer"
                >
                  <span>
                    24. East Zone cricketer Dalhor bought for Rs 27 lakh in ISPL
                    auction
                    <i>( DevDiscourse )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.lokmattimes.com/cricket/news/ispl-2024-list-of-top-10-costliest-buys-in-indian-street-premier-league-auction-a507/"
                  rel="noreferrer"
                >
                  <span>
                    25. ISPL 2024: List of top 10 costliest buys in Indian
                    Street Premier League Auction
                    <i>( Lokmat Times )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://sportsmintmedia.com/chennai-singams-emerge-top-bidder-at-ispl-auction-by-spending-inr-96-4-lakh/"
                  rel="noreferrer"
                >
                  <span>
                    26. Chennai Singams emerge top bidder at ISPL auction by
                    spending INR 96.4 lakh
                    <i>( Sports Mint )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.sportstiger.com/photos/cricket/top-5-under-19-players-in-ispl-auction-2024"
                  rel="noreferrer"
                >
                  <span>
                    27. Top 5 Under-19 Players in ISPL Auction 2024
                    <i>( Sports Tiger )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.mykhel.com/cricket/tigers-of-kolkata-ispl-2024-squad-complete-list-of-players-money-spent-biggest-buys-266537.html"
                  rel="noreferrer"
                >
                  <span>
                    28. Tiigers of Kolkata ISPL 2024 Squad: Complete List of
                    Players, Money Spent, Biggest Buys
                    <i>( My Khel )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://globalnewsmakers.wordpress.com/2024/02/25/bidding-wars-and-big-bucks-indian-street-premier-league-ispl-auction-showcases-tennis-ball-crickets-finest-in-high-stakes-showdown/"
                  rel="noreferrer"
                >
                  <span>
                    29. Bidding Wars and Big Bucks: Indian Street Premier League
                    (ISPL) Auction showcases Tennis Ball Cricket’s Finest in
                    High-Stakes Showdown
                    <i>( Global News Makers )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://x.com/ANI/status/1761721760687251585?t=DIH10xWGsANnHsuuw1KwOw&s=08"
                  rel="noreferrer"
                >
                  <span>
                    30. #WATCH | Mumbai: At the occasion of the firstever
                    auction of the Indian Street Premier League (ISPL), Former
                    Indian Cricketer Sachin Tendulkar
                    <i>( ANI )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://x.com/PTI_News/status/1761710066514710837"
                  rel="noreferrer"
                >
                  <span>
                    31. VIDEO | Here's what cricket legend Sachin Tendulkar
                    (@sachin_rt ) said at the occasion of the first-ever auction
                    of the Indian Street Premier League (ISPL).
                    <i>( PTI )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/shorts/cKohLjWaSnM"
                  rel="noreferrer"
                >
                  <span>
                    32. Master Blaster Sachin Tendulkar gears up for the ISPL
                    auction
                    <i>( HT Shorts )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://x.com/IndiaToday/status/1761702957048078604"
                  rel="noreferrer"
                >
                  <span>
                    33. Watch: Cricket legend Sachin Tendulkar and Bollywood
                    actor Saif Ali Khan make their way to the ISPL auction.
                    <i>( India Today )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://x.com/etimes/status/1761763703370752165?t=ALKFlMhKo7PfKb9vjqkuEA&s=08"
                  rel="noreferrer"
                >
                  <span>
                    34. #AbhishekBachchan adds the star quotient to the
                    inaugural ISPL auction. A night of glitz, glamour, and
                    cricket! 🌠🏏
                    <i>( ETimes )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://x.com/gujratsamachar/status/1761706960817197100"
                  rel="noreferrer"
                >
                  <span>
                    35. Attendance of former cricketer Sachin Tendulkar at the
                    first auction of Indian Street Premier League
                    <i>( Gujrat Samachar )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/watch?v=fX41IYETRlk"
                  rel="noreferrer"
                >
                  <span>
                    36. Saif Ali Khan Talks About his Father Teaching him
                    Catching Cricket Ball | ISPL 2024 | Cricket News
                    <i>( Cricket Next )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/watch?v=NbJXyF-oG3s"
                  rel="noreferrer"
                >
                  <span>
                    37. ISPL: Saif Ali Khan Opens Up on His Connection With
                    Kolkata, Abhishek Bachchan Shares Excitement
                    <i>( Mid-Day India )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/shorts/afFIoBthOiY"
                  rel="noreferrer"
                >
                  <span>
                    38. Saif Ali Khan's Suave OOTD Is The Reason Why He's A
                    Pataudi! #Shorts | N18S
                    <i>( New 18 )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/watch?v=s4KHsOa2XUA"
                  rel="noreferrer"
                >
                  <span>
                    39. Press Conference Of Saif Ali Khan Co Owner - Tiger Of
                    Kolkata Team #saifalikhan #pressconference
                    <i>( Shemaroo Bollygoggly )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/shorts/ILOJlna7K5E"
                  rel="noreferrer"
                >
                  <span>
                    40. Saif Ali Khan & Sachin Tendulkar happily greet each
                    other at an even
                    <i>( Zoom )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/watch?v=HeyXaYKwPw0"
                  rel="noreferrer"
                >
                  <span>
                    41. Sachin Tendulkar & Ashish Shelar at Press Conference of
                    the First Ever Auction of ISPL
                    <i>( The Hans India )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://x.com/BehindHindi/status/1761780855562010861"
                  rel="noreferrer"
                >
                  <span>
                    42. Abhishek Bachchan was casually spotted at the ISPL
                    auction.
                    <i>( Hindi Behind Talkies )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/watch?v=OzI3oxThsso"
                  rel="noreferrer"
                >
                  <span>
                    43. Sachin Tendulkar, Saif Ali Khan, Ashish Shelar at Press
                    Conference of the first ever Auction of ISPL
                    <i>( Shudh Manoranjan )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://x.com/SocialNewsDail2/status/1761728191691894924"
                  rel="noreferrer"
                >
                  <span>
                    44. Mumbai: At the occasion of the first-ever auction of the
                    Indian Street Premier League (ISPL), Former Indian Cricketer
                    Sachin Tendulkar
                    <i>( Social News Daily )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://x.com/cliQIndiaMedia/status/1761723830492672449"
                  rel="noreferrer"
                >
                  <span>
                    45. At the occasion of the first-ever auction of the Indian
                    Street Premier League (ISPL), Former #Indian Cricketer
                    #SachinTendulkar
                    <i>( cliQ India )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://x.com/TelanganaToday/status/1761963047332016483"
                  rel="noreferrer"
                >
                  <span>
                    46. #SachinTendulkar reflects on his #cricket journey from
                    the streets to stadiums worldwide during the inaugural
                    #IndianStreetPremierLea gue auction.
                    <i>( Telangana Today )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://twitter.com/search?q=ISPL&src=typed_query&f=top"
                  rel="noreferrer"
                >
                  <span>
                    47. Two talented duo caught in the same frame! Saif Ali Khan
                    and Sachin Tendulkar clicked at the ISPL action!
                    <i>( Urban Asian )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.amarujala.com/video/entertainment/bollywood/ispl-auction-saif-ali-khan-and-abhishek-bachchan-said-this-2024-02-25"
                  rel="noreferrer"
                >
                  <span>
                    48. ISPL Auction: Saif Ali Khan And Abhishek Bachchan Said
                    This
                    <i>( Amar Ujala )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/watch?v=U5x3i7CWVI8"
                  rel="noreferrer"
                >
                  <span>
                    49. ISPL के AUCTION मैं हकसके उपर िादा बोली लगी 😱 27 Lakh
                    😱
                    <i>( PLD Sports )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/watch?v=gwtH849yyb4"
                  rel="noreferrer"
                >
                  <span>
                    50. Saif Ali Khan Co Owner Tiger Of Kolkata At Press Meet Of
                    The First Ever Auction Of Ispl
                    <i>( MS Shorts )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/watch?v=xZQsW6L_pTA"
                  rel="noreferrer"
                >
                  <span>
                    51. LIVE : टेहनस हिके ट ISPL कौनसेखिलाडी को हकतना पैसा हमला
                    ? ISPL UPDATE TENNIS CRICKET
                    <i>( Bhiwandi Cricket TV )</i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/watch?v=VJOxTJqZxFo"
                  rel="noreferrer"
                >
                  <span>
                    52. Nawab Saif Ali Khan Arrived at Auction Ceremony of The
                    Indian Premier League 🤩 #saifalikhan #ispl
                    <i>( Mirchi Plus )</i>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsPages;
