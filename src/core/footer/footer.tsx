import { Layout } from 'antd';
import logo from '../../assets/img/logo.png'
import './footer.scss'
import SocialLinksComponent from '../../shared/components/social-links/social-links';

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
                   <li><a>Privacy Policy</a></li>
                   <li><a>Terms & Conditions</a></li>
                   <li><a>Cookies</a></li>
               </ul>
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dictum ligula, eu vulputate sem. Phasellus tellus tortor, auctor id ullamcorper eu, finibus sit amet sem. </p>
        </div>
        </Footer>
    );
}

export default FooterComponent;
