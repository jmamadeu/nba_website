import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faNewspaper,
  faPlayCircle,
  faSignOutAlt,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";

import SideNav from "react-simple-sidenav";

import "./styles.css";

export default function SideNavigation(props) {
  function SideNavItems() {
    const items = [
      {
        type: "option",
        ico: faHome,
        text: "Home",
        link: "/"
      },
      {
        type: "option",
        ico: faNewspaper,
        text: "News",
        link: "/news"
      },
      {
        type: "option",
        ico: faPlayCircle,
        text: "Videos",
        link: "/videos"
      },
      {
        type: "option",
        ico: faSignInAlt,
        text: "Sign in",
        link: "/sign-in"
      },
      {
        type: "option",
        ico: faSignOutAlt,
        text: "Sign out",
        link: "/sin-out"
      }
    ];

    function showItems() {
      return items.map((item, i) => (
        <div key={i} className={item.type}>
          <Link to={item.link} className="list">
            <FontAwesomeIcon icon={item.ico} className="list logotipo" />
            {item.text}
          </Link>
        </div>
      ));
    }

    return <div>{showItems()}</div>;
  }

  return (
    <SideNav
      openFromRight={true}
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      title="NBA Website"
      titleStyle={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#242424",
        justifyContent: "center",
        height: "70px"
      }}
      items={["Home", "Contacts", "About"]}
      navStyle={{
        maxWidth: "250px",
        backgroundColor: "#242424"
      }}
      style={{
        background: "transparent"
      }}
      itemStyle={{
        listStyle: "none"
      }}
    >
      <SideNavItems className="list" />
    </SideNav>
  );
}
