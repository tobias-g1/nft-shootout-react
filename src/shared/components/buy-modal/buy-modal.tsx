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

type Props = {
  item: Item;
};

const rpcURL = "https://bsc-dataseed.binance.org/";
const web3 = new Web3(rpcURL);

function BuyModal(props: Props, ref: any) {

  const [isListingModalVisible, setListingModalVisible] = useState(false);
  const [shooPrice, setShooPrice] = useState(0);
  const [form] = Form.useForm();
  const location = useLocation();

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

  const stepList: Step[] = [
    {
      id: 1,
      order: 1,
      name: 'Approve Token',
      status: 0
    },
    {
      id: 2,
      order: 2,
      name: 'Buy',
      status: 0
    }
  ]

  const [steps, setStepList] = useState(stepList);
  const [price, setPrice] = useState(0)

  function setStepStatus(id: number, status: number) {
    const index = stepList.findIndex(element => element.id === id);
    stepList[index].status = status; 
    setStepList(stepList)
  }

  const baseUrl = 'http://localhost:8082/'

  async function getShooPrice() {
    await axios.get(baseUrl + `price/current`)
      .then(res => {
        setShooPrice(res.data.usd)
      })
  }

  const openNotificationWithIcon = (type: string, title: string, text: string) => {
    notification[type]({
      message: title,
      description: text
    });
  };

  web3.eth.setProvider(Web3.givenProvider);

  const tokenContract = new web3.eth.Contract(tokenAbi, props.item.tokenAddress);
  const tokenAddress = '0xcC046a8ba1f82B4FbB186f76e23E3DbEf297dA4c'
  const marketPlaceContract = new web3.eth.Contract(marketplaceAbi, process.env.REACT_APP_MARKETPLACE_ADDRESS);

   const approveToken = async () => {

    setStepStatus(1, 1);

    tokenContract.methods.approve(tokenAddress, process.env.REACT_APP_MARKETPLACE_ADDRESS).send({from: '0x161A7e9a6Cbc711768aB988E22c8a74094F19a49' })
      .on('error', function(error){
        setStepStatus(1, 0)
      })
      .on('confirmation', function(confirmationNumber, receipt){
        if (confirmationNumber === 0) {
          setStepStatus(1, 2)
        }
      })
  
  }

  const buyItem = () => {

    marketPlaceContract.methods.buyTokenWithSHOO(props.item.tokenAddress, props.item.tokenId, web3.utils.toWei(price.toString(), 'ether')).send({from: '0x161A7e9a6Cbc711768aB988E22c8a74094F19a49' })
    .on('error', function(error){
      setStepStatus(2, 0)
    })
    .on('confirmation', function(confirmationNumber, receipt){
      if (confirmationNumber === 0) {
        setStepStatus(2, 2)
        setListingModalVisible(false)
        openNotificationWithIcon('success', 'Purchase successful', 'You have successfully purchased this item.')
      }
    })
  };

  async function checkForApproved() {
    if (props.item.approved) {
      setStepStatus(1, 2)
     }
  }


  function isStepComplete(id) {
    const step = steps.find(element => element.id === id);
    if (step.status === 2) {
      return true;
    }
  }

  function isLoading(id) {
    const step = steps.find(element => element.id === id);
    if (step.status === 1) {
      return true;
    }
  }

  return (
    <>
      <Modal
        visible={isListingModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
       <div className="modal-wrapper">
         <Image src={!props.item.imageUrl ? '' : props.item.imageUrl } fallback={fallback}></Image>
       <div>
         <h2 className="mb-15">List #{props.item.tokenId} for Sale </h2>
         <p>List your NFT for sale in our marketplace. Upon listing of this NFT, this
          NFT will be removed from your wallet and put on sale at the price
          entered above.</p>
          <StepIndicatorComponent steps={steps}></StepIndicatorComponent>
       </div>
       </div>
      { (!isStepComplete(1)) ? <div className="approve">
         <Button type="primary" size="large" onClick={approveToken} loading={isLoading(1)}>Approve</Button>
       </div> : null }
       { (isStepComplete(1) && !isStepComplete(2)) ? <div className="price">
       <Form form={form} layout="horizontal" autoComplete="off">
          <Form.Item
            name="price"
            rules={[
              { required: true, message: 'Please enter a price' }
            ]}
          >
          <Input size="large"  placeholder="Enter List Price" value={price} onChange={(e)=> setPrice(parseInt(e.target.value || '0'))} prefix={<img className="shoo-icon" src={shoo} />}  addonAfter={ <span>{'$ ' + ((price) ? (shooPrice * price).toFixed(2) : '0.00')}</span>}/>
          </Form.Item>
          <Form.Item >
            <Button className="footer-submit"
              key="submit"
              htmlType="submit"
              type="primary"
              size="large"
              onClick={buyItem}
              loading={isLoading(2)}
            >
              List for Sale
            </Button>
          </Form.Item>
        </Form>
       </div> : null }
      </Modal>
    </>
  );
}

export default forwardRef(BuyModal);