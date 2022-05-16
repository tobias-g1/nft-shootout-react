import "./buy-modal.scss";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Form, Input, Modal, Button, Image, notification } from "antd";
import { Item } from "../../models/item";
import fallback from "../../../assets/img/player-cards/0034.png"
import StepIndicatorComponent from "../step-indicator/step-indicator";
import { Step } from "../../models/step.model";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import {nftAbi} from "../../abi/collection.abi"
import { useLocation } from "react-router-dom";
import { marketplaceAbi } from "../../abi/marketplace.abi";
import axios from "axios";
import shoo from "../../../assets/img/shoo.png";
import { tokenAbi } from "../../abi/token.abi";
import NotificationService from "../../../core/services/notification.service";

type Props = {
  item: Item;
};

const web3 = new Web3(process.env.REACT_APP_RPC_URL);

function BuyModal(props: Props, ref: any) {

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
    getShooPrice();
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

  const [price, setPrice] = useState(0)

  async function getShooPrice() {
    await axios.get(process.env.REACT_APP_API_BASE_URL + `price/current`)
      .then(res => {
        setShooPrice(res.data.usd)
      })
  }

  web3.eth.setProvider(Web3.givenProvider);

  const tokenContract = new web3.eth.Contract(tokenAbi, process.env.REACT_APP_TOKEN_ADDRESS);
  const marketPlaceContract = new web3.eth.Contract(marketplaceAbi, process.env.REACT_APP_MARKETPLACE_ADDRESS);

   const approveToken = async () => {

    setLoadingApproved(true)

    tokenContract.methods.approve(process.env.REACT_APP_MARKETPLACE_ADDRESS, process.env.DEFAULT_APPROVAL).send({from: account })
      .on('error', function(error){
             setLoadingApproved(false)
      })
      .on('confirmation', function(confirmationNumber, receipt){
        if (confirmationNumber === 0) {
          setLoadingApproved(true)
          setApproval(true)
        }
      })
     
  }

  const buyItem = () => {

    marketPlaceContract.methods.buyTokenWithSHOO(props.item.tokenAddress, props.item.tokenId, web3.utils.toWei(price.toString(), 'ether')).send({from: account })
    .on('error', function(error){

    })
    .on('confirmation', function(confirmationNumber, receipt){
      if (confirmationNumber === 0) {
        setListingModalVisible(false)
        NotificationService.sendNotification('success', 'Purchase successful', 'You have successfully purchased this item.')
      }
    })
  };

  async function checkForApproved() {
    if (props.item.approved) {
  
     }
  }

  function formatBalance(balance: string) {
    return new Intl.NumberFormat('en-GB', { 
      notation: "compact",
      minimumFractionDigits: 2,
    }).format(parseFloat(balance));
  }

  return (
    <>
      <Modal
        visible={isListingModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
       <div className="action-modal">
         <Image className="mb-15" src={!props.item.imageUrl ? '' : props.item.imageUrl } fallback={fallback}></Image>
       <div className="contents">
         <h2 className="mb-15">Buy #{props.item.tokenId} for {formatBalance(props.item.price)} SHOO</h2>
         <p>List your NFT for sale in our marketplace. Upon listing of this NFT, this
          NFT will be removed from your wallet and put on sale at the price
          entered above.</p>
       </div>
       </div>
        {!isApproved && <Button loading={loadingApproved} className="modal-button" type="primary" size="large" onClick={approveToken}>Approve</Button>}
        {isApproved && <Button loading={isBuying}className="modal-button" type="primary" size="large" onClick={buyItem}> Buy with SHOO </Button>}
        <span className="estimate">Full Price: {props.item.price} {process.env.REACT_APP_TOKEN_SYMBOL}</span>
      </Modal>
    </>
  );
}

export default forwardRef(BuyModal);
