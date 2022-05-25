import { Layout } from 'antd';
import logo from '../../assets/img/logo.jpeg'
import './footer.scss'
import SocialLinksComponent from '../../shared/components/social-links/social-links';
import { Link } from 'react-router-dom';

const { Footer } = Layout;

function FooterComponent() {
    return (
        <Footer>
             <div className="wrapper">
           <div className="top">
               <img src={logo} alt="" />
               <div className="socials">
                   <SocialLinksComponent />
               </div>
           </div>
           <div className="middle">
               <ul>
                   <li className='rights-label'>All Rights Reserved</li>
                   <li><Link to="privacy">Privacy Policy</Link></li>
                   <li><Link to="terms">Terms & Conditions</Link></li>
                   <li><Link to="cookies">Cookies</Link></li>
               </ul>
           </div>
           <p>NFTShootouts exclusive marketplace for buying, selling, and discovering players and items to use in game. </p>
        </div>
        </Footer>
    );
}

export default FooterComponent;
