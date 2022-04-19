import "./cancel-listing-modal.scss";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Form, Input, Modal, Button, Image } from "antd";
import { Item } from "../../models/item";
import fallback from "../../../assets/img/fallback.svg"
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import {marketplaceAbi} from "../../abi/marketplace.abi"

type Props = {
  item: Item;
};

const rpcURL = "https://bsc-dataseed.binance.org/";
const web3 = new Web3(rpcURL);

function CancelListingModal(props: Props, ref: any) {

  const { account } = useWeb3React()
  const [isCancelListingModalVisible, setCancelListingModalVisible] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      toggleModal() {
        setCancelListingModalVisible(!isCancelListingModalVisible);
      },
    }),
    []
  );

  const handleOk = () => {
    setCancelListingModalVisible(!isCancelListingModalVisible);
  };

  const handleCancel = () => {
    setCancelListingModalVisible(!isCancelListingModalVisible);
  };

  web3.eth.setProvider(Web3.givenProvider);

  const contract = new web3.eth.Contract(marketplaceAbi, props.item.tokenAddress);
  
   const cancelListing = async () => {
  
  }

  return (
    <>
      <Modal
        visible={isCancelListingModalVisible}
        title='Cancel Listing'
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
       <div className="modal-wrapper">
         <div className="image-wrap">
         <Image src={!props.item.imageUrl ? '' : props.item.imageUrl } fallback={fallback}></Image>
         </div>
       <div>
         <p>Cancel your listing...</p>
       </div>
       </div>
         <Button type="primary" className="cancel" size="large" onClick={cancelListing}>Cancel Listing</Button>
         </Modal>
    </>
  );
}

export default forwardRef(CancelListingModal);
