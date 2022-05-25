import './collection.scss'
import logoSmall from '../../../../assets/img/logo-small.jpeg'

function CollectionComponent(props: any) {

    return (
        <div className="collection-full">
        <h2>Collection</h2>
        <div className="collection-wrap">
           <div className="image-wrap">
           <img src={logoSmall} alt="" />
           </div>
            <span>{props.item.name}</span>
        </div>
      </div>
    );
}

export default CollectionComponent;




