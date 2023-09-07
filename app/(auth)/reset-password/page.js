"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
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
        className="bg-white  border border-gray-200 rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block  text-sm  mb-2" htmlFor="password">
            New Password
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
        <div className="mb-6">
          <button
            className="bg-cobalt-blue-hex hover:bg-ucla-blue-hex w-full text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Reset Password
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

export default ResetPassword;
