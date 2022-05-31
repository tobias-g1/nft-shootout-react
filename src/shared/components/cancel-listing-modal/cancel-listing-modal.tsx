import "./cancel-listing-modal.scss";
import { forwardRef, useImperativeHandle, useState } from "react";
import { Modal, Button, Image} from "antd";
import { Item } from "../../models/item";
import fallback from "../../../assets/img/fallback.svg"
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import {marketplaceAbi} from "../../abi/marketplace.abi"
import NotificationService from "../../../core/services/notification.service";


const web3 = new Web3(process.env.REACT_APP_RPC_URL);

function CancelListingModal(props: any, ref: any) {

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
    [setCancelListingModalVisible, isCancelListingModalVisible]
  );

  const handleOk = () => {
    setCancelListingModalVisible(!isCancelListingModalVisible);
  };

  const handleCancel = () => {
    setCancelListingModalVisible(!isCancelListingModalVisible);
  };

  web3.eth.setProvider(Web3.givenProvider);

  const marketPlaceContract = new web3.eth.Contract(marketplaceAbi, '0x65ead95f7161Efe9b11a444CCF31fDa358d01AB7');
  
  const cancelListing = () => {

    setIsLoading(true)

    marketPlaceContract.methods.cancelAskOrder(props.item.collectionAddress, props.item.tokenId).send({from: account })
    .on('error', function(error){
      setIsLoading(false)
      props.requestRefresh();
      NotificationService.sendNotification('error', 'Error', "We we're unable to cancel your listing, please try again later.")
    })
    .on('confirmation', function(confirmationNumber, receipt){
      setIsLoading(false);
      props.requestRefresh();
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
         <Image preview={false} className="mb-15" src={!props.item.image ? '' : props.item.image } fallback={fallback}></Image>
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
