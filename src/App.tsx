import React, { FC } from "react";
import "./App.scss";
import HeaderComponent from "./core/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPageComponent from "./pages/not-found/not-found";
import MyPlayersPageComponent from "./pages/my-players/my-players";
import Layout from "antd/lib/layout/layout";
import ScrollToTop from "./shared/utilities/scroll";
import FooterComponent from "./core/footer/footer";

const App: FC = () => (
  <div className="App">
    <Layout>
      <Router>
        <HeaderComponent></HeaderComponent>
        <ScrollToTop />
        <Routes>
          <Route path='*' element={<NotFoundPageComponent />} />
          <Route path="/my-players" element={<MyPlayersPageComponent />} />
        </Routes>
      </Router>
      <FooterComponent />
    </Layout>
  </div>
);

export default App;
