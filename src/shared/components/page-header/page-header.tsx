import "./page-header.scss";

function PageHeaderComponent(props: any) {
  return (
    <div className="page-header">
      <h2> {props.header} </h2>
      <p> {props.description} </p>
    </div>
  );
}

export default PageHeaderComponent;
