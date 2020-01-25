import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      Header
      {children}
      Footer
    </div>
  );
}
