import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import { InfoMessage } from "../../../../shared/models/info-message.model";

function StadiumsForSalePageComponent(props: any) {

  let stadiums: string[] = [];

  const infoMessage: InfoMessage = {
    header: "Stadiums are coming soon",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis.",
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
