import { Button } from 'antd';
import { injected } from '../wallet/connectors';
import './connect-button.scss'
import { useWeb3React } from "@web3-react/core"
import { useEffect } from 'react';
import AuthService from '../../../core/services/auth.service';

function ConnectButtonComponent(props: any) {

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
  <Button type='primary' size='large' onClick={connect}>Connect</Button>
  )
}

export default ConnectButtonComponent;
