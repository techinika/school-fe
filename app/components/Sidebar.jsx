import Link from "next/link";
import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div>

      <div class="sidebar">
        <a class="active" href="#home">Techinika</a>
        <a href="#home">Home</a>
        <a href="#course">All Course</a>
        <a href="#login">Login</a>
        <a href="#signup">Sign Up</a>

        <div class="icon">
          <i>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </i >
        </div>
      </div>
    </div >

  )
}

export default Sidebar
