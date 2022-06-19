import PageHeaderComponent from "../../shared/components/page-header/page-header";
import "./item.scss";
import DocumentMeta from "react-document-meta";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Col, Row } from "antd";
import ImageViewerComponent from "./components/image-viewer/image-viewer";
import OverviewComponent from "./components/nft-overview/nft-overview";
import AttributesComponent from "./components/attributes/attributes";
import OwnerComponent from "./components/owner/owner";
import { Item } from "../../shared/models/item";
import { Content } from "antd/lib/layout/layout";
import CollectionComponent from "./components/collection/collection";
import FullLoadingComponent from "../../shared/components/full-loading/full-loading";
import { useNavigate } from "react-router-dom";

function ItemPageComponent(props: any) {
  const [title, setTitle] = useState("Item");

  const meta: any = {
    title,
    description: "TBA",
    meta: {},
  };

  const [item, setItem] = useState({});

  const [isLoading, toggleLoading] = useState(false);
  const location = useLocation();
  const { collectionAddress, tokenId } = useParams();
  let navigate = useNavigate();

  const search = async () => {
    toggleLoading(true);
    await axios
      .get(
        process.env.REACT_APP_API_BASE_URL +
          `items/single/${collectionAddress}/${tokenId}`
      )
      .then((res) => {
        const item: Item = res.data;
        setTitle(item.name + " #" + item.tokenId);
        setItem(item);
        if (!item.collectionAddress) {
          navigate("../not-found", { replace: true });
        }
        toggleLoading(false);
      });
  }

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="item page-wrapper" style={{ backgroundImage: "url(/assets/img/background.jpeg)" }}>
      <DocumentMeta {...meta} />
      {isLoading ? (
        <FullLoadingComponent />
      ) : (
       <>
        <PageHeaderComponent header={title} />
        <Content>
          <Row gutter={50}>
            <Col xs={24} sm={24} md={12} lg={12} xl={9}>
              <ImageViewerComponent func={search} item={item} />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={15}>
              <OverviewComponent item={item} />
              <AttributesComponent item={item} />
              <CollectionComponent item={item} />
              <OwnerComponent item={item} />
            </Col>
          </Row>
        </Content>
        </>
      )}
    </div>
  );
}

export default ItemPageComponent;
