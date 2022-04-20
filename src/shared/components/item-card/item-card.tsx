import "./item-card.scss";
import { Dropdown, Image, Menu, Tooltip } from "antd";
import fallback from "../../../assets/img/fallback.svg"
import { useRef } from "react";
import { Item } from "../../models/item";
import ListForSaleModal from "../listing-modal/listing-modal";
import { MoreOutlined } from "@ant-design/icons";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import CancelListingModal from "../cancel-listing-modal/cancel-listing-modal";
import { Link } from "react-router-dom";
import shoo from "../../../assets/img/shoo.png";
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  item: Item;
};

const rpcURL = "https://bsc-dataseed.binance.org/";
const web3 = new Web3(rpcURL);

function ItemCardComponent(props: Props) {

  const fref: any = useRef();
  const cref: any = useRef();
  const { account } = useWeb3React()
  const { price } = props.item;

  const handleListingModal = (e: any) => {
    fref.current.toggleModal();
  };

  const handleCancelModal = (e: any) => {
    cref.current.toggleModal();
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        {!props.item.forSale && account === props.item.owner ? <span onClick={handleListingModal}>
          List for Sale
        </span> : null}
        {props.item.forSale && account === props.item.owner ? <span onClick={handleCancelModal}>
          Cancel Listing
        </span> : null}
      </Menu.Item>
    </Menu>
  );

  function getLink() {
    return '/item/' + props.item.tokenAddress + '/' + props.item.tokenId
  }

  function formatBalance(balance: string) {
    return new Intl.NumberFormat('en-GB', { 
      notation: "compact",
      minimumFractionDigits: 2,
    }).format(parseFloat(balance));
  }

  return (
    <>
      <div className="listing-card">
        <div className="image-wrapper">
          <Dropdown overlay={menu} trigger={["click"]}>
            <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
          </Dropdown>
          <Link to={getLink()}><Image src={!props.item.imageUrl ? '' : props.item.imageUrl} fallback={fallback}></Image></Link>
        </div>
        <div className="footer">
          <div>
            <h3>#{props.item.tokenId}</h3>
          </div>
          <div className="right">
            {props.item.forSale ? <Tooltip title={props.item.price}> <div className="price-chip">
              <img src={shoo} alt="" />
              <span>{formatBalance(props.item.price)}</span>
            </div> </Tooltip>: null} 
          </div>
        </div>
      </div>
      <ListForSaleModal item={props.item} ref={fref}></ListForSaleModal>
      <CancelListingModal item={props.item} ref={cref}></CancelListingModal>
    </>
  );
}

export default ItemCardComponent;
