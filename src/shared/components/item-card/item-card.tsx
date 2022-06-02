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
import Web3 from "web3";
import FormattingService from "../../../core/services/formatting.service";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


const web3 = new Web3(process.env.REACT_APP_RPC_URL);
web3.eth.setProvider(Web3.givenProvider);

function ItemCardComponent(props: any) {
  const fref: any = useRef();
  const bref: any = useRef();
  const cref: any = useRef();
  const chref: any = useRef();

  const { account } = useWeb3React();

  function requestRefresh() {
    props.requestRefresh();
  }

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
      
      {props.item && !props.item.forSale && account && account.toLowerCase() === props.item.owner.toLowerCase() ? (
        <Menu.Item key="1">
          <span onClick={handleListingModal}>List for Sale</span>
        </Menu.Item>
      ) : null}

      {props.item && props.item.forSale && account &&  account.toLowerCase() !== props.item.owner.toLowerCase() ? (
        <Menu.Item key="2">
          <span onClick={handleBuyModal}>Quick Buy</span>
        </Menu.Item>
      ) : null}

      {props.item && props.item.forSale && account && account.toLowerCase() === props.item.owner.toLowerCase() ? (
        <Menu.Item key="3">
          <span onClick={handleChangePrice}>Change Price</span>
        </Menu.Item>
      ) : null}

      {props.item && props.item.forSale && account && account.toLowerCase() === props.item.owner.toLowerCase() ? (
        <Menu.Item key="4">
          <span onClick={handleCancelModal}>Cancel Listing</span>
        </Menu.Item>
      ) : null}

    </Menu>
  );

  function getLink() {
    return "/item/" + props.item.collectionAddress + "/" + props.item.tokenId;
  }

  return (
    <>
      <div className="listing-card">
        <div className="image-wrapper">
          <div className="menu-wrapper">
            { account ? <Dropdown overlay={menu} trigger={["click"]}>
              <FontAwesomeIcon icon={faEllipsisVertical as IconProp}></FontAwesomeIcon>
            </Dropdown> : null}
          </div>
          <Link to={getLink()}>
            <Image preview={false}
              src={!props.item.image ? "" : props.item.image}
            ></Image>
          </Link>
        </div>
        <div className="footer">
          <div>
            <h3>#{props.item.tokenId}</h3>
          </div>
          <div className="right">
            {props.item.forSale ? (
              <Tooltip title={props.item.listPrice}>
                {" "}
                <div className="price-chip">
                  <img src={shoo} alt="" />
                  <span>{FormattingService.formatBalance(props.item.listPrice)}</span>
                </div>{" "}
              </Tooltip>
            ) : null }
          </div>
        </div>
      </div>
      <ListForSaleModal requestRefresh={v => requestRefresh()} item={props.item} ref={fref}></ListForSaleModal>
      <CancelListingModal requestRefresh={v => requestRefresh()} item={props.item} ref={cref}></CancelListingModal>
      <BuyModal  requestRefresh={v => requestRefresh()}item={props.item} ref={bref}></BuyModal>
      <ChangePriceModal  requestRefresh={v => requestRefresh()} item={props.item} ref={chref}></ChangePriceModal>
    </>
  );
}

export default ItemCardComponent;
