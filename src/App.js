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

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter forceRefresh={true}>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team-list" element={<TeamListPage />} />
          <Route path="/team-list/chennai-singams" element={<ChennaiSingams />} />
          <Route path="/team-list/majhi-mumbai" element={<MajhiMumbai />} />
          <Route path="/team-list/tiigers-of-kolkata" element={<TigersOfKolkata />} />
          <Route path="/team-list/srinagar-ke-veer" element={<SrinagarKeVeer />} />
          <Route path="/team-list/kvn-bangalore-strikers" element={<BangaloreStrikers />} />
          <Route path="/team-list/falcon-risers-hyderabad" element={<FalconRisersHyderabad />} />
          <Route path="/matches" element={<Match />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
