import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex flex-col  ">
      <div className="logo   p-4 flex justify-center items-center">
        <img src="/favicon.ico" alt="" className="h-12 w-12" />
      </div>
      {/* <nav>Nav</nav> */}
      <main className="bg-white h-screen-80 flex justify-center items-center">
        {children}
      </main>

      <div className="bg-gradient-radial flex items-center justify-center">
        <footer className="bg-gradient-radial py-4 text-center text-white">
          &copy; {new Date().getFullYear()} Technika Technology School
        </footer>
      </div>
    </div>
  );
}
