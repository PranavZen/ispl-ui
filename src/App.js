import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
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
import NewsPages from "./pages/newspage/NewsPages";
import Announcement from "./pages/newspage/Announcement";
import RegistrationPage from "./pages/registration/RegistrationPage";
import TeamDetails from "./pages/matchTeamDetails/TeamDetails";
import Contact from "./pages/contactpage/Contact";
import About from "./pages/aboutpage/About";
import Login from "./pages/loginpage/Login";
import ForgetPassword from "./pages/forgetpasswordpage/ForgetPassword";
import IsplPage from "./pages/isplpage/IsplPage";
import DashboardForm from "./pages/dashboardsessiontwo/DashboardForm";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GlodenPage from "./pages/GlodenPage";
import { whtspIcon } from "./assets/imagePath";
import Error404 from "./pages/Error404";
import RegistrationCamp from "./pages/registrationcamp/RegistrationCamp";
import "bootstrap/dist/css/bootstrap.min.css";
import TrialFormation from "./pages/trialformation/TrialFormation";
import GoldenTicketDownload from "./pages/GoldenTicketDownload";
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
            path="/GoldenTicketDownload"
            element={<GoldenTicketDownload />}
          />
          <Route
            path="/team-list/falcon-risers-hyderabad"
            element={<FalconRisersHyderabad />}
          />
          <Route path="/matches" element={<Match />} />
          <Route path="/matches/match-center/:id" element={<TeamDetails />} />
          <Route path="/video/:category_names" element={<AllVideos />} />
          <Route path="/news/all-news" element={<NewsPages />} />
          <Route path="/news/announcement" element={<Announcement />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/registration-camp" element={<RegistrationCamp />} />
          <Route path="/ispl-page" element={<IsplPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/trial-dates" element={<TrialFormation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/dashboard-session-2" element={<DashboardForm />} />
          <Route path="/password/reset" element={<ForgetPassword />} />
          <Route path="/terms-condition" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/dashboard-golden-page" element={<GlodenPage />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/Error404" />} />
        </Routes>
        <Footer />
        <Link
          to="https://wa.me/918097323666"
          className="floatIcon"
          target="_blank"
        >
          <span>
            <img
              src={whtspIcon}
              alt="ISPL Whatsapp Chat"
              className="img-fluid whtspIco"
              width={65}
              height={65}
            />
          </span>
        </Link>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
