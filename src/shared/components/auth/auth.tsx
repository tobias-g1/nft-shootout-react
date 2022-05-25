import { Button, message } from 'antd';
import { injected } from '../wallet/connectors';
import './auth.scss'
import { useWeb3React } from "@web3-react/core"
import { useEffect } from 'react';
import AuthenticatedUserComponent from '../authenticated-user/authenticated-user';
import Web3 from "web3";

function AuthComponent(props: any) {

  const web3 = new Web3(process.env.REACT_APP_RPC_URL);

  const { active, activate, error } = useWeb3React()

  async function connect() {
    await checkNetwork();
    await activate(injected).then(res => {
      localStorage.setItem('isWalletConnected', 'true')
    })
  }

  async function checkNetwork() {
    if (window.ethereum) {
      if (window.ethereum) {
        try {
          // check if the chain to connect to is installed
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x61' }], // chainId must be in hexadecimal numbers
          });
        } catch (error) {
          // This error code indicates that the chain has not been added to MetaMask
          // if it is not, then install it into the user MetaMask
          if (error.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0x61',
                    rpcUrl: process.env.REACT_APP_RPC_URL,
                  },
                ],
              });
            } catch (addError) {
              console.error(addError);
            }
          }
          console.error(error);
        }
      } else {
        // if no window.ethereum then MetaMask is not installed
        alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
      } 
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', 'true')
        } catch (ex) {
        }
      }
    }
    connectWalletOnPageLoad()
  }, [activate])

  return (
    <div>
      {active ? <AuthenticatedUserComponent /> : <Button type='primary' size='large' onClick={connect}>Connect</Button>}
    </div>
  )
}

export default AuthComponent;
