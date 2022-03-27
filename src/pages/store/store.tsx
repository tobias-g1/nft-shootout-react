import PageHeaderComponent from '../../shared/components/page-header/page-header';
import './store.scss'
import DocumentMeta from 'react-document-meta';

function StorePageComponent(props: any) {

    const title: string = 'Store'
    const meta: any = {
        title,
        description: 'TBA',
        meta: {}
      };

    return (
        <div className="my-players page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <DocumentMeta {...meta} />
            <PageHeaderComponent header={title} />
        </div>
    );
}

export default StorePageComponent;




