import "./item-card.scss";
import { Image, Menu } from "antd";
import fallback from "../../../assets/img/fallback.png"
import { useRef } from "react";
import { Item } from "../../models/item";
import ListForSaleModal from "../listing-modal/listing-modal";

type Props = {
  item: Item;
};


function ItemCardComponent(props: Props) {

  const fref: any = useRef();

  const handleClick = (e: any) => {
    fref.current.toggleModal();
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#" onClick={handleClick}>
          List for Sale
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="listing-card">
        <div className="header">
          <h3>#{props.item.tokenId}</h3>
        </div>
        <Image src={!props.item.imageUrl ? '' : props.item.imageUrl } fallback={fallback}></Image>
      </div>
      <ListForSaleModal ref={fref}></ListForSaleModal>
    </>
  );
}

export default ItemCardComponent;
