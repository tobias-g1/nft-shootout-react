import "./listing-modal.scss";
import { forwardRef, useImperativeHandle, useState } from "react";
import { Form, Input, Modal, Button, Image } from "antd";
import { Item } from "../../models/item";
import fallback from "../../../assets/img/fallback.png"
import StepIndicatorComponent from "../step-indicator/step-indicator";
import { Step } from "../../models/step.model";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import {nftAbi} from "../../abi/collection.abi"

type Props = {
  item: Item;
};

const rpcURL = "https://bsc-dataseed.binance.org/";
const web3 = new Web3(rpcURL);

function ListForSaleModal(props: Props, ref: any) {

  const { account } = useWeb3React()

  console.log(account)
  const [isListingModalVisible, setListingModalVisible] = useState(false);
  const [form] = Form.useForm();


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

  const steps: Step[] = [
    {
      order: 1,
      name: 'Approve NFT',
      status: 0
    },
    {
      order: 2,
      name: 'Set Price',
      status: 0
    }
  ]

  const marketplaceContact = '0x65ead95f7161Efe9b11a444CCF31fDa358d01AB7'

   const approveToken = async () => {

    web3.eth.setProvider(Web3.givenProvider);
      const contract = new web3.eth.Contract(nftAbi, props.item.tokenAddress);
      
      contract.methods.approve(marketplaceContact, props.item.tokenId).send({from: '0x161A7e9a6Cbc711768aB988E22c8a74094F19a49' })
      .on('confirmation', function(confirmationNumber, receipt){
        console.log(receipt)
      })
      .on('error', console.error);
  
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
       <div className="approve">
         <Button type="primary" onClick={approveToken}>Approve</Button>
       </div>
      </Modal>
    </>
  );
}

export default forwardRef(ListForSaleModal);
