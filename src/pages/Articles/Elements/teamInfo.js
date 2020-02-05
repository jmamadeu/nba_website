import React, { useState } from "react";

import "../styles.css";
import "../styles.css";

export default function TeamInfo(props) {
  return (
    <>
      <div className="articleTeamHeader">
        {props.team.logo}
        <div
          className="left"
          style={{
            background: `url('../../../assets/images/teams/${props.team.logo}')`
          }}
        ></div>
        {/* <img
          src={require(`../../../assets/images/teams/${props.team.logo}`)}
          alt="foto"
        /> */}
        <div className="right"></div>
      </div>
    </>
  );
}
