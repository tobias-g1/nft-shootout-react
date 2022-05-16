import "./info-message.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { InfoMessage } from "../../models/info-message.model";

function InfoMessageComponent(props: InfoMessage) {
    return (
        <div className="info-message">
            <div className="left">
                <h2 className="mb-5">{props.header}</h2>
                <p>{props.description}</p>
            </div>
            <Link to={props.link}>
                <Button type='primary' size='large'>{props.buttonText}</Button>
            </Link>
        </div>
    );
}

export default InfoMessageComponent;
