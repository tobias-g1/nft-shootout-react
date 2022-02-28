import { FC } from "react";
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
import { Navigate } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { Helmet, HelmetProvider } from "react-helmet-async";

function getLibrary(provider: any) {
  return new Web3(provider);
}

const App: FC = () => (
  <HelmetProvider>
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Layout>
          <Router>
            <HeaderComponent></HeaderComponent>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Navigate to="/marketplace" />} />
              <Route path="/play" element={<PlayPageComponent />} />
              <Route path="/store" element={<StorePageComponent />} />
              <Route
                path="/marketplace"
                element={<MarketplacePageComponent />}
              />
              <Route path="/my-players" element={<MyPlayersPageComponent />} />
              <Route path="/cookies" element={<CookiesPageComponent />} />
              <Route path="/terms" element={<TermsPageComponent />} />
              <Route path="/privacy" element={<PrivacyPageComponent />} />
              <Route path="*" element={<NotFoundPageComponent />} />
            </Routes>
            <FooterComponent />
          </Router>
        </Layout>
      </div>
    </Web3ReactProvider>
  </HelmetProvider>
);

export default App;
