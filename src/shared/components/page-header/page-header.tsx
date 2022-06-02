import "./page-header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Affix } from "antd";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function PageHeaderComponent(props: any) {

  function showBack() {
    if (props.showBack) {
      return <FontAwesomeIcon onClick={() => window.history.back()} icon={faArrowLeftLong as IconProp}></FontAwesomeIcon>
    }
  }

  return (
    <div className="page-header-wrapper">
      <div className="page-header">
        {showBack()}
        <h2> {props.header} </h2>
      </div>
      <p>{props.description} </p>
    </div>
  );
}

export default PageHeaderComponent;
