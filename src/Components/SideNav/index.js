import React from "react";

import SideNav from "react-simple-sidenav";

export default function SideNavigation(props) {
  return (
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
        background: "#242424",
        maxWidth: "220px"
      }}
    >
      OPTIONS
    </SideNav>
  );
}
