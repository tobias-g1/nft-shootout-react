import PageHeaderComponent from "../../shared/components/page-header/page-header";
import "./play.scss";
import DocumentMeta from "react-document-meta";
import { Content } from "antd/lib/layout/layout";
import gameplay from "../../assets/img/gp1.jpeg";
import windows from "../../assets/img/windows-badge.svg";
import google from "../../assets/img/google-play-badge.svg";
import ios from "../../assets/img/app-store-badge.svg";

function PlayPageComponent(props: any) {
  const title: string = "Play";
  const description: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse";
  const meta: any = {
    title,
    description: "TBA",
    meta: {},
  };

  return (
    <div
      className="play page-wrapper"
      style={{ backgroundImage: "url(/assets/img/background.jpeg)" }}
    >
      <DocumentMeta {...meta} />
      <PageHeaderComponent header={title}/>
      <Content>
        <div className="play-wrapper">
          <img className="game" src={gameplay} alt="" />
          <h1 className="mb-10">Get started with NFTShootout</h1>
          <p>
          NFT Shootout is a turn-based Penalty Shootout strategy system, where you put your player NFTs up against other gamer's player NFTs in a live game. Choose from the options below to select installation relevant to your device.
          </p>
          <div className="download-options">
            <img src={windows} alt="" />
            <img src={ios} alt="" />
            <img src={google} alt="" />
          </div>
        </div>
      </Content>
    </div>
  );
}

export default PlayPageComponent;
