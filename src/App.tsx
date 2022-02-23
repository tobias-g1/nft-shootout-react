import React, { FC } from "react";
import "./App.scss";
import HeaderComponent from "./core/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPageComponent from "./pages/not-found/not-found";
import MyPlayersPageComponent from "./pages/my-players/my-players";
import Layout from "antd/lib/layout/layout";
import ScrollToTop from "./shared/utilities/scroll";
import FooterComponent from "./core/footer/footer";
import MarketplacePageComponent from "./pages/marketplace/marketplace";
import StorePageComponent from "./pages/store/store";
import PlayPageComponent from "./pages/play/play";
import CookiesPageComponent from "./pages/cookies/cookies";
import TermsPageComponent from "./pages/terms/terms";
import PrivacyPageComponent from "./pages/privacy/privacy";

const App: FC = () => (
  <div className="App">
    <Layout>
      <Router>
        <HeaderComponent></HeaderComponent>
        <ScrollToTop />
        <Routes>
          <Route path='/play' element={<PlayPageComponent />} />
          <Route path="/store" element={<StorePageComponent />} />
          <Route path='/marketplace' element={<MarketplacePageComponent />} />
          <Route path="/my-players" element={<MyPlayersPageComponent />} />
          <Route path="/cookies" element={<CookiesPageComponent />} />
          <Route path="/terms" element={<TermsPageComponent />} />
          <Route path="/privacy" element={<PrivacyPageComponent />} />
          <Route path='*' element={<NotFoundPageComponent />} />
        </Routes>
      </Router>
      <FooterComponent />
    </Layout>
  </div>
);

export default App;
