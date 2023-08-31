import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="bg-lavender-web text-gray-800 min-h-screen">
      <h1 className="text-5xl text-center font-bold pt-20">
        Techinika e-learning platform
      </h1>

      {/**
         Dummy text to describe e learning platform
          */}
      <div
        className="
        flex justify-center p-4 gap-4 items-center
      "
      >
        <div className="flex flex-col space-y-4">
          <button className="bg-chefchaouen-blue text-white py-2 px-4 rounded">
            Chefchaouen Blue Button
          </button>
          <p className="text-dark-blue">This is a Dark Blue Text.</p>
          <div className="bg-text-color p-4 rounded">
            <p className="text-white">Text with Text Color Background</p>
          </div>
          <div className="bg-lavender-web p-4 rounded">
            <p className="text-dark-blue">Text on Lavender Web Background</p>
          </div>
          <div className="bg-alice-blue p-4 rounded border border-vermilion">
            <p className="text-dark-blue">
              Alice Blue Background with Vermilion Border
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
