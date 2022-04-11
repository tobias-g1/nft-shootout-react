import { Layout } from "antd";
import './Header.scss';
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';
import AuthComponent from "../../shared/components/auth/auth";
import { faTimes, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const { Header } = Layout;

function HeaderComponent() {

  ;let showMenu = false;

  return (
    <>
        <Header>
      <div className="left-content">
      <img className="logo" src={logo} alt="Logo"></img>
        <ul className="wide">
          <Link to="play"><li>Play</li></Link>
          <Link to="store"><li>Store</li></Link>
          <Link to="open"><li>Open</li></Link>
          <Link to="my-players"><li>My Players</li></Link>
          <Link to="marketplace"><li>Marketplace</li></Link>
        </ul>
      </div>
      <div className="right-content">
        <AuthComponent />
        <FontAwesomeIcon className="menu narrow" icon={faBars} />
      </div>
    </Header>
    </>

    
  );
}

export default HeaderComponent;
