import { Content } from "antd/lib/layout/layout";
import { Button } from 'antd';
import './not-found.scss'
import { Link } from "react-router-dom";

function NotFoundPageComponent(props: any) {

    return (
        <div className="not-found">
            <Content>
                <div className="not-found-header">
                    <h2>404 - Page Not Found</h2>
                    <p>Sorry, we couldn't find the page you're looking for.</p>
                </div>
                <div className="content">
                <Link to="/not-found"><Button type="primary" size="large">Back Home</Button></Link>
                </div>
            </Content>
        </div>
    );
}

export default NotFoundPageComponent;




