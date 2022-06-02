import "./image-viewer.scss";
import fallback from "../../../../assets/img/fallback.svg";
import { Button, Dropdown, Image, Menu } from "antd";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWeb3React } from "@web3-react/core";
import { useRef } from "react";
import BuyModal from "../../../../shared/components/buy-modal/buy-modal";
import CancelListingModal from "../../../../shared/components/cancel-listing-modal/cancel-listing-modal";
import ChangePriceModal from "../../../../shared/components/change-price-modal/change-price-modal";
import ListForSaleModal from "../../../../shared/components/listing-modal/listing-modal";
import FormattingService from "../../../../core/services/formatting.service";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function ImageViewerComponent(props: any) {
  
  const fref: any = useRef();
  const bref: any = useRef();
  const cref: any = useRef();
  const chref: any = useRef();
  let { account } = useWeb3React();

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

  account = (account?account:'').toLowerCase();
  let owner = (props.item.owner?props.item.owner:'').toLowerCase();

  console.log(account)
  console.log(owner)
  console.log(props.item)

  const menu = (
    <Menu>
      {props.item.forSale && account === owner ? (
        <Menu.Item key="3">
          <span onClick={handleChangePrice}>Change Price</span>
        </Menu.Item>
      ) : null}
    </Menu>
  );

  function getButton() {
    if (props.item.forSale && account === owner) {
      return (
        <Button type="default" size="large" onClick={handleCancelModal}>
          Cancel Listing
        </Button>
      );
    }
    if (props.item && !props.item.forSale && account === owner) {
      return (
        <Button type="primary" size="large" onClick={handleListingModal}>
          List for Sale
        </Button>
      );
    }
    console.log(props.item.forSale && (account !== owner))
    if (props.item.forSale && (account !== owner)) {
      return (
        <Button type="primary" size="large" onClick={handleBuyModal}>
          Buy
        </Button>
      );
    }
  }

  return (
    <div className="item-image-wrapper">
      <Image
        preview={false}
        src={props.item && !props.item.image ? "" : props.item.image}
        fallback={fallback}
      ></Image>
      <div className="image-footer">
        <div className="price">
          <span className="price-label">Price</span>
          <span className="price-detail">
            {props.item &&props.item.forSale ? FormattingService.formatBalance(props.item.listPrice) : "Unlisted"}
          </span>
        </div>
        <div className="menu-wrapper">
          {getButton()}
          {props.item && props.item.forSale && account ? (
            <Dropdown overlay={menu} trigger={["click"]}>
              <FontAwesomeIcon icon={faEllipsisVertical as IconProp}></FontAwesomeIcon>
            </Dropdown>
          ) : null}
        </div>
      </div>
      <ListForSaleModal item={props.item} ref={fref}></ListForSaleModal>
      <CancelListingModal item={props.item} ref={cref}></CancelListingModal>
      <BuyModal item={props.item} ref={bref}></BuyModal>
      <ChangePriceModal item={props.item} ref={chref}></ChangePriceModal>
    </div>
  );
}

export default ImageViewerComponent;
