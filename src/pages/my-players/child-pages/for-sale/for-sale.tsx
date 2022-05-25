import { useWeb3React } from "@web3-react/core";
import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import FullLoadingComponent from "../../../../shared/components/full-loading/full-loading";
import ItemCardComponent from "../../../../shared/components/item-card/item-card";
import { InfoMessage } from "../../../../shared/models/info-message.model";
import { Item } from "../../../../shared/models/item";

function ForSalePlayersPageComponent(props: any) {

  const [listedItems, setListedItems] = useState([]);
  const [isLoading, toggleLoading] = useState(false);
  const location = useLocation();
  const { account } = useWeb3React();
  const infoMessage: InfoMessage = {
    header: "You don't have any players for sale",
    description: "You don't have any players for sale at the moment. You can visit our marketplace to expand your team.",
    link: "/marketplace",
    buttonText: "Visit our Marketplace",
  };


  async function search() {
    toggleLoading(true)
    await axios.get(process.env.REACT_APP_API_BASE_URL + 'marketplace/listed/' + process.env.REACT_APP_PLAYER_ADDRESS + '/' + account)
      .then((res) => {
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
        isLoading ? <FullLoadingComponent /> : listedItems.length !== 0 ?
          <Row gutter={25}>
            {listedItems.map((listing, index) => {
              return <Col xs={24} sm={12} md={8} lg={6} xl={6}><ItemCardComponent item={listing}></ItemCardComponent></Col>
            })
            }
          </Row> : <ContentStatusMessageComponent header={infoMessage.header} description={infoMessage.description} link={infoMessage.link} buttonText={infoMessage.buttonText}></ContentStatusMessageComponent>
      }
    </div>
  );
}

export default ForSalePlayersPageComponent;
