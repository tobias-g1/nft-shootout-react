import "./player-card.scss";
import { Menu, Dropdown } from "antd";
import { MoreOutlined } from '@ant-design/icons';
import placeholder from '../../../assets/img/placeholder-card.png'

function PlayerCardComponent(props: any) {

    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="#">List for Sale</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="#">Transfer</a>
          </Menu.Item>
        </Menu>
      );

  return (
    <div className="player-card">
      <div className="header">
        <h3>Card Title</h3>
        <Dropdown overlay={menu} trigger={["click"]}>
            <MoreOutlined className="menu-icon"/>
        </Dropdown>
      </div>
      <img className="card-image" src={placeholder} alt="Card Placeholder" />
    </div>
  );
}

export default PlayerCardComponent;
