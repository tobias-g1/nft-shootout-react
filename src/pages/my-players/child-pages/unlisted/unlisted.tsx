import { useWeb3React } from "@web3-react/core";
import { Row, Col } from "antd";
import { Content } from "antd/lib/layout/layout";
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis.",
    link: "/marketplace",
    buttonText: "Visit our Marketplace",
  };

  async function search() {
    toggleLoading(true)
    await axios.get(process.env.REACT_APP_API_BASE_URL + 'items/' + process.env.REACT_APP_PLAYER_ADDRESS + '/' + account)
      .then(res => {
        setListedItems(res.data.items)
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
              return <Col xs={24} sm={12} md={8} lg={6} xl={4}><ItemCardComponent key={index} item={listing}></ItemCardComponent></Col>
            })
            }
          </Row> : <ContentStatusMessageComponent header={infoMessage.header} description={infoMessage.description} link={infoMessage.link} buttonText={infoMessage.buttonText}></ContentStatusMessageComponent>
      }
    </div>
  );

}

export default UnlistedPlayersPageComponent;
