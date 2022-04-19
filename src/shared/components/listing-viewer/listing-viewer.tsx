import { Col, Row } from "antd";
import { useState } from "react";
import { Item } from "../../models/item";
import FilterOptionsComponent from "../filter-options/filter-options";
import FullLoadingComponent from "../full-loading/full-loading";
import ItemCardComponent from "../item-card/item-card";
import "./listing-viewer";

function ListingViewerComponent(props: any) {

  const [isLoading, toggleLoading] = useState(true);
  const [listedItems, setListedItems] = useState([]);

  const handleListingChange = (value) => {
    setListedItems(value)
    toggleLoading(!isLoading)
  }

  return (
    <div className="listing-viewer-wrapper">
      <FilterOptionsComponent sendData={v => handleListingChange(v)}></FilterOptionsComponent>
      {
        isLoading ? <FullLoadingComponent /> : <Row gutter={25}>
          {listedItems.map((listing: Item, index) => {
            return <Col xs={24} sm={24} md={6} lg={4} xl={4}><ItemCardComponent item={listing}></ItemCardComponent></Col>
          })
          }
        </Row>
      }

    </div>

  );
}

export default ListingViewerComponent;

