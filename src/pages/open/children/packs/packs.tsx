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
            "You don't have any packs to open at the moment. Visit our store to purchase new packs.",
        link: "/store",
        buttonText: "Visit our Store",
    };

    return (
        <div className="packs">
            <DocumentMeta {...meta} />
            <ContentStatusMessageComponent header={infoMessage.header}
                    description={infoMessage.description}
                    link={infoMessage.link}
                    buttonText={infoMessage.buttonText}></ContentStatusMessageComponent>
        </div>
    );
}

export default OpenPacksPageComponent;




