import { InfoMessage } from "../../../../shared/models/info-message.model";
import ListingViewerComponent from "../../../../shared/components/listing-viewer/listing-viewer";

function PlayersForSalePageComponent(props: any) {

  const infoMessage: InfoMessage = {
    header: "No Players for Sale",
    description:
      "There aren't any players for sale at the moment, checkout our store to purchase player packs to expand your team.",
    link: "/store",
    buttonText: "Visit our Store",
  };

  return (
    <div>
      <ListingViewerComponent collectionAddress={process.env.REACT_APP_PLAYER_ADDRESS} infoMessage={infoMessage}></ListingViewerComponent>
    </div>
  );
}

export default PlayersForSalePageComponent;
