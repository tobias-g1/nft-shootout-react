import './page-header.scss'

function PageHeaderComponent(props: any) {
    return (
        <div className="page-header">
        <h2> { props.header } </h2>
     </div>
    );
}

export default PageHeaderComponent;
