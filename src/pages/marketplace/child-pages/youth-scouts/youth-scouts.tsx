import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import { InfoMessage } from "../../../../shared/models/info-message.model";

function YouthScoutsForSalePageComponent(props: any) {

  let scouts: string[] = [];
  const infoMessage: InfoMessage = {
    header: "No Youth Scouts for Sale",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis.",
    link: "/marketplace",
    buttonText: "Visit our Marketplace",
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
