import { Col, Row } from "antd";
import { useRef, useState } from "react";
import { InfoMessage } from "../../models/info-message.model";
import { Item } from "../../models/item";
import ContentStatusMessageComponent from "../content-status-message/content-status-message";
import FilterOptionsComponent from "../filter-options/filter-options";
import FullLoadingComponent from "../full-loading/full-loading";
import ItemCardComponent from "../item-card/item-card";
import "./listing-viewer";

function ListingViewerComponent(props: any, ref: any) {

  const foRef: any = useRef();
  const [isLoading, toggleLoading] = useState(true);
  const [listedItems, setListedItems] = useState([]);

  const handleListingChange = (value) => {
    setListedItems(value)
    toggleLoading(false)
  }

  function requestRefresh() {
    foRef.requestRefresh();
  }

  const infoMessage: InfoMessage = {
    header: "No Items for Sale",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis.",
    link: "/store",
    buttonText: "Visit our Store",
};

  return (
    <div className="listing-viewer-wrapper">
      <FilterOptionsComponent ref={foRef} toggleLoading={v => toggleLoading(v)} sendData={v => handleListingChange(v)}></FilterOptionsComponent>
      {
        isLoading ? <FullLoadingComponent /> : listedItems.length !== 0 ? <Row gutter={25}>
        {listedItems.map((listing: Item, index) => {
          return <Col key={index} xs={24} sm={12} md={8} lg={8} xl={6}><ItemCardComponent requestRefresh={v => requestRefresh()} item={listing}></ItemCardComponent></Col>
        })}</Row> : <ContentStatusMessageComponent header={infoMessage.header} description={infoMessage.description} link={infoMessage.link} buttonText={infoMessage.buttonText}></ContentStatusMessageComponent>
      }
    </div>
  );
}

export default ListingViewerComponent;

