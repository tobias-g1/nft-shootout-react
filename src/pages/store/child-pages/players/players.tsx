import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import { InfoMessage } from "../../../../shared/models/info-message.model";

function PlayersForStorePageComponent(props: any) {
  const infoMessage: InfoMessage = {
    header: "No Player Packs Available",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis.",
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
