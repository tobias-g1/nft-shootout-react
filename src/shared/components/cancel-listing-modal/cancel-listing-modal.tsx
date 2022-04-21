import "./cancel-listing-modal.scss";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Form, Input, Modal, Button, Image, notification } from "antd";
import { Item } from "../../models/item";
import fallback from "../../../assets/img/fallback.svg"
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import {marketplaceAbi} from "../../abi/marketplace.abi"
import NotificationService from "../../../core/services/notification.service";

type Props = {
  item: Item;
};

const web3 = new Web3(process.env.REACT_APP_RPC_URL);

function CancelListingModal(props: Props, ref: any) {

  const { account } = useWeb3React()
  const [isCancelListingModalVisible, setCancelListingModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      toggleModal() {
        setCancelListingModalVisible(!isCancelListingModalVisible)
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

  const marketPlaceContract = new web3.eth.Contract(marketplaceAbi, process.env.REACT_APP_MARKETPLACE_ADDRESS);
  
  const cancelListing = () => {

    setIsLoading(true)

    marketPlaceContract.methods.cancelAskOrder(props.item.tokenAddress, props.item.tokenId).send({from: account })
    .on('error', function(error){
      setIsLoading(false)
      NotificationService.sendNotification('error', 'Error', "We we're unable to cancel your listing, please try again later.")
    })
    .on('confirmation', function(confirmationNumber, receipt){
      setIsLoading(false);
      setCancelListingModalVisible(false);
      if (confirmationNumber === 0) {
        NotificationService.sendNotification('success', 'Your listing has been cancelled successfully', 'Your NFT is now be available within your wallet to play')
      }
    })
  };

  return (
    <>
      <Modal
        visible={isCancelListingModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
         <div className="action-modal">
         <Image className="mb-15" src={!props.item.imageUrl ? '' : props.item.imageUrl } fallback={fallback}></Image>
       <div className="contents">
         <h2 className="mb-15">Cancel listing for #{props.item.tokenId}</h2>
         <p>List your NFT for sale in our marketplace. Upon listing of this NFT, this
          NFT will be removed from your wallet and put on sale at the price
          entered above.</p>
       </div>
       </div>
        <Button loading={isLoading} className="modal-button" type="primary" size="large" onClick={cancelListing}>Cancel Listing</Button>
         </Modal>
    </>
  );
}

export default forwardRef(CancelListingModal);
