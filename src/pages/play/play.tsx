import PageHeaderComponent from '../../shared/components/page-header/page-header';
import './play.scss'
import DocumentMeta from 'react-document-meta';
import ContentStatusMessageComponent from '../../shared/components/content-status-message/content-status-message';
import { InfoMessage } from '../../shared/models/info-message.model';

function PlayPageComponent(props: any) {

    const title: string = 'Play'
    const meta: any = {
        title,
        description: 'TBA',
        meta: {}
      };

      const infoMessage: InfoMessage = {
        header: "Game preview coming soon",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis.",
        link: "/marketplace",
        buttonText: "Visit our Marketplace",
    };


    return (
        <div className="my-players page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <DocumentMeta {...meta} />
            <PageHeaderComponent header={title} />
            <ContentStatusMessageComponent header={infoMessage.header}
                    description={infoMessage.description}
                    link={infoMessage.link}
                    buttonText={infoMessage.buttonText}></ContentStatusMessageComponent>
        </div>
    );
}

export default PlayPageComponent;




