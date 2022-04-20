import "./cancel-listing-modal.scss";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Form, Input, Modal, Button, Image, notification } from "antd";
import { Item } from "../../models/item";
import fallback from "../../../assets/img/fallback.svg"
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import {marketplaceAbi} from "../../abi/marketplace.abi"

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

  const marketPlaceContract = new web3.eth.Contract(marketplaceAbi, process.env.REACT_APP_MARKETPLACE_ADDRESS);
  
  const cancelListing = () => {

    setIsLoading(true)

    marketPlaceContract.methods.cancelAskOrder(props.item.tokenAddress, props.item.tokenId).send({from: account })
    .on('error', function(error){
      setIsLoading(false)
      openNotificationWithIcon('error', 'Error', "We we're unable to cancel your listing, please try again later.")
    })
    .on('confirmation', function(confirmationNumber, receipt){
      setIsLoading(false);
      setCancelListingModalVisible(false);
      if (confirmationNumber === 0) {
        openNotificationWithIcon('success', 'Your listing has been cancelled successfully', 'Your NFT is now be available within your wallet to play')
      }
    })
  };

  const openNotificationWithIcon = (type: string, title: string, text: string) => {
    notification[type]({
      message: title,
      description: text
    });
  };

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
         <Button type="primary" className="cancel" size="large" loading={isLoading} onClick={cancelListing}>Cancel Listing</Button>
         </Modal>
    </>
  );
}

export default forwardRef(CancelListingModal);
