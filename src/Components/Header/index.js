import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logoNBA from "../../assets/images/nba_logo.png";
import "./styles.css";

import SideNav from "../SideNav";

export default function Header(props) {
  function logo() {
    return (
      <Link to="/" style={{ background: "#242424" }} className="logo">
        <img
          src={logoNBA}
          alt="nba logo"
          style={{ background: "#242424" }}
          className="logo"
        />
      </Link>
    );
  }

  function navBars() {
    return (
      <div className="bars">
        <FontAwesomeIcon
          icon={faBars}
          style={{
            color: "#dfdf",
            background: "#242424",
            cursor: "pointer",
            margin: 7,
            marginTop: 10
          }}
          onClick={props.onOpenNav}
        />
      </div>
    );
  }

  return (
    <header className="header">
      <SideNav {...props} />

      <div className="headerOpt">
        {navBars()}
        {logo()}
      </div>
    </header>
  );
}
