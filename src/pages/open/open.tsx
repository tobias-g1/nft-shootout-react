import PageHeaderComponent from '../../shared/components/page-header/page-header';
import './open.scss'
import DocumentMeta from 'react-document-meta';
import { Outlet } from 'react-router-dom';

function OpenPageComponent(props: any) {

    const title: string = 'Open';
    const description: string = 'Open packs to expand your teams, stadiums & staff.'
    const meta: any = {
        title,
        description: 'TBA',
        meta: {}
    };

    return (
        <div
            className="open page-wrapper"
            style={{ backgroundImage: "url(/assets/img/background.jpeg)" }}
        >
            <DocumentMeta {...meta} />
            <PageHeaderComponent header={title} description={description} />
            <Outlet />
        </div>
    );
}

export default OpenPageComponent;




