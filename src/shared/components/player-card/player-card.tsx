import "./player-card.scss";
import { Menu, Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import placeholder from "../../../assets/img/placeholder-card.png";
import { useRef, useState } from "react";
import ListingForSaleModal from "../listing-modal/listing-modal";

function PlayerCardComponent(props: any) {

  const fref: any = useRef()
  const handleClick = (e: any) => {
    fref.current.toggleModal()
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a
          href="#"
          onClick={handleClick}
        >
          List for Sale
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="player-card">
        <div className="header">
          <h3>Card Title</h3>
          <Dropdown overlay={menu} trigger={["click"]}>
            <MoreOutlined className="menu-icon" />
          </Dropdown>
        </div>
        <img className="card-image" src={placeholder} alt="Card Placeholder" />
      </div>
      <ListingForSaleModal ref={fref} ></ListingForSaleModal>
    </>
  );
}

export default PlayerCardComponent;
