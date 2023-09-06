import Link from "next/link";
import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div>

      <div class="topnav" id="myTopnav">
        <a href="" class="active"> Techinika</a>
        <a href="">Home</a>
        <a href="">All Course</a>
        <a href="">Login</a>
        <a href="">Sign up</a>

        <i>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </i>
      </div>

    </div>

  )
}

export default Sidebar
