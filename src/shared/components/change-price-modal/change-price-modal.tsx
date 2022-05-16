import "./change-price-modal.scss";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Form, Input, Modal, Button, Image } from "antd";
import { Item } from "../../models/item";
import fallback from "../../../assets/img/fallback.svg"
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { useLocation } from "react-router-dom";
import { marketplaceAbi } from "../../abi/marketplace.abi";
import axios from "axios";
import shoo from "../../../assets/img/shoo.png";
import NotificationService from "../../../core/services/notification.service";

type Props = {
  item: Item;
};

const web3 = new Web3(process.env.REACT_APP_RPC_URL);

function ChangePriceModal(props: Props, ref: any) {

  const { account } = useWeb3React()
  const [isListingModalVisible, setListingModalVisible] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [shooPrice, setShooPrice] = useState(0);
  const [form] = Form.useForm();
  const location = useLocation();

  useEffect(() => {
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

  const marketPlaceContract = new web3.eth.Contract(marketplaceAbi, process.env.REACT_APP_MARKETPLACE_ADDRESS);

   const cancelListing = async () => {

    setIsCancelling(true)

    marketPlaceContract.methods.modifyAskOrder(props.item.tokenAddress, props.item.tokenId, web3.utils.toWei(price.toString(), 'ether')).send({from: account })
      .on('error', function(error){
        setIsCancelling(false)
      })
      .on('confirmation', function(confirmationNumber, receipt){
        if (confirmationNumber === 0) {
          setIsCancelling(false)
          setListingModalVisible(false)
          NotificationService.sendNotification('success', 'Your listing price has been updated successfully', 'Your NFT is now be available within your wallet to play')
        }
      })
  
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
       <div>
         <h2 className="mb-15">Change Listing Price for #{props.item.tokenId} </h2>
         <p>List your NFT for sale in our marketplace. Upon listing of this NFT, this
          NFT will be removed from your wallet and put on sale at the price
          entered above.</p>
       </div>
       </div>
       <div className="price">
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
              onClick={cancelListing}
              loading={isCancelling}
            >
              Change Price
            </Button>
          </Form.Item>
        </Form>
            <span className="estimate">{'Estimated Price (USD): $ ' + ((price) ? (shooPrice * price).toFixed(2) : '0.00')}</span>
       </div>
      </Modal>
    </>
  );
}

export default forwardRef(ChangePriceModal);
