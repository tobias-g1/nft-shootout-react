import { Content } from "antd/lib/layout/layout";
import InfoMessageComponent from "../../shared/components/info-message/info-message";
import PageHeaderComponent from "../../shared/components/page-header/page-header";
import { Row, Col } from "antd";
import "./my-players.scss";
import PlayerCardComponent from "../../shared/components/player-card/player-card";
import DocumentMeta from 'react-document-meta';
import { InfoMessage } from "../../shared/models/info-message.model";
import { players } from "../../dummy-data.js";

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

    const player = [1, 2, 3, 4]

    const cards = players.map(function (player, i) {
        return <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <PlayerCardComponent player={player}></PlayerCardComponent>
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
