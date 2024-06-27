import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ChennaiSingams from "./pages/teamlist/ChennaiSingams";
import TeamListPage from "./pages/teamlist/TeamListPage";
import MajhiMumbai from "./pages/teamlist/MajhiMumbai";
import TigersOfKolkata from "./pages/teamlist/TigersOfKolkata";
import SrinagarKeVeer from "./pages/teamlist/SrinagarKeVeer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BangaloreStrikers from "./pages/teamlist/BangaloreStrikers";
import FalconRisersHyderabad from "./pages/teamlist/FalconRisersHyderabad";
import Match from "./pages/matchespages/Match";
import AllVideos from "./pages/videos/AllVideos";
import LatestVideos from "./pages/videos/LatestVideos";
import HighlightsVideos from "./pages/videos/HighlightsVideos";
import AuctionVideos from "./pages/videos/AuctionVideos";
import MagicMoments from "./pages/videos/MagicMoments";
import Interviews from "./pages/videos/Interviews";
import NewsPages from "./pages/newspage/NewsPages";
import Announcement from "./pages/newspage/Announcement";
import RegistrationPage from "./pages/registration/RegistrationPage";
import TeamDetails from "./pages/matchTeamDetails/TeamDetails";
import Contact from "./pages/contactpage/Contact";
import About from "./pages/aboutpage/About";
import Login from "./pages/loginpage/Login";
import ForgetPassword from "./pages/forgetpasswordpage/ForgetPassword";
import IsplPage from "./pages/isplpage/IsplPage";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter forceRefresh={true}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team-list" element={<TeamListPage />} />
          <Route
            path="/team-list/chennai-singams"
            element={<ChennaiSingams />}
          />
          <Route path="/team-list/majhi-mumbai" element={<MajhiMumbai />} />
          <Route
            path="/team-list/tiigers-of-kolkata"
            element={<TigersOfKolkata />}
          />
          <Route
            path="/team-list/srinagar-ke-veer"
            element={<SrinagarKeVeer />}
          />
          <Route
            path="/team-list/kvn-bangalore-strikers"
            element={<BangaloreStrikers />}
          />
          <Route
            path="/team-list/falcon-risers-hyderabad"
            element={<FalconRisersHyderabad />}
          />
          <Route path="/matches" element={<Match />} />
          <Route path="/matches/matchNumber" element={<TeamDetails />} />
          <Route path="/video/All" element={<AllVideos />} />
          <Route path="/video/latest" element={<LatestVideos />} />
          <Route path="/video/highlights" element={<HighlightsVideos />} />
          <Route path="/video/auction" element={<AuctionVideos />} />
          <Route path="/video/magic-moments" element={<MagicMoments />} />
          <Route path="/video/interviews" element={<Interviews />} />
          <Route path="/news/all-news" element={<NewsPages />} />
          <Route path="/news/announcement" element={<Announcement />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/ispl-page" element={<IsplPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/password/reset" element={<ForgetPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
