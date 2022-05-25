import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import { InfoMessage } from "../../../../shared/models/info-message.model";

function PlayersForStorePageComponent(props: any) {
  const infoMessage: InfoMessage = {
    header: "No Player Packs Available",
    description:
    "All our player packs are currently sold out, please visit our marketplace to find new players to expand your team.",
    link: "/marketplace",
    buttonText: "Visit our Marketplace",
  };

  return (
    <ContentStatusMessageComponent
      header={infoMessage.header}
      description={infoMessage.description}
      link={infoMessage.link}
      buttonText={infoMessage.buttonText}
    ></ContentStatusMessageComponent>
  );
}

export default PlayersForStorePageComponent;
