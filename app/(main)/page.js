import { CardGrid } from "@/components/Card/CardGrid";
import img from "@/public/1.jpg";
import React from "react";

export default function Home() {
  const courses = [
    {
      id: 1,
      image: img,
      title: "JS for beginners",
      description:
        "In this course, you will learn everything about JavaScript from beginner level and become a JavaScript expert in a matter of hours. Sit back and learn JavaScript.",
      author: "Achille",
      price: "Subscription Required",
    },
    {
      id: 2,
      image: img,
      title: "Learn Python for beginners",
      description:
        "Python is one of the most popular programming languages in the world and provides simple programming syntax for developers who are beginning their development journey.",
      author: "Achille",
      price: "10,000",
    },
    {
      id: 3,
      image: img,
      title: "HTML & CSS Course",
      description:
        "Create a beautiful website designs with HTML and CSS. HTML helps you create a beautiful website framework and CSS helps you add beauty to it. For more information, learn this.",
      author: "Achille",
      price: "10,000",
    },
    {
      id: 4,
      image: img,
      title: "REACT JS for beginners",
      description:
        "React is one of the most popular JavaScript libraries out there and offers simpplicity and many tools for developing modern web applications. Hop on, let's learn more about React.",
      author: "Achille",
      price: "Subscription Required",
    },
  ];
  return (
    <div>
      <header className="py-4">
        <h1>Welcome to Techinika Technology School</h1>
      </header>
      <div className="p-10">
        <CardGrid data={courses} type={"courses"} />
      </div>
      <footer className="bg-gradient-radial py-4 text-center text-white">
        &copy; 2023 Technika School
      </footer>
    </div>
  );
}
