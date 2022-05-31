import FormattingService from '../../../../core/services/formatting.service';
import './attributes.scss'

function AttributesComponent(props: any) {

    return (
        <div className="attribute-full">
            <h2>Attributes</h2>
            <div className="attribute-wrap">
            {
               props.item.attributes && props.item.attributes.length !== 0 ? props.item.attributes.map((attribute, index) => {return <div key={index} className='attribute-chip'>
                   <span className="title">{FormattingService.formatAttributeNames(attribute.trait_type)}</span>
                   <span className="value">{attribute.value}</span>
               </div>}) : <div>None</div>
           }
            </div>
        </div>
    );
}

export default AttributesComponent;
