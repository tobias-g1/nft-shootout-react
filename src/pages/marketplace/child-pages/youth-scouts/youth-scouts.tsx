import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import { InfoMessage } from "../../../../shared/models/info-message.model";

function YouthScoutsForSalePageComponent(props: any) {

  let scouts: string[] = [];
  const infoMessage: InfoMessage = {
    header: "Youth Scouts are coming soon",
    description: 'Youth Scouts allow you to “Train” new youth players and "breed" new NFTs.',
    link: "/marketplace",
    buttonText: "Visit our Store",
};

  return (
    <div>
      {scouts.length < 0 ?
      <div>For sale </div>
      :
    <ContentStatusMessageComponent header={infoMessage.header} description={infoMessage.description} link={infoMessage.link} buttonText={infoMessage.buttonText}></ContentStatusMessageComponent>
      }
    </div>
  );
}

export default YouthScoutsForSalePageComponent;
