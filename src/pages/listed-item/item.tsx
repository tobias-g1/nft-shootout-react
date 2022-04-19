import PageHeaderComponent from '../../shared/components/page-header/page-header';
import './item.scss'
import DocumentMeta from 'react-document-meta';
import { Item } from '../../shared/models/item';


function ItemPageComponent(props: any) {

    const title: string = 'Item';
    const description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse';
    const meta: any = {
        title,
        description: 'TBA',
        meta: {}
      };

    return (
        <div className="item page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <DocumentMeta {...meta} />
            <PageHeaderComponent header={title} description={description}/>
        </div>
    );
}

export default ItemPageComponent;




