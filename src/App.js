import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Homepage/Index";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RiskStatement from "./components/RiskStatement";
import TermsOfConditions from "./components/TermsOfConditions";
import AboutUs from "./components/AboutUs";
import Favourites from "./components/Favourites";
import Discover from "./components/Discover";
import DetailPage from "./components/DetailPage";
import SubmitTool from "./components/SubmitTool";
import SubmitNews from "./components/SubmitNews";
import NewsLetter from "./components/NewsLetter";
import LatestAiNews from "./components/LatestAiNews";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<Index />} />
        <Route exact path={"/about"} element={<AboutUs />} />
        <Route exact path={"/latest-ai-news"} element={<LatestAiNews />} />
        <Route exact path={"/favourites"} element={<Favourites />} />
        <Route exact path={"/discover"} element={<Discover />} />
        <Route exact path={"/detail"} element={<DetailPage />} />
        <Route exact path={"/submit-tool"} element={<SubmitTool />} />
        <Route exact path={"/submit-news"} element={<SubmitNews />} />
		<Route exact path={"/terms"} element={<TermsOfConditions />} />
		<Route exact path={"/news-letter"} element={<NewsLetter />} />
		<Route exact path={"/latest-ai-news"} element={<LatestAiNews />} />
        <Route path="*" exact={true} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
