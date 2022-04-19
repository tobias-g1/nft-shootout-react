import PageHeaderComponent from '../../shared/components/page-header/page-header';
import './item.scss'
import DocumentMeta from 'react-document-meta';
import { Item } from '../../shared/models/item';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';


function ItemPageComponent(props: any) {

    const title: string = 'Item';
    const description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse';
    const meta: any = {
        title,
        description: 'TBA',
        meta: {}
      };

      const [item, setItem] = useState({});
      const [isLoading, toggleLoading] = useState(false);
      const location = useLocation();
      const { collectionAddress, tokenId } = useParams();
      const baseUrl = 'http://localhost:8082/'

      async function search() {
        toggleLoading(true)
        await axios.get(baseUrl + `items/single/${collectionAddress}/${tokenId}`)
          .then(res => {
            setItem(res.data.items)
            toggleLoading(false)
          })
      }
    
      useEffect(() => {
        search()
      }, [location]);

    return (
        <div className="item page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <DocumentMeta {...meta} />
            <PageHeaderComponent header={title} description={description}/>
        </div>
    );
}

export default ItemPageComponent;




