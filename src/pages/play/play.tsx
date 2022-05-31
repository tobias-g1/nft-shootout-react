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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            atque consectetur, ipsa voluptas ab, itaque perspiciatis placeat vel
            eum maxime soluta nemo, aut sapiente praesentium animi illum. Sed,
            sapiente inventore.
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
