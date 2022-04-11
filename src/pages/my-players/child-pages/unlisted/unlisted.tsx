import { Content } from "antd/lib/layout/layout";
import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import { InfoMessage } from "../../../../shared/models/info-message.model";

function UnlistedPlayersPageComponent(props: any) {

  let players: string[] = [];
  const infoMessage: InfoMessage = {
    header: "You don't have any unlisted players",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis.",
    link: "/marketplace",
    buttonText: "Visit our Marketplace",
};

  return (
    <div>
      {players.length < 0 ?
      <div>hello</div>
      :
    <ContentStatusMessageComponent header={infoMessage.header} description={infoMessage.description} link={infoMessage.link} buttonText={infoMessage.buttonText}></ContentStatusMessageComponent>
      }
    </div>
  );

}

export default UnlistedPlayersPageComponent;
