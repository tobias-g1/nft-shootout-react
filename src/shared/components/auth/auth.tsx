import { Button, message } from 'antd';
import { injected } from '../wallet/connectors';
import './auth.scss'
import { useWeb3React } from "@web3-react/core"
import { useEffect } from 'react';
import AuthenticatedUserComponent from '../authenticated-user/authenticated-user';

function AuthComponent(props: any) {

  const { active, library, connector, activate, error } = useWeb3React()

  const connectionError = (error: any) => {
    console.log(error)
    message.error(error.toString());
  };

  async function connect() {
    await activate(injected).then(res => {
      if (error) {
        connectionError(error)
        return;
      }
      localStorage.setItem('isWalletConnected', 'true')
    })
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', 'true')
        } catch (ex) {
          console.log(4)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])

  return (
    <div>
      {active ? <AuthenticatedUserComponent /> : <Button type='primary' size='large' onClick={connect}>Connect</Button>}
    </div>
  )
}

export default AuthComponent;
