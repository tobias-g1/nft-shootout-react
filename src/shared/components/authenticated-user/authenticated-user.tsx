import Avatar from "antd/lib/avatar/avatar";
import "./authenticated-user.scss";
import { UserOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import shoo from "../../../assets/img/shoo.png";
import { Button } from "antd";
import { useWeb3React } from "@web3-react/core";

function AuthenticatedUserComponent(props: any) {

  const { deactivate, account } = useWeb3React()

  async function disconnect() {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', 'false')
    } catch (ex) {
      console.log(ex)
    }
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function getLink() {
    return "https://bscscan.com/address/" + account;
  }

  return (
    <>
      <div className="authenticated-user">
        <div className="balance-chip">
          <img src={shoo} alt="Shoo Token" />
          <span>395,000</span>
        </div>
        <span onClick={showModal}>
          <Avatar size="large" icon={<UserOutlined />} />
        </span>
      </div>
      <Modal title="Your Wallet" visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <div className="auth-modal-wrapper">
          <div className="address-details mb-5">
            <span className="label">Your Address</span>
            <span className="address">
              {account}
            </span>
          </div>
          <a href={getLink()} className="mb-5" target="_blank" rel="noopener noreferrer">
            View on BSc Scan
          </a>
          <div className="balance-row mb-15">
            <span className="balance-label">Shoo Balance</span>
            <span className="balance-amount">344,000</span>
          </div>
          <Button onClick={disconnect} className="disconnect-button">Disconnect</Button>
        </div>
      </Modal>
    </>
  );
}

export default AuthenticatedUserComponent;
