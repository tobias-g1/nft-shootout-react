import "./unauthenticated.scss";
import DocumentMeta from "react-document-meta";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from '../../assets/img/logo-small.jpeg'
import ConnectButtonComponent from "../../shared/components/connect-button/connect-button";

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

  return (
    <div className="general-wrapper">
      <DocumentMeta {...meta} />
        <div className="login">
          <div className="left">
            <img src={logo} alt="" />
            <h2 className="mb-5">Connect Wallet</h2>
            <p>Please connect your wallet to access this page.</p>
          </div>
          <ConnectButtonComponent />
        </div>
    </div>
  );
}

export default UnauthenticatedPageComponent;
