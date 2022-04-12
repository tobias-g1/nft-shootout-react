import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import { InfoMessage } from "../../../../shared/models/info-message.model";

function PlayersForSalePageComponent(props: any) {
  let players: string[] = [];
  const infoMessage: InfoMessage = {
    header: "No Players for Sale",
    description:
        "There aren't any players for sale at the moment, checkout our store to purchase player packs to expand your team.",
    link: "/store",
    buttonText: "Visit our Store",
};

  return (
    <div>
      {players.length < 0 ?
      <div> </div>
      :
    <ContentStatusMessageComponent header={infoMessage.header} description={infoMessage.description} link={infoMessage.link} buttonText={infoMessage.buttonText}></ContentStatusMessageComponent>
      }
    </div>
  );
}

export default PlayersForSalePageComponent;
