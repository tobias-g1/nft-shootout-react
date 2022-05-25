import "./owner.scss";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OwnerComponent(props: any) {
  return (
    <div className="owner-full">
      <h2>Owner</h2>
      <div className="owner-wrap">
          <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>
          <span> {props.item.owner}</span>
      </div>
    </div>
  );
}

export default OwnerComponent;
