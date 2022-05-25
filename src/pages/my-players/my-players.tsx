import { Content } from "antd/lib/layout/layout";
import PageHeaderComponent from "../../shared/components/page-header/page-header";
import "./my-players.scss";
import DocumentMeta from "react-document-meta";
import { NavLink, Outlet } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";

function MyPlayersPageComponent(props: any) {
  const title: string = "My Players";
  const description: string =
    "View your players and expand your team to earn prizes in NFT Shootout.";
  const meta: any = {
    title,
    description: "TBA",
    meta: {},
  };
  const { account } = useWeb3React()

  return (
    <div
      className="my-players page-wrapper"
      style={{ backgroundImage: "url(/assets/img/background.jpeg)" }}
    >
      <DocumentMeta {...meta} />
      <PageHeaderComponent header={title} description={description} />
      <Content>
        {
          (account) ? <div className="tab-row">
          <div className="selector">
            <NavLink to="playable" className={(navData) => (navData.isActive ? 'selected' : '')}>
              <div className="option">
                <span>Playable</span>
              </div>
            </NavLink>
            <NavLink to="for-sale" className={(navData) => (navData.isActive ? 'selected' : '')}>
              <div className="option">
                <span>For Sale</span>
              </div>
            </NavLink>
          </div>
        </div> : null
        }
        <Outlet />
      </Content>
    </div>
  );
}

export default MyPlayersPageComponent;
