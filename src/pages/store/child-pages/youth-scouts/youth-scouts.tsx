import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import { InfoMessage } from "../../../../shared/models/info-message.model";

function YouthScoutsForStorePageComponent(props: any) {
  const infoMessage: InfoMessage = {
    header: "Youth Scouts are coming soon",
    description:
        "In order for new players to join the game, a youth scout and youth coach NFT cards are required. These cards allow you to “Train” new youth players and after 7 days of training the youth player becomes an adult and qualified to join the game. This means as a youth manager you can now sell your newly minted player NFT cards to list them on the marketplace. Just like axie the more you breed with the same cards the less valuable the players become. Our youth scout and coach cards can mint up to 52 new players per year or one player per week and you have an option to refresh your cards to ensure only quality players are trained. To mint new youth players, you must buy the in-game token to start the process. Minting new players is around a third cheaper than buying them direct off the marketplace. You are free to train and sell or train and loan to scholars.",
    link: "/marketplace",
    buttonText: "Visit our Marketplace",
};

  return (
    <ContentStatusMessageComponent header={infoMessage.header} description={infoMessage.description} link={infoMessage.link} buttonText={infoMessage.buttonText}></ContentStatusMessageComponent>
  );
}

export default YouthScoutsForStorePageComponent;
