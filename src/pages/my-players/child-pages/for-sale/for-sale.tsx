import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ContentStatusMessageComponent from "../../../../shared/components/content-status-message/content-status-message";
import FullLoadingComponent from "../../../../shared/components/full-loading/full-loading";
import ItemCardComponent from "../../../../shared/components/item-card/item-card";
import PlayerCardComponent from "../../../../shared/components/item-card/item-card";
import { InfoMessage } from "../../../../shared/models/info-message.model";

function ForSalePlayersPageComponent(props: any) {
  let players: string[] = [];
  const infoMessage: InfoMessage = {
    header: "You don't have any players for sale",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis.",
    link: "/marketplace",
    buttonText: "Visit our Marketplace",
  };

  const [listedItems, setListedItems] = useState([]);
  const [isLoading, toggleLoading] = useState(false);
  const location = useLocation();
  const baseUrl = 'http://localhost:8082/'

  async function search() {
    toggleLoading(true)
    await axios.get(baseUrl + 'marketplace/listed/0x943f9a17aaa6eb0586187c2093c114ad7b8f2e16/0x161A7e9a6Cbc711768aB988E22c8a74094F19a49')
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
        isLoading ? <FullLoadingComponent /> :
          <Row gutter={25}>
            {listedItems.map((listing, index) => {
              return <Col xs={24} sm={24} md={6} lg={6} xl={4}><ItemCardComponent item={listing}></ItemCardComponent></Col>
            })
            }
          </Row>
      }
    </div>
  );
}

export default ForSalePlayersPageComponent;
