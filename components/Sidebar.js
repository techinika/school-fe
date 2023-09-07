import React from "react";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { FaYoutubeSquare } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";
function Sidebar() {
  return (
    <div>
      <div class="sidebar">
        <a class="active" href="#home">
          <div class="logo ml-10">
            <img src="https://th.bing.com/th?id=ODL.8c39a179f99b42d8ae181a59a06c2db2&w=80&h=80&c=1&vt=9&bgcl=e97f14&r=0&o=6&pid=5.1" />
          </div>
        </a>
        <a href="#home" class="icons ml-3 mobile"  ><AiOutlineHome size='1.5rem' class='icons ml-3  ' />Techinika </a>
        <a href="#home" class="icons ml-3"><FaYoutubeSquare size='1.5rem' class='icons' />Youtube Channel</a>
        <a href="#home" class="icons ml-3"><GiGraduateCap size='1.5rem' class='icons' />All course</a>
        <a href="#home" class="icons ml-3"><RiAccountCircleLine size='1.5rem' class='icons' />Sign Up</a>
        <a href="#home" class="icons ml-3"><BiLogIn size='1.5rem' class='icons' />Login</a>

      </div>
    </div>
  );
}

export default Sidebar;
