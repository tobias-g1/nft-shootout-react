import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import { InfoMessage } from "../../../../shared/models/info-message.model";

function StadiumsForSalePageComponent(props: any) {

  let stadiums: string[] = [];

  const infoMessage: InfoMessage = {
    header: "Stadiums are coming soon",
    description:
        "Stadiums earn passive income from all winning games played on their stadium. Another way to generate income on NFTShootout.",
    link: "/store",
    buttonText: "Visit our Store",
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
