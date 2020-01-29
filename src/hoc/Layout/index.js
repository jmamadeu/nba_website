import React, { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
