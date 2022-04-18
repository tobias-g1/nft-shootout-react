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

  const collectionAddress = "0x943f9a17aaa6eb0586187c2093c114ad7b8f2e16";

  return (
    <div>
      <ListingViewerComponent collectionAddress={collectionAddress} infoMessage={infoMessage}></ListingViewerComponent>
    </div>
  );
}

export default PlayersForSalePageComponent;
