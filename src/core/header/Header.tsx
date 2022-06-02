import { Affix, Layout } from "antd";
import './Header.scss';
import logo from '../../assets/img/logo.jpeg'
import { Link } from 'react-router-dom';
import AuthComponent from "../../shared/components/auth/auth";
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import SocialLinksComponent from "../../shared/components/social-links/social-links";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const { Header } = Layout;

function HeaderComponent() {

  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const location = useLocation();

  useEffect(() => {
    setMenuVisible(false);
  }, [location]);


  return (
    <Affix>
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
          <FontAwesomeIcon onClick={toggleMenu} className="menu narrow" icon={faBars as IconProp} />
        </div>
      </Header>
      {isMenuVisible && <div className="menu-overlay">
      <FontAwesomeIcon onClick={toggleMenu} className="close" icon={faTimes as IconProp} />
        <img className="logo" src={logo} alt="Logo"></img>
        <ul>
          <Link to="play"><li>Play</li></Link>
          <Link to="store"><li>Store</li></Link>
          <Link to="open"><li>Open</li></Link>
          <Link to="my-players"><li>My Players</li></Link>
          <Link to="marketplace"><li>Marketplace</li></Link>
        </ul>
        <div className="socials">
          <SocialLinksComponent />
        </div>
      </div>
      }
   </Affix>


  );
}

export default HeaderComponent;
