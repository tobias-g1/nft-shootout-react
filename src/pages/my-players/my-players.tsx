import { Content } from "antd/lib/layout/layout";
import InfoMessageComponent from "../../shared/components/info-message/info-message";
import PageHeaderComponent from "../../shared/components/page-header/page-header";
import { InfoMessage } from "../../shared/models/components/info-message.model";
import { Row, Col } from "antd";
import "./my-players.scss";
import PlayerCardComponent from "../../shared/components/player-card/player-card";
import DocumentMeta from 'react-document-meta';

function MyPlayersPageComponent(props: any) {
    const title: string = "My Players";
    const meta: any = {
        title,
        description: 'TBA',
        meta: {}
      };

    const infoMessage: InfoMessage = {
        header: "Searching for a new player?",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis, et consequat risus posuere. Suspendisse iaculis risus non risus mattis.",
        link: "/marketplace",
        buttonText: "Visit our Marketplace",
    };

    const placeholder = [1, 2, 3, 4]

    const cards = placeholder.map(function (item, i) {
        return <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <PlayerCardComponent></PlayerCardComponent>
        </Col>
    })



    return (
        <div className="my-players page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <DocumentMeta {...meta} />
            <PageHeaderComponent header={title} />
            <Content>
                <Row gutter={25}>
                    {cards}
                </Row>
                <InfoMessageComponent
                    header={infoMessage.header}
                    description={infoMessage.description}
                    link={infoMessage.link}
                    buttonText={infoMessage.buttonText}
                ></InfoMessageComponent>
            </Content>
        </div>
    );
}

export default MyPlayersPageComponent;
