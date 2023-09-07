import Link from "next/link";
import React from "react";
import "./sidebar.css";


function Sidebar() {
  return (
    <div>

      <div class="sidebar">
        <div class="card">
        <a class="active" href="#home">Techinika</a>
        </div>
        <a href="#home">Home</a>
        <a href="#course">All Course</a>
        <a href="#login">Login</a>
        <a href="#signup">Sign Up</a>
      </div>
      
    </div >

  )
}

export default Sidebar
