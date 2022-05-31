import { useWeb3React } from "@web3-react/core";
import { Row, Col } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import FullLoadingComponent from "../../../../shared/components/full-loading/full-loading";
import ItemCardComponent from "../../../../shared/components/item-card/item-card";
import { InfoMessage } from "../../../../shared/models/info-message.model";

function UnlistedPlayersPageComponent(props: any) {

  const { account } = useWeb3React();
  const [listedItems, setListedItems] = useState([]);
  const [isLoading, toggleLoading] = useState(false);
  const location = useLocation();
  const infoMessage: InfoMessage = {
    header: "You don't have any unlisted players",
    description:
      "You don't have any unlisted players at the moment. Visit our marketplace to purchase new players to use in game.",
    link: "/marketplace",
    buttonText: "Visit our Marketplace",
  };

  async function search() {
    toggleLoading(true)
    await axios.get(process.env.REACT_APP_API_BASE_URL + 'items/' + '0x943F9A17AAa6Eb0586187c2093c114aD7b8f2e16' + '/' + account)
      .then(res => {
        setListedItems(res.data)
        toggleLoading(false)
      })
  }

  useEffect(() => {
    search()
  }, [location]);

  return (
    <div>
      {
        isLoading ? <FullLoadingComponent /> : listedItems && listedItems.length !== 0 ?
          <Row gutter={25}>
            {listedItems.map((listing, index) => {
              return <Col xs={24} sm={12} md={8} lg={6} xl={6}><ItemCardComponent key={index} item={listing}></ItemCardComponent></Col>
            })
            }
          </Row> : <ContentStatusMessageComponent header={infoMessage.header} description={infoMessage.description} link={infoMessage.link} buttonText={infoMessage.buttonText}></ContentStatusMessageComponent>
      }
    </div>
  );

}

export default UnlistedPlayersPageComponent;
