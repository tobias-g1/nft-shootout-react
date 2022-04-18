import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import ContentStatusMessageComponent from "../content-status-message/content-status-message";
import FilterOptionsComponent from "../filter-options/filter-options";
import ListingCardComponent from "../listing-card/listing-card";
import "./listing-viewer";

function ListingViewerComponent(props: any) {

  const [listedItems, setListedItems] = useState([]);

  const handleListingChange = (value) => {
    setListedItems(value)
    console.log(value)
  }

  return (
    <div className="listing-viewer-wrapper">
      <FilterOptionsComponent sendData={v => handleListingChange(v)}></FilterOptionsComponent>
        <Row gutter={25}>
        {listedItems.map((listing, index) => {
          return <Col xs={24} sm={24} md={6} lg={6} xl={6}><ListingCardComponent listing={listing}></ListingCardComponent></Col>
        })
        }
        </Row>
      </div>

  );
}

export default ListingViewerComponent;

