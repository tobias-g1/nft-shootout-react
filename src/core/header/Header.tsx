import { Button, Menu } from "antd";
import { Layout } from "antd";
import './Header.scss';
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

const { Header } = Layout;

function HeaderComponent() {
  return (
    <Header>
      <div className="left-content">
      <img className="logo" src={logo} alt="Logo"></img>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Play</Menu.Item>
          <Menu.Item key="2">Store</Menu.Item>
          <Menu.Item key="3">My Players</Menu.Item>
          <Menu.Item key="4">Marketplace</Menu.Item>
        </Menu>
      </div>
      <div className="right-content">
        <Button size="large" className="pulse" type="primary">
          Connect
        </Button>
      </div>
    </Header>
  );
}

export default HeaderComponent;
