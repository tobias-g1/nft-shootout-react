import './social-links.scss'
import { faTwitter, faDiscord, faFacebook, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socialLinks = [
    {
        icon: faTwitter,
        link: 'https://twitter.com/NFTshootout'
    },
    {
        icon: faDiscord,
        link: 'https://discord.com/invite/YQa5HCX3gB'
    },
    {
        icon: faTelegram,
        link: 'https://t.me/NFTShootout'
    },
    {
        icon: faFacebook,
        link: 'https://www.facebook.com/nftshootout/'
    },
    {
        icon: faYoutube,
        link: 'https://youtube.com/channel/UCtCbdo5Q-acSubq_IPSMxlQ'
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
