"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full max-w-xs mx-auto mt-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" border  border-gray-200 rounded-md px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-center text-3xl font-semibold mb-4">Login</h1>
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
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
          <label className="block text-sm  mb-2" htmlFor="password">
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
          <Link
            href="/forgot-password"
            className="flex  item-center my-2 text-sm cursor-pointer text-cobalt-blue-hex justify-end"
          >
            Forgot Password
          </Link>
        </div>
        <div className="">
          <button
            className="bg-cobalt-blue-hex text-sm hover:bg-ucla-blue-hex text-white  w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
        <p className="text-center text-sm my-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 cursor-pointer">
            Sign up
          </Link>
        </p>
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
            <span>Sign in with Google</span>
          </button>
        </div>
      </form>
    </div>
  );
}
