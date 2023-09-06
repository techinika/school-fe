import { CardGrid } from "@/components/Card/CardGrid";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function Home() {
  const courses = [
    {
      id: 1,
      image:
        "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/01170800/Free-Online-Courses-with-Certificates.jpg",
      title: "JS for beginners",
      description:
        "In this course, you will learn everything about JavaScript from beginner level and become a JavaScript expert in a matter of hours. Sit back and learn JavaScript.",
      author: "Achille",
      price: true,
      featured: true,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Python is the best",
      description:
        "Python is one of the most popular programming languages in the world and provides simple programming syntax for developers who are beginning their development journey.",
      author: "Achille",
      price: false,
      featured: false,
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1681248156500-8f209e8e466e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "HTML & CSS Course",
      description:
        "Create a beautiful website designs with HTML and CSS. HTML helps you create a beautiful website framework and CSS helps you add beauty to it. For more information, learn this.",
      author: "Achille",
      price: true,
      featured: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "REACT JS for beginners",
      description:
        "React is one of the most popular JavaScript libraries out there and offers simpplicity and many tools for developing modern web applications. Hop on, let's learn more about React.",
      author: "Achille",
      price: true,
      featured: true,
    },
  ];

  return (
    <>
      <div>
        <header className="py-4 text-white font-bold">
          <h1 className="text-2xl">Techinika Technology School</h1>
          <p className="text-xl">Build the future...</p>
          <button className="btn">{`Become our student`} &nbsp; &raquo;</button>
        </header>
        <div className="p-10">
          <CardGrid data={courses} type={"courses"} />
        </div>
        <footer className="bg-gradient-radial py-4 text-center text-white">
          &copy; 2023 Technika Technology School
        </footer>
      </div>
    </>
  );
}
