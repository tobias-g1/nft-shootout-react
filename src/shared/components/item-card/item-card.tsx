import "./item-card.scss";
import { Dropdown, Image, Menu, Tooltip } from "antd";
import fallback from "../../../assets/img/fallback.svg";
import { useRef } from "react";
import { Item } from "../../models/item";
import ListForSaleModal from "../listing-modal/listing-modal";
import { useWeb3React } from "@web3-react/core";
import CancelListingModal from "../cancel-listing-modal/cancel-listing-modal";
import { Link } from "react-router-dom";
import shoo from "../../../assets/img/shoo.png";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BuyModal from "../buy-modal/buy-modal";
import ChangePriceModal from "../change-price-modal/change-price-modal";

type Props = {
  item: Item;
};

function ItemCardComponent(props: Props) {
  const fref: any = useRef();
  const bref: any = useRef();
  const cref: any = useRef();
  const chref: any = useRef();
  const { account } = useWeb3React();

  const handleListingModal = (e: any) => {
    fref.current.toggleModal();
  };

  const handleCancelModal = (e: any) => {
    cref.current.toggleModal();
  };

  const handleBuyModal = (e: any) => {
    bref.current.toggleModal();
  };

  const handleChangePrice = (e: any) => {
    chref.current.toggleModal();
  };

  const menu = (
    <Menu>
      
        <Menu.Item key="5">
          <Link to={getLink()}><span onClick={handleListingModal}>View Item</span></Link>
        </Menu.Item>
      
      {!props.item.forSale && account === props.item.owner ? (
        <Menu.Item key="1">
          <span onClick={handleListingModal}>List for Sale</span>
        </Menu.Item>
      ) : null}

      {props.item.forSale && account !== props.item.owner ? (
        <Menu.Item key="2">
          <span onClick={handleBuyModal}>Quick Buy</span>
        </Menu.Item>
      ) : null}

      {props.item.forSale && account === props.item.owner ? (
        <Menu.Item key="3">
          <span onClick={handleChangePrice}>Change Price</span>
        </Menu.Item>
      ) : null}

      {props.item.forSale && account === props.item.owner ? (
        <Menu.Item key="4">
          <span onClick={handleCancelModal}>Cancel Listing</span>
        </Menu.Item>
      ) : null}

    </Menu>
  );

  function getLink() {
    return "/item/" + props.item.tokenAddress + "/" + props.item.tokenId;
  }

  function formatBalance(balance: string) {
    return new Intl.NumberFormat("en-GB", {
      notation: "compact",
      minimumFractionDigits: 2,
    }).format(parseFloat(balance));
  }

  return (
    <>
      <div className="listing-card">
        <div className="image-wrapper">
          <div className="menu-wrapper">
            <Dropdown overlay={menu} trigger={["click"]}>
              <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
            </Dropdown>
          </div>
          <Link to={getLink()}>
            <Image
              src={!props.item.imageUrl ? "" : props.item.imageUrl}
              fallback={fallback}
            ></Image>
          </Link>
        </div>
        <div className="footer">
          <div>
            <h3>#{props.item.tokenId}</h3>
          </div>
          <div className="right">
            {props.item.forSale ? (
              <Tooltip title={props.item.price}>
                {" "}
                <div className="price-chip">
                  <img src={shoo} alt="" />
                  <span>{formatBalance(props.item.price)}</span>
                </div>{" "}
              </Tooltip>
            ) : null}
          </div>
        </div>
      </div>
      <ListForSaleModal item={props.item} ref={fref}></ListForSaleModal>
      <CancelListingModal item={props.item} ref={cref}></CancelListingModal>
      <BuyModal item={props.item} ref={bref}></BuyModal>
      <ChangePriceModal item={props.item} ref={chref}></ChangePriceModal>
    </>
  );
}

export default ItemCardComponent;
