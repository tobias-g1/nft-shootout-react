import { Content } from 'antd/lib/layout/layout';
import InfoMessageComponent from '../../shared/components/info-message/info-message';
import PageHeaderComponent from '../../shared/components/page-header/page-header';
import { InfoMessage } from '../../shared/models/components/info-message.model';
import './my-players.scss'

function MyPlayersPageComponent(props: any) {

    const title: string = 'My Players'
    const infoMessage: InfoMessage = {
        header: 'Searching for a new player?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere.',
        link: '/marketplace',
        buttonText: 'Visit our Marketplace'
    }

    return (
        <div className="my-players page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <PageHeaderComponent header={title} />
           <Content>
           <InfoMessageComponent header={infoMessage.header} description={infoMessage.description} link={infoMessage.link} buttonText={infoMessage.buttonText}></InfoMessageComponent>
           </Content>
        </div>
    );
    
}

export default MyPlayersPageComponent;



