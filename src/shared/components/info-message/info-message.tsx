import "./info-message.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { InfoMessage } from "../../models/info-message.model";

function InfoMessageComponent(props: InfoMessage) {
    return (
        <div className="info-message">
            <div className="left">
                <h3 className="mb-15">{props.header}</h3>
                <p>{props.description}</p>
            </div>
            <Link to={props.link}>
                <Button type='primary' size='large'>{props.buttonText}</Button>
            </Link>
        </div>
    );
}

export default InfoMessageComponent;
