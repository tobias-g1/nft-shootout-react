import "./nft-overview.scss";

function OverviewComponent(props: any) {
  return (
    <div className="overview-full">
      <h1>{props.item.name + ' #' + props.item.tokenId}</h1>
      <p> {props.item.description}</p>
    </div>
  );
}

export default OverviewComponent;
