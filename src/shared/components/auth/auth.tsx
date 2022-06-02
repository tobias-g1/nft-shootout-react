import { Button, message } from 'antd';
import { injected } from '../wallet/connectors';
import './auth.scss'
import { useWeb3React } from "@web3-react/core"
import { useEffect } from 'react';
import AuthenticatedUserComponent from '../authenticated-user/authenticated-user';
import Web3 from "web3";
import AuthService from '../../../core/services/auth.service';

function AuthComponent(props: any) {

  const web3 = new Web3(process.env.REACT_APP_RPC_URL);

  const { active, activate, error } = useWeb3React()

  async function connect() {
    await AuthService.checkNetwork();
    if (!error) {
      await activate(injected).then(res => {
        localStorage.setItem('isWalletConnected', 'true')
      })
    }
  }

  const connectWalletOnPageLoad = async () => {
    if (localStorage?.getItem('isWalletConnected') === 'true') {
      try {
        await activate(injected)
        localStorage.setItem('isWalletConnected', 'true')
      } catch (ex) {
      }
    }
  }


  useEffect(() => {
    connectWalletOnPageLoad()
  }, [activate])

  return (
    <div>
      {active ? <AuthenticatedUserComponent /> : <Button type='primary' size='large' onClick={connect}>Connect</Button>}
    </div>
  )
}

export default AuthComponent;
