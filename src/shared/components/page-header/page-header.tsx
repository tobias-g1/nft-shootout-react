import "./page-header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Affix } from "antd";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

function PageHeaderComponent(props: any) {

  const [offset, setOffset] = useState(100);

  function showBack() {
    if (props.showBack) {
      return (
        <FontAwesomeIcon
          onClick={() => window.history.back()}
          icon={faArrowLeftLong as IconProp}
        ></FontAwesomeIcon>
      );
    }
  }

  window.addEventListener('resize', calcOffset)

  function calcOffset() {
    if (window.innerWidth >= 1150) {
     setOffset(100);
    } else {
      setOffset(80);
    }
  }

  return (
    <Affix offsetTop={offset}>
      <div className="page-header-wrapper">
        <div className="page-header">
          {showBack()}
          <h2> {props.header} </h2>
        </div>
        <p>{props.description} </p>
      </div>
    </Affix>
  );
}

export default PageHeaderComponent;
