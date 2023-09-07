"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Implement logic to send a password reset email
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-gray-200 rounded px-8 pt-6 pb-8 mb-4"
      >
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
          <button
            className="bg-cobalt-blue-hex text-sm hover:bg-ucla-blue-hex w-full text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Reset Link
          </button>
        </div>
        <div className="mb-4 text-sm text-center">
          <p>
            Remembered your password?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
