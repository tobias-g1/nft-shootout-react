import { Layout } from 'antd';
import logo from '../../assets/img/logo.png'
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
                   <li>All Rights Reserved</li>
                   <li><Link to="privacy">Privacy Policy</Link></li>
                   <li><Link to="terms">Terms & Conditions</Link></li>
                   <li><Link to="cookies">Cookies</Link></li>
               </ul>
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dictum ligula, eu vulputate sem. Phasellus tellus tortor, auctor id ullamcorper eu, finibus sit amet sem. </p>
        </div>
        </Footer>
    );
}

export default FooterComponent;
