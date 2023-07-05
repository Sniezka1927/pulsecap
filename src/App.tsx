import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import AccountPage from "./pages/Account";
import CoinDetailsPage from "./pages/CoinDetails";
import CookiePreferencesPage from "./pages/CookiePreferences";
import DisclaimerPage from "./pages/Disclaimer";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsOfUsePage from "./pages/TermsOfUse";
import MissingPage from "./pages/MissingPage";

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
        <Route path="/coin/:token" element={<CoinDetailsPage />}></Route>
        <Route path="/cookie" element={<CookiePreferencesPage />}></Route>
        <Route path="/disclaimer" element={<DisclaimerPage />}></Route>
        <Route path="/privacy" element={<PrivacyPolicyPage />}></Route>
        <Route path="/terms" element={<TermsOfUsePage />}></Route>
        <Route path="*" element={<MissingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
