import './social-links.scss'
import { faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socialLinks = [
    {
        icon: faTwitter,
        link: ''
    },
    {
        icon: faDiscord,
        link: ''
    },
    {
        icon: faInstagram,
        link: ''
    }
]

function SocialLinksComponent(props: any) {
    return (
        <div className="social-links">
            {socialLinks.map(function (link, index) {
                return <a href={link.link} key={index} target="_blank"><FontAwesomeIcon icon={link.icon} /></a>;
            })
            }
        </div>
    );
}

export default SocialLinksComponent;
