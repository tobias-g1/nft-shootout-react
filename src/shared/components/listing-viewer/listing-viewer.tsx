import { Col, Row } from "antd";
import { useState } from "react";
import { Item } from "../../models/item";
import FilterOptionsComponent from "../filter-options/filter-options";
import ItemCardComponent from "../item-card/item-card";
import "./listing-viewer";

function ListingViewerComponent(props: any) {

  const [listedItems, setListedItems] = useState([]);

  const handleListingChange = (value) => {
    setListedItems(value)
  }

  return (
    <div className="listing-viewer-wrapper">
      <FilterOptionsComponent sendData={v => handleListingChange(v)}></FilterOptionsComponent>
        <Row gutter={25}>
        {listedItems.map((listing: Item, index) => {
          return <Col xs={24} sm={24} md={6} lg={6} xl={6}><ItemCardComponent item={listing}></ItemCardComponent></Col>
        })
        }
        </Row>
      </div>

  );
}

export default ListingViewerComponent;

