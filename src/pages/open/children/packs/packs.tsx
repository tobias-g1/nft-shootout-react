import './packs.scss'
import DocumentMeta from 'react-document-meta';
import ContentStatusMessageComponent from '../../../../shared/components/content-status-message/content-status-message';
import { InfoMessage } from '../../../../shared/models/info-message.model';

function OpenPacksPageComponent(props: any) {

    const title: string = 'Open';
    const meta: any = {
        title,
        description: 'TBA',
        meta: {}
      };

      const infoMessage: InfoMessage= {
        header: "You have no packs to open",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis.",
        link: "/marketplace",
        buttonText: "Visit our Marketplace",
    };

    return (
        <div className="packs page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <DocumentMeta {...meta} />
            <ContentStatusMessageComponent header={infoMessage.header}
                    description={infoMessage.description}
                    link={infoMessage.link}
                    buttonText={infoMessage.buttonText}></ContentStatusMessageComponent>
        </div>
    );
}

export default OpenPacksPageComponent;




