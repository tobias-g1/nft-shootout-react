import "./page-header.scss";

function PageHeaderComponent(props: any) {
  return (
    <div className="page-header-wrapper">
      <div className="page-header">
        <h2> {props.header} </h2>
      </div>
      <p>{props.description} </p>
    </div>
  );
}

export default PageHeaderComponent;
