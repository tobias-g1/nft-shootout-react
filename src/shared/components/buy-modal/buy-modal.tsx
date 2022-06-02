import "./buy-modal.scss";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Form, Modal, Button, Image } from "antd";
import { Item } from "../../models/item";
import fallback from "../../../assets/img/player-cards/0034.png"
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { useLocation } from "react-router-dom";
import { marketplaceAbi } from "../../abi/marketplace.abi";
import axios from "axios";
import { tokenAbi } from "../../abi/token.abi";
import NotificationService from "../../../core/services/notification.service";
import FormattingService from "../../../core/services/formatting.service";

type Props = {
  item: Item;
};

const web3 = new Web3(process.env.REACT_APP_RPC_URL);

function BuyModal(props: any, ref: any) {

  const [isListingModalVisible, setListingModalVisible] = useState(false);
  const [isApproved, setApproval] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const [loadingApproved, setLoadingApproved] = useState(false);
  const [shooPrice, setShooPrice] = useState(0);
  const [form] = Form.useForm();
  const location = useLocation();
  const { account } = useWeb3React()

  useEffect(() => {
    checkForApproved();
  }, [location]);

  useImperativeHandle(
    ref,
    () => ({
      toggleModal() {
        setListingModalVisible(!isListingModalVisible);
      },
    }),
    []
  );

  const handleCancel = () => {
    setListingModalVisible(!isListingModalVisible);
  };

  const [price, setPrice] = useState(0);

  web3.eth.setProvider(Web3.givenProvider);

  const tokenContract = new web3.eth.Contract(tokenAbi, '0xcC046a8ba1f82B4FbB186f76e23E3DbEf297dA4c');
  const marketPlaceContract = new web3.eth.Contract(marketplaceAbi, '0x65ead95f7161Efe9b11a444CCF31fDa358d01AB7');

   const approveToken = async () => {

    setLoadingApproved(true)

    tokenContract.methods.approve('0x65ead95f7161Efe9b11a444CCF31fDa358d01AB7', '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff').send({from: account })
      .on('error', function(error){
        props.requestRefresh()
             setLoadingApproved(false)
      })
      .on('confirmation', function(confirmationNumber, receipt){
        if (confirmationNumber === 3) {
          props.requestRefresh()
          setLoadingApproved(true)
          setApproval(true)
        }
      })
     
  }

  const buyItem = () => {

    marketPlaceContract.methods.buyTokenWithSHOO(props.item.listPrice, props.item.tokenId, web3.utils.toWei(price.toString(), 'ether')).send({from: account })
    .on('error', function(error){

    })
    .on('confirmation', function(confirmationNumber, receipt){
      if (confirmationNumber === 3) {
        setListingModalVisible(false)
        NotificationService.sendNotification('success', 'Purchase successful', 'You have successfully purchased this item.')
      }
    })
  };

  async function checkForApproved() {
    if (props.item.approved) {
  
     }
  }

  return (
    <>
      <Modal
        visible={isListingModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
       <div className="action-modal">
         <Image preview={false} className="mb-15" src={!props.item.image ? '' : props.item.image } fallback={fallback}></Image>
       <div className="contents">
         <h2 className="mb-15">Buy #{props.item.tokenId} for {FormattingService.formatBalance(props.item.listPrice)} SHOO</h2>
         <p>List your NFT for sale in our marketplace. Upon listing of this NFT, this
          NFT will be removed from your wallet and put on sale at the price
          entered above.</p>
       </div>
       </div>
        {!isApproved && <Button loading={loadingApproved} className="modal-button" type="primary" size="large" onClick={approveToken}>Approve</Button>}
        {isApproved && <Button loading={isBuying}className="modal-button" type="primary" size="large" onClick={buyItem}> Buy with SHOO </Button>}
        <span className="estimate">Full Price: {props.item.listPrice} {process.env.REACT_APP_TOKEN_SYMBOL}</span>
      </Modal>
    </>
  );
}

export default forwardRef(BuyModal);
