import React, { useState } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./styles.css";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);

  function toggleSideNav(action) {
    setShowNav(action);
  }

  return (
    <div>
      <Header
        showNav={showNav}
        onHideNav={() => toggleSideNav(false)}
        onOpenNav={() => toggleSideNav(true)}
      />
      {children}
      <Footer />
    </div>
  );
}
