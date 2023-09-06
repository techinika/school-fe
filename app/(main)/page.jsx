import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <header className="bg-ucla-blue-hex text-white py-4">
        <h1>Welcome to heloTechinika E-Learning</h1>
      </header>
      <main className="p-8">
        <div className="bg-gradient-top p-4 m-4 rounded-lg shadow-lg">
          <h2 className="text-cobalt-blue-hex">Course 1</h2>
          <p className="text-outer-space-hsl">Learn about Web Development</p>
        </div>
        <div className="bg-gradient-right p-4 m-4 rounded-lg shadow-lg">
          <h2 className="text-ucla-blue-hex">Course 2</h2>
          <p className="text-raisin-black-hsl">Explore Machine Learning</p>
        </div>
        <div className="bg-gradient-bottom p-4 m-4 rounded-lg shadow-lg">
          <h2 className="text-cobalt-blue-hex">Course 3</h2>
          <p className="text-outer-space-hsl">Master Mobile App Development</p>
        </div>
        <div className="bg-gradient-left p-4 m-4 rounded-lg shadow-lg">
          <h2 className="text-raisin-black-hex">Course 4</h2>
          <p className="text-cobalt-blue-hsl">Discover Data Science</p>
        </div>
      </main>
      <footer className="bg-gradient-radial py-4 text-center text-white">
        &copy; 2023 Technika E-Learning
      </footer>
    </div>
  );
}
