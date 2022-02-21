import { Layout } from 'antd';
import logo from '../../assets/img/logo.png'
import './footer.scss'
import SocialLinksComponent from '../../shared/components/social-links/social-links';

const { Footer } = Layout;

function FooterComponent() {
    return (
        <Footer>
            <div className="left-content">
                <img src={logo} alt="Logo" />
            </div>
            <div className="right-content">
                <SocialLinksComponent />
            </div>
        </Footer>
    );
}

export default FooterComponent;
