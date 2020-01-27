import React from "react";

import logo from "../../images/nba_logo.png";

import { Link } from "react-router-dom";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="logo">
        <img src={logo} alt="logo nba" />
        @NBA {new Date().getFullYear()} All rights reserved.
      </Link>
    </footer>
  );
}
