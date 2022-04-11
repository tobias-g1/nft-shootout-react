import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { players } from "../../../../dummy-data";
import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import PlayerCardComponent from "../../../../shared/components/player-card/player-card";
import { InfoMessage } from "../../../../shared/models/info-message.model";
import { Player } from "../../../../shared/models/player.model";

function StadiumsForSalePageComponent(props: any) {

  let stadiums: string[] = [];
  const infoMessage: InfoMessage = {
    header: "No Stadiums for Sale",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis.",
    link: "/marketplace",
    buttonText: "Visit our Marketplace",
};

  return (
    <div>
      {stadiums.length < 0 ?
      <div> </div>
      :
    <ContentStatusMessageComponent header={infoMessage.header} description={infoMessage.description} link={infoMessage.link} buttonText={infoMessage.buttonText}></ContentStatusMessageComponent>
      }
    </div>
  );

}

export default StadiumsForSalePageComponent;
