import { CardGrid } from "@/components/Card/CardGrid";
import { type } from "os";
import React from "react";

export default function Home() {
  const courses = [
    {
      id: 1,
      image: "/1.jpg",
      title: "JS for beginners",
      description: "Learn JS from 0",
      author: "Achille",
      price: "10,000",
    },
    {
      id: 2,
      image: "/1.jpg",
      title: "JS for beginners",
      description: "Learn JS from 0",
      author: "Achille",
      price: "10,000",
    },
    {
      id: 3,
      image: "/1.jpg",
      title: "JS for beginners",
      description: "Learn JS from 0",
      author: "Achille",
      price: "10,000",
    },
    {
      id: 4,
      image: "/1.jpg",
      title: "JS for beginners",
      description: "Learn JS from 0",
      author: "Achille",
      price: "10,000",
    },
    {
      id: 5,
      image: "/1.jpg",
      title: "JS for beginners",
      description: "Learn JS from 0",
      author: "Achille",
      price: "10,000",
    },
  ];
  return (
    <div>
      <header className="bg-ucla-blue-hex text-white py-4">
        <h1>Welcome to Techinika Technology School</h1>
      </header>
      <CardGrid data={courses} type={"courses"} />
      <footer className="bg-gradient-radial py-4 text-center text-white">
        &copy; 2023 Technika School
      </footer>
    </div>
  );
}
