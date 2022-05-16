import "./listing-modal.scss";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Form, Input, Modal, Button, Image, notification } from "antd";
import { Item } from "../../models/item";
import fallback from "../../../assets/img/fallback.svg"
import StepIndicatorComponent from "../step-indicator/step-indicator";
import { Step } from "../../models/step.model";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import {nftAbi} from "../../abi/collection.abi"
import { useLocation } from "react-router-dom";
import { marketplaceAbi } from "../../abi/marketplace.abi";
import axios from "axios";
import shoo from "../../../assets/img/shoo.png";
import NotificationService from "../../../core/services/notification.service";

type Props = {
  item: Item;
};

const web3 = new Web3(process.env.REACT_APP_RPC_URL);

function ListForSaleModal(props: Props, ref: any) {

  const { account } = useWeb3React()
  const [isListingModalVisible, setListingModalVisible] = useState(false);
  const [isApproved, setApproval] = useState(false);
  const [price, setPrice] = useState(0)
  const [shooPrice, setShooPrice] = useState(0);
  const [form] = Form.useForm();
  const location = useLocation();

  web3.eth.setProvider(Web3.givenProvider);

  const contract = new web3.eth.Contract(nftAbi, props.item.tokenAddress);
  const marketPlaceContract = new web3.eth.Contract(marketplaceAbi, process.env.REACT_APP_MARKETPLACE_ADDRESS);

  useEffect(() => {
    getShooPrice();
    checkApprovalState();
  }, [isListingModalVisible]);

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

  async function getShooPrice() {
    await axios.get(process.env.REACT_APP_API_BASE_URL + `price/current`)
      .then(res => {
        setShooPrice(res.data.usd)
      })
  }

   const approveToken = async () => {

      contract.methods.setApprovalForAll(process.env.REACT_APP_MARKETPLACE_ADDRESS, true).send({from: account })
      .on('error', function(error){
       
      })
      .on('confirmation', function(confirmationNumber, receipt){
        if (confirmationNumber === 0) {
         setApproval(true)
        }
      })
  
  }

  const checkApprovalState = async () => {
      const approval = await contract.methods.isApprovedForAll(account, process.env.REACT_APP_MARKETPLACE_ADDRESS).call()
      console.log(approval)
      if (approval) { setApproval(true) } else { 
        const approvedAddress = await contract.methods.getApproved(props.item.tokenId).call()
        if (approvedAddress === process.env.REACT_APP_MARKETPLACE_ADDRESS) {
                setApproval(true) 
        } else {
            setApproval(false) 
        }
      } 
  }


  const listForSale = () => {

    marketPlaceContract.methods.createAskOrder(props.item.tokenAddress, props.item.tokenId, web3.utils.toWei(price.toString(), 'ether')).send({from: account })
    .on('error', function(error){
     
    })
    .on('confirmation', function(confirmationNumber, receipt){
      if (confirmationNumber === 0) {
        setListingModalVisible(false)
        NotificationService.sendNotification('success', 'Your listing was successful', 'Your NFT is now listed on our marketplace.')
      }
    })
  };

  return (
    <>
      <Modal
        visible={isListingModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
       <div className="action-modal">
         <Image className="mb-15" src={!props.item.imageUrl ? '' : props.item.imageUrl } fallback={fallback}></Image>
       <div>
         <h2 className="mb-15">List #{props.item.tokenId} for Sale </h2>
         <p>List your NFT for sale in our marketplace. Upon listing of this NFT, this
          NFT will be removed from your wallet and put on sale at the price
          entered above.</p>
       </div>
       </div>
      { !isApproved && <Button type="primary" className="modal-button" size="large" onClick={approveToken}>Approve</Button> }

      { isApproved && <div className="price">
       <Form form={form} layout="horizontal" autoComplete="off">
          <Form.Item name="price" rules={[ { required: true, message: 'Please enter a price' }]}>
            <Input size="large" placeholder="Enter List Price" value={price} onChange={(e)=> setPrice(parseInt(e.target.value || '0'))} prefix={<img className="shoo-icon" src={shoo} />}/>
          </Form.Item>
          <Form.Item >
            <Button className="footer-submit"
              key="submit"
              htmlType="submit"
              type="primary"
              size="large"
              onClick={listForSale}
            >
              List for Sale
            </Button>
          </Form.Item>
        </Form>
               <span className="estimate">{'Estimated Price (USD): $ ' + ((price) ? (shooPrice * price).toFixed(2) : '0.00')}</span>
       </div> }
      </Modal>
    </>
  );
}

export default forwardRef(ListForSaleModal);
