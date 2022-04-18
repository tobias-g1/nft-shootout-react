import "./listing-card.scss";
import { Menu, Dropdown, Image } from "antd";
import { ListedItem } from "../../models/listed-item.model";
import fallback from "../../../assets/img/fallback.png"

function ListingCardComponent(props: any) {

  return (
      <div className="listing-card">
        <div className="header">
          <h3>#{props.listing.tokenId}</h3>
        </div>
        <Image src={!props.listing.imageUrl ? '' : props.listing.imageUrl } fallback={fallback}></Image>
      </div>
  );
}

export default ListingCardComponent;
