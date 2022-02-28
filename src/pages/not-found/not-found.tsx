import { Content } from "antd/lib/layout/layout";
import { Button } from 'antd';
import './not-found.scss'
import { Link } from "react-router-dom";
import DocumentMeta from 'react-document-meta';

function NotFoundPageComponent(props: any) {

    const meta: any = {
        title: '404',
        description: 'TBA',
        meta: {}
      };

    return (
        <div className="not-found">
            <DocumentMeta {...meta} />
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




