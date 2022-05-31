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
import { HelmetProvider } from "react-helmet-async";
import ForSalePlayersPageComponent from "./pages/my-players/child-pages/for-sale/for-sale";
import UnlistedPlayersPageComponent from "./pages/my-players/child-pages/unlisted/unlisted";
import PlayersForSalePageComponent from "./pages/marketplace/child-pages/players/players";
import StadiumsForSalePageComponent from "./pages/marketplace/child-pages/stadiums/stadiums";
import YouthScoutsForSalePageComponent from "./pages/marketplace/child-pages/youth-scouts/youth-scouts";
import PlayersForStorePageComponent from "./pages/store/child-pages/players/players";
import StadiumsForStorePageComponent from "./pages/store/child-pages/stadiums/stadiums";
import YouthScoutsForStorePageComponent from "./pages/store/child-pages/youth-scouts/youth-scouts";
import OpenPageComponent from "./pages/open/open";
import ItemPageComponent from "./pages/listed-item/item";
import PrivateRoute from "./shared/components/private-route/private-route";
import UnauthenticatedPageComponent from "./pages/unauthenticated/unathenticated";
import OpenPacksPageComponent from "./pages/open/children/packs/packs";

function getLibrary(provider: any) {
  return new Web3(provider);
}

const App: FC = () => (
  <HelmetProvider>
    <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Router>
            <HeaderComponent></HeaderComponent>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Navigate to="/marketplace" />} />
              <Route path="/play" element={<PlayPageComponent />} />
              <Route path="/open" element={<OpenPageComponent />}>
                <Route path="packs" element={<PrivateRoute><OpenPacksPageComponent /></PrivateRoute>} />
                <Route path="login" element={<UnauthenticatedPageComponent />} />
                <Route path="*" element={<Navigate to="/open" replace />} />
                <Route index element={<Navigate to="/open/packs" />} />
              </Route>
              <Route path="/store" element={<StorePageComponent />}>
                <Route path="players" element={<PlayersForStorePageComponent />} />
                <Route path="stadiums" element={<StadiumsForStorePageComponent/>} />
                <Route path="youth-scouts" element={<YouthScoutsForStorePageComponent/>} />
                <Route path="*" element={<Navigate to="/store" replace />} />
                <Route index element={<Navigate to="/store/players" />} />
              </Route>
              <Route path="/item/:collectionAddress/:tokenId" element={<ItemPageComponent />}></Route>
              <Route path="/marketplace" element={<MarketplacePageComponent />}>
                <Route path="players" element={<PlayersForSalePageComponent />} />
                <Route path="stadiums" element={<StadiumsForSalePageComponent />} />
                <Route path="youth-scouts" element={<YouthScoutsForSalePageComponent />} />
                <Route path="*" element={<Navigate to="/marketplace" replace />} />
                <Route index element={<Navigate to="/marketplace/players" />} />
              </Route>
              <Route path="my-players" element={<MyPlayersPageComponent />}>
                <Route path="playable" element={<PrivateRoute><UnlistedPlayersPageComponent/></PrivateRoute>} />
                <Route path="for-sale" element={<PrivateRoute><ForSalePlayersPageComponent /></PrivateRoute>} />
                <Route path="login" element={<UnauthenticatedPageComponent />} />
                <Route path="*" element={<Navigate to="/my-players" replace />} />
                <Route index element={<Navigate to="/my-players/playable" />} />
              </Route>
              <Route path="/cookies" element={<CookiesPageComponent />} />
              <Route path="/terms" element={<TermsPageComponent />} />
              <Route path="/privacy" element={<PrivacyPageComponent />} />
              <Route path="*" element={<NotFoundPageComponent />} />
            </Routes>
            <FooterComponent />
          </Router>
        </Layout>
    </Web3ReactProvider>
  </HelmetProvider>
);

export default App;
