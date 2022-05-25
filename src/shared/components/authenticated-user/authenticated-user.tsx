import "./authenticated-user.scss";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import shoo from "../../../assets/img/shoo.png";
import { Button } from "antd";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { tokenAbi } from "../../abi/token.abi";

function AuthenticatedUserComponent(props: any) {
  const rpcURL = "https://data-seed-prebsc-1-s1.binance.org:8545/";
  const web3 = new Web3(rpcURL);
  const { deactivate, account } = useWeb3React();

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", "false");
    } catch (ex) {
      console.log(ex);
    }
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [shooBalance, setShooBalance] = useState('0');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  let contract = new web3.eth.Contract(tokenAbi, process.env.REACT_APP_TOKEN_ADDRESS);
  
  async function getBalance() {

    const balance =  await contract.methods.balanceOf(account).call();
    const balanceInWei = web3.utils.fromWei(balance);

    let shooBalance = balanceInWei;

    setShooBalance(parseInt(shooBalance).toFixed())

  }

  const getExplorer = () => {
    return 'https://bscscan.com/address/' + account
  }

  function formatBalance(balance: string) {
    return new Intl.NumberFormat('en-GB', { 
      notation: "compact",
      minimumFractionDigits: 2,
    }).format(parseFloat(balance));
  }

  getBalance()

  return (
    <>
      <div className="authenticated-user">
        <div className="balance-chip">
          <img src={shoo} alt="Shoo Token" />
          <span>{ formatBalance(shooBalance) }</span>
        </div>
        <span className="wallet" onClick={showModal}>
          <FontAwesomeIcon icon={faWallet} />
        </span>
      </div>
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="auth-modal-wrapper">
          <h2 className="mb-10">Your Wallet</h2>
          <p>View your connected wallet, SHOO balance and disconnect your wallet.</p>
          <div className="address-details mb-15">
            <span className="address">{account}</span>
          </div>
          <div className="balance-row mb-15">
            <div> 
              <img src={shoo} alt="Shoo Token" />
              <span className="balance-label">Shoo Balance</span>
            </div>
            <span className="balance-amount">{ formatBalance(shooBalance) }</span>
          </div>
          <Button onClick={disconnect} className="disconnect-button">
            Disconnect
          </Button>
          <a href={getExplorer()} rel="noreferrer" target="_blank" className="explorer-link">View Wallet on Explorer</a>
        </div>
      </Modal>
    </>
  );
}

export default AuthenticatedUserComponent;
