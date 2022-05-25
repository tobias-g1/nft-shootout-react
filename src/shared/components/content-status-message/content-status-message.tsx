import { Button } from "antd";
import { Link } from "react-router-dom";
import { InfoMessage } from "../../models/info-message.model";
import "./content-status-message.scss";

function ContentStatusMessageComponent(props: InfoMessage) {
    return (
        <div className="content-status-message">
                <h3 className="mb-15">{props.header}</h3>
                <p>{props.description}</p>
            <Link to={props.link}>
                <Button type='primary' size='large'>{props.buttonText}</Button>
            </Link>
        </div>
    );
}

export default ContentStatusMessageComponent;
