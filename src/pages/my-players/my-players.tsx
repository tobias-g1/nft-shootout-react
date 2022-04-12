import { Content } from "antd/lib/layout/layout";
import InfoMessageComponent from "../../shared/components/info-message/info-message";
import PageHeaderComponent from "../../shared/components/page-header/page-header";
import { Row, Col } from "antd";
import "./my-players.scss";
import DocumentMeta from "react-document-meta";
import { InfoMessage } from "../../shared/models/info-message.model";
import { Link, NavLink, Outlet } from "react-router-dom";

function MyPlayersPageComponent(props: any) {
  const title: string = "My Players";
  const description: string =
    "View your players and expand your team to earn prizes in NFT Shootout.";
  const meta: any = {
    title,
    description: "TBA",
    meta: {},
  };

  return (
    <div
      className="my-players page-wrapper"
      style={{ backgroundImage: "url(/assets/img/background.png)" }}
    >
      <DocumentMeta {...meta} />
      <PageHeaderComponent header={title} description={description} />
      <Content>
        <div className="tab-row">
          <div className="selector">
            <NavLink to="all" className={(navData) => (navData.isActive ? 'selected' : '')}>
              <div className="option" >
                <span>All</span>
              </div>
            </NavLink>
            <NavLink to="unlisted" className={(navData) => (navData.isActive ? 'selected' : '')}>
              <div className="option">
                <span>Unlisted</span>
              </div>
            </NavLink>
            <NavLink to="for-sale" className={(navData) => (navData.isActive ? 'selected' : '')}>
              <div className="option">
                <span>For Sale</span>
              </div>
            </NavLink>
          </div>
        </div>
        <Outlet />
      </Content>
    </div>
  );
}

export default MyPlayersPageComponent;
