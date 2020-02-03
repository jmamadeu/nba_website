import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Button(props) {
  let template = null;

  switch (props.type) {
    case "loadmore":
      template = (
        <div className="blue_btn" onClick={props.loadmore}>
          {props.cta}
        </div>
      );
      break;
    case "linkTo":
      template = (
        <Link to={props.linkTo} className="blue_btn">
          {props.cta}
        </Link>
      );
      break;
    default:
      template = null;
  }

  return <>{template}</>;
}
