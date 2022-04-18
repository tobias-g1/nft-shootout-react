import "./item-card.scss";
import { Dropdown, Image, Menu } from "antd";
import fallback from "../../../assets/img/fallback.png"
import { useRef } from "react";
import { Item } from "../../models/item";
import ListForSaleModal from "../listing-modal/listing-modal";
import { MoreOutlined } from "@ant-design/icons";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import CancelListingModal from "../cancel-listing-modal/cancel-listing-modal";

type Props = {
  item: Item;
};

const rpcURL = "https://bsc-dataseed.binance.org/";
const web3 = new Web3(rpcURL);

function ItemCardComponent(props: Props) {

  const fref: any = useRef();
  const cref: any = useRef();
  const { account } = useWeb3React()

  const handleListingModal = (e: any) => {
    fref.current.toggleModal();
  };

  const handleCancelModal = (e: any) => {
    cref.current.toggleModal();
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        { !props.item.forSale && account ===  props.item.owner ? <span onClick={handleListingModal}>
          List for Sale
        </span> : null } 
        { props.item.forSale && account ===  props.item.owner ? <span onClick={handleCancelModal}>
          Cancel Listing
        </span> : null } 
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="listing-card">
        <div className="header">
          <h3>#{props.item.tokenId}</h3>
          <Dropdown overlay={menu} trigger={["click"]}>
            <MoreOutlined className="menu-icon" />
          </Dropdown>
        </div>
        <Image src={!props.item.imageUrl ? '' : props.item.imageUrl } fallback={fallback}></Image>
      </div>
      <ListForSaleModal item={props.item} ref={fref}></ListForSaleModal>
      <CancelListingModal item={props.item} ref={cref}></CancelListingModal>
    </>
  );
}

export default ItemCardComponent;
