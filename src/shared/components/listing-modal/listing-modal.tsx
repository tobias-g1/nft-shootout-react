import "./listing-modal.scss";
import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from "react";
import { Form, Input, Modal, Button, Image } from "antd";
import fallback from "../../../assets/img/fallback.svg";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { nftAbi } from "../../abi/collection.abi";
import { marketplaceAbi } from "../../abi/marketplace.abi";
import shoo from "../../../assets/img/shoo.png";
import NotificationService from "../../../core/services/notification.service";
import ConnectButtonComponent from "../connect-button/connect-button";
import {ShooPriceContext} from '../../../App'

const web3 = new Web3(process.env.REACT_APP_RPC_URL);

function ListForSaleModal(props: any, ref: any) {
  const { account } = useWeb3React();
  const [isListingModalVisible, setListingModalVisible] = useState(false);
  const [isListing, setIsListing] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [isApproved, setApproval] = useState(false);
  const [price, setPrice] = useState(0);
  const [form] = Form.useForm();
  const shooPrice = useContext(ShooPriceContext);

  console.log(shooPrice)

  web3.eth.setProvider(Web3.givenProvider);

  const contract = new web3.eth.Contract(nftAbi, props.item.collectionAddress);
  const marketPlaceContract = new web3.eth.Contract(
    marketplaceAbi,
    "0x65ead95f7161Efe9b11a444CCF31fDa358d01AB7"
  );

  useEffect(() => {
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

  const approveToken = async () => {
    setIsApproving(true);
    contract.methods
      .setApprovalForAll("0x65ead95f7161Efe9b11a444CCF31fDa358d01AB7", true)
      .send({ from: account })
      .on("confirmation", function (confirmationNumber, receipt) {
        if (confirmationNumber === 3) {
          setIsApproving(false);
          setApproval(true);
        }
      });
  };

  const checkApprovalState = async () => {
    const approval = await contract.methods
      .isApprovedForAll(account, "0x65ead95f7161Efe9b11a444CCF31fDa358d01AB7")
      .call();
    if (approval) {
      setApproval(true);
    } else {
      const approvedAddress = await contract.methods
        .getApproved(props.item.tokenId)
        .call();
      if (approvedAddress === "0x65ead95f7161Efe9b11a444CCF31fDa358d01AB7") {
        setApproval(true);
      } else {
        setApproval(false);
      }
    }
  };

  const listForSale = () => {
    setIsListing(true);
    marketPlaceContract.methods
      .createAskOrder(
        props.item.collectionAddress,
        props.item.tokenId,
        web3.utils.toWei(price.toString(), "ether")
      )
      .send({ from: account })
      .on("error", function (error) {
        setIsListing(false);
        setListingModalVisible(false);
        props.refreshMethod();
      })
      .on("confirmation", function (confirmationNumber, receipt) {
        if (confirmationNumber === 3) {
          setIsListing(false);
          setListingModalVisible(false);
          props.refreshMethod();
          NotificationService.sendNotification(
            "success",
            "Your listing was successful",
            "Your NFT is now listed on our marketplace."
          );
        }
      });
  };

  return (
    <>
      <Modal
        visible={isListingModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="action-modal">
          <Image
            className="mb-15"
            src={!props.item.image ? "" : props.item.image}
            fallback={fallback}
          ></Image>
          <div>
            <h2 className="mb-15">List #{props.item.tokenId} for Sale </h2>
            <p>
              List your NFT for sale in our marketplace. Upon listing of this
              NFT, this NFT will be removed from your wallet and put on sale at
              the price entered above.
            </p>
          </div>
        </div>
        {!isApproved && (
          <Button
            type="primary"
            className="modal-button"
            size="large"
            loading={isApproving}
            onClick={approveToken}
          >
            Approve
          </Button>
        )}

        {isApproved && (
          <div className="price">
            <Form form={form} layout="horizontal" autoComplete="off">
              <Form.Item
                name="price"
                rules={[{ required: true, message: "Please enter a price" }]}
              >
                <Input
                  size="large"
                  placeholder="Enter List Price"
                  value={price}
                  onChange={(e) => setPrice(parseInt(e.target.value || "0"))}
                  prefix={<img className="shoo-icon" src={shoo} alt="Shoo Icon" />}
                />
              </Form.Item>
              <Form.Item>
                {account ? (
                  <Button
                    className="footer-submit"
                    key="submit"
                    htmlType="submit"
                    type="primary"
                    size="large"
                    onClick={listForSale}
                    loading={isListing}
                  >
                    List for Sale
                  </Button>
                ) : (
                  <ConnectButtonComponent />
                )}
              </Form.Item>
            </Form>
            <span className="estimate">
              {"Estimated Price (USD): $ " +
                (price ? (shooPrice * price).toFixed(2) : "0.00")}
            </span>
          </div>
        )}
      </Modal>
    </>
  );
}

export default forwardRef(ListForSaleModal);
