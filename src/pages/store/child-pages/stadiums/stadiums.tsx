import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import { InfoMessage } from "../../../../shared/models/info-message.model";

function StadiumsForStorePageComponent(props: any) {
  
    const infoMessage: InfoMessage = {
      header: "Stadiums are coming soon",
      description:"Owners of stadiums will earn passive income from all winning games played on their stadium. We will be minting stadiums roughly at a rate of 1 stadium to 100 players to ensure all stadium owners earn good passive income. Stadium owners will also earn a share in any future advertising revenue from banners placed inside their stadiums. To own a stadium, you must stake shoo token for at least 6 months up to 12 months. All staked tokens are fully refundable including all reflections earned during that time. Ideal for holders that want to earn passive income at the same time. Stadium owners are free to sell their stadium for a profit on the marketplace anytime even if its staked. In the meantime, you can visit our store to find players to expand your team.",
      link: "/marketplace",
      buttonText: "Visit our Marketplace",
  };
  
    return (
      <ContentStatusMessageComponent header={infoMessage.header} description={infoMessage.description} link={infoMessage.link} buttonText={infoMessage.buttonText}></ContentStatusMessageComponent>
    );
}

export default StadiumsForStorePageComponent;
