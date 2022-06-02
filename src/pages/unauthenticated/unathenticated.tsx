import "./unauthenticated.scss";
import DocumentMeta from "react-document-meta";
import { Content } from "antd/lib/layout/layout";
import { Button, message } from "antd";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../shared/components/wallet/connectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from '../../assets/img/logo-small.jpeg'
import AuthService from "../../core/services/auth.service";

function UnauthenticatedPageComponent(props: any) {

  const title: string = "Login";
  const meta: any = {
    title,
    description: "TBA",
    meta: {},
  };

  const { account, activate, error } = useWeb3React()
  let navigate = useNavigate();

  useEffect(() => {
    if (account) {
      navigate("../", { replace: true });
    }
  }, [account, navigate]);

  async function connect() {
    await AuthService.checkNetwork();
    if (!error) {
      await activate(injected).then(res => {
        localStorage.setItem('isWalletConnected', 'true')
      })
    }
  }

  return (
    <div className="general-wrapper">
      <DocumentMeta {...meta} />
        <div className="login">
          <div className="left">
            <img src={logo} alt="" />
            <h2 className="mb-5">Connect Wallet</h2>
            <p>Please connect your wallet to access this page.</p>
          </div>
            <Button onClick={connect} type="primary" size="large">
              Connect Wallet
            </Button>
        </div>
    </div>
  );
}

export default UnauthenticatedPageComponent;
