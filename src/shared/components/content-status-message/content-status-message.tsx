import { Button } from "antd";
import { Link } from "react-router-dom";
import { InfoMessage } from "../../models/components/info-message.model";
import "./content-status-message.scss";

function ContentStatusMessageComponent(props: InfoMessage) {
    return (
        <div className="content-status-message">
                <h2 className="mb-5">{props.header}</h2>
                <p>{props.description}</p>
            <Link to={props.link}>
                <Button type='primary' size='large'>{props.buttonText}</Button>
            </Link>
        </div>
    );
}

export default ContentStatusMessageComponent;
