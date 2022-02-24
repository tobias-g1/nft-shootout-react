import { Button} from "antd";
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
        <ul>
          <Link to="play"><li>Play</li></Link>
          <Link to="store"><li>Store</li></Link>
          <Link to="my-players"><li>My Players</li></Link>
          <Link to="marketplace"><li>Marketplace</li></Link>
        </ul>
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
