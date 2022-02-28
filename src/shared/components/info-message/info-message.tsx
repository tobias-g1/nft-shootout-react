import "./info-message.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InfoMessage } from "../../models/components/info-message.model";
import { Button } from "antd";
import { Link } from "react-router-dom";

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
