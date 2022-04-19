import PageHeaderComponent from "../../shared/components/page-header/page-header";
import "./unauthenticated.scss";
import DocumentMeta from "react-document-meta";
import { Content } from "antd/lib/layout/layout";
import { Button, message } from "antd";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../shared/components/wallet/connectors";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UnauthenticatedPageComponent(props: any) {

  const title: string = "Login";
  const meta: any = {
    title,
    description: "TBA",
    meta: {},
  };

  const { account, activate, error } = useWeb3React()
  let navigate = useNavigate();
  const location = useLocation();

  const connectionError = (error: any) => {
    console.log(error)
    message.error(error.toString());
  };

  useEffect(() => {
    if (account) {
      navigate("../", { replace: true });
    }
  }, [account, navigate]);

  async function connect() {
    await activate(injected).then(res => {
      if (error) {
        connectionError(error)
        return;
      }
      localStorage.setItem('isWalletConnected', 'true');
      navigate("../", { replace: true });
    })
  }

  return (
    <div
      className="page-wrapper"
      style={{ backgroundImage: "url(/assets/img/background.png)" }}
    >
      <DocumentMeta {...meta} />
      <Content>
        <div className="login">
          <div className="left">
            <h2 className="mb-5">Please connect your wallet via metamask to access this page</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nemo neque tempora similique, unde facere iure et natus, numquam delectus beatae cumque at sequi quos magni quasi repellendus nostrum accusamus.</p>
          </div>
            <Button onClick={connect} type="primary" size="large">
              Connect
            </Button>
        </div>
      </Content>
    </div>
  );
}

export default UnauthenticatedPageComponent;
