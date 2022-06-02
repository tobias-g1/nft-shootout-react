import './auth.scss'
import { useWeb3React } from "@web3-react/core"
import AuthenticatedUserComponent from '../authenticated-user/authenticated-user';
import ConnectButtonComponent from '../connect-button/connect-button';

function AuthComponent(props: any) {

  const { active, activate, error } = useWeb3React()
  
  return (
    <div>
      {active ? <AuthenticatedUserComponent /> : <ConnectButtonComponent />}
    </div>
  )
}

export default AuthComponent;
