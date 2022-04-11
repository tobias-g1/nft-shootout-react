import { Button } from 'antd';
import { injected } from '../wallet/connectors';
import './auth.scss'
import { useWeb3React } from "@web3-react/core"
import { useEffect } from 'react';
import AuthenticatedUserComponent from '../authenticated-user/authenticated-user';

function AuthComponent(props: any) {
    
    const { active, library, connector, activate} = useWeb3React()

    console.log(useWeb3React())

    async function connect() {
      try {
        await activate(injected)
        localStorage.setItem('isWalletConnected', 'true')
      } catch (ex) {
        console.log(ex)
      }
    }
  
    useEffect(() => {
      const connectWalletOnPageLoad = async () => {
        if (localStorage?.getItem('isWalletConnected') === 'true') {
          try {
            await activate(injected)
            localStorage.setItem('isWalletConnected', 'true')
          } catch (ex) {
            console.log(ex)
          }
        }
      }
      connectWalletOnPageLoad()
    }, [])
  
    return (
      <div>
        {active ? <AuthenticatedUserComponent /> :  <Button type='primary' size='large' onClick={connect}>Connect with MetaMask</Button>}
      </div>
    )
}

export default AuthComponent;
