"use client";

import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace with your login logic
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border-gray-200 border rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-center text-2xl font-semibold mb-4">Sign Up</h1>
        <div className="mb-4">
          <label className="block  text-sm  mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            {...register("fullName", { required: "Full Name is required" })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.fullName ? "border-red-500" : ""
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs italic">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block  text-sm  mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: /^\S+@\S+$/i,
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="block  text-sm  mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: 6,
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex  gap-4 flex-col">
          <button
            className="bg-cobalt-blue-hex text-sm hover:bg-ucla-blue-hex text-white  w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
          <span className="text-sm">
            <span>Already have an account? </span>
            <Link href="/login" className="text-blue-500 hover:text-blue-800">
              Log in
            </Link>
          </span>
        </div>
        <div className=" mt-4">
          <button
            className="bg-white w-full  border border-gray-100 flex items-center justify-around gap-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            <span>
              <Image
                src="/google.png"
                alt="google"
                className="h-6 w-6"
                width={6}
                height={6}
              />
            </span>
            <span>Sign up with Google</span>
          </button>
        </div>
      </form>
    </div>
  );
}
