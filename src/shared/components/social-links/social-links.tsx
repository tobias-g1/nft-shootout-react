import React from 'react';
import './social-links.scss'
import { faHive, faTwitter, faDiscord, faMedium, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socialLinks = [
    {
        icon: faTwitter,
        link: 'https://twitter.com/mbl_hq'
    },
    {
        icon: faDiscord,
        link: 'https://discord.gg/5dcjQc8DG2'
    },
    {
        icon: faInstagram,
        link: 'https://instagram.com/monsterbattleleague'
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
