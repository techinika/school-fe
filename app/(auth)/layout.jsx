import React from "react";

export default function layout({ children }) {
  return (
    <div className="bg-lavender-web min-h-screen">
      {/* <nav>Nav</nav> */}
      <main>{children}</main>
      
      {/* <footer>Footer</footer> */}
    </div>
  );
}
