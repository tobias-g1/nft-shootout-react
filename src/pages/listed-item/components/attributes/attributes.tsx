import './attributes.scss'

function AttributesComponent(props: any) {

    return (
        <div className="attribute-full">
            <h2>Attributes</h2>
            <div className="attribute-wrap">
            {
               props.item.metadata && props.item.metadata.length !== 0 ? props.item.metadata.map(attribute => {return <div className='attribute-chip'>
                   <span className="title">{attribute.trait_type}</span>
                   <span className="value">{attribute.value}</span>
               </div>}) : <div>None</div>
           }
            </div>
        </div>
    );
}

export default AttributesComponent;
