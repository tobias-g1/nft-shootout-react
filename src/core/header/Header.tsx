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
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["4"]}>
          <Link to="play"><Menu.Item key="1">Play</Menu.Item></Link>
          <Link to="store"><Menu.Item key="2">Store</Menu.Item></Link>
          <Link to="my-players"><Menu.Item key="3">My Players</Menu.Item></Link>
          <Link to="marketplace"><Menu.Item key="4">Marketplace</Menu.Item></Link>
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
