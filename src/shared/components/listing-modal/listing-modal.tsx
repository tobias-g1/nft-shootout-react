import "./listing-modal.scss";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Form, Input, Modal, Button, Image } from "antd";
import { Item } from "../../models/item";
import fallback from "../../../assets/img/fallback.png"
import StepIndicatorComponent from "../step-indicator/step-indicator";
import { Step } from "../../models/step.model";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import {nftAbi} from "../../abi/collection.abi"
import { useLocation } from "react-router-dom";

type Props = {
  item: Item;
};

const rpcURL = "https://bsc-dataseed.binance.org/";
const web3 = new Web3(rpcURL);

function ListForSaleModal(props: Props, ref: any) {

  const { account } = useWeb3React()
  const [isListingModalVisible, setListingModalVisible] = useState(false);
  const [form] = Form.useForm();
  const location = useLocation();

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

  const handleOk = () => {
    setListingModalVisible(!isListingModalVisible);
  };

  const handleCancel = () => {
    setListingModalVisible(!isListingModalVisible);
  };

  const getTitle = () => {
   
    return `List ${props.item.tokenId} for Sale`
  }

  const stepList: Step[] = [
    {
      id: 1,
      order: 1,
      name: 'Approve NFT',
      status: 0
    },
    {
      id: 2,
      order: 2,
      name: 'Set Price',
      status: 0
    }
  ]

  const [steps, setStepList] = useState(stepList);

  function setStepStatus(id: number, status: number) {
    const index = stepList.findIndex(element => element.id === id);
    stepList[index].status = status; 
    setStepList(stepList)
  }

  web3.eth.setProvider(Web3.givenProvider);

  const contract = new web3.eth.Contract(nftAbi, props.item.tokenAddress);
  
  const marketplaceContact = '0x65ead95f7161Efe9b11a444CCF31fDa358d01AB7'

   const approveToken = async () => {

    setStepStatus(1, 1);

      contract.methods.approve(marketplaceContact, props.item.tokenId).send({from: '0x161A7e9a6Cbc711768aB988E22c8a74094F19a49' })
      .on('receipt', function(receipt){
        setStepStatus(1, 1)
      })
      .on('error', function(error){
        setStepStatus(1, 0)
      })
      .on('confirmation', function(confirmationNumber, receipt){
        setStepStatus(1, 2)
      })
  
  }

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
        title='List for Sale'
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
       <div className="modal-wrapper">
         <Image src={!props.item.imageUrl ? '' : props.item.imageUrl } fallback={fallback}></Image>
       <div>
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
              { required: true },
              { type: "number", min: 1 },
            ]}
          >
          <Input size="large"  placeholder="Enter List Price" />
          </Form.Item>
          <Form.Item >
            <Button className="footer-submit"
              key="submit"
              htmlType="submit"
              type="primary"
              size="large"
              onClick={handleOk}
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

export default forwardRef(ListForSaleModal);
