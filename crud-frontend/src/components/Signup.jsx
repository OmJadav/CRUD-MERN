import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registered = async (data) => {
    reset();
    try {
      const response = await axios.post("/signup", data);
      console.log("User registered successfully:", response.data);
    } catch (error) {
      console.log("Error registering user axios:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container w-auto mx-auto flex-1 flex flex-col items-center justify-center px-4">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form noValidate onSubmit={handleSubmit(registered)}>
            <div className="mb-4">
              <input
                id="name"
                type="text"
                className="block border border-gray-300 w-full p-3 rounded "
                {...register("name", { required: "Name is Required" })}
                defaultValue={""}
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                id="email"
                type="text"
                className="block border border-gray-300 w-full p-3 rounded "
                defaultValue={""}
                placeholder="Email"
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    // value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                    value: /\b\w+@[\w.-]+\.\w{2,4}\b/gi,
                    message: "email not valid",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                id="password"
                defaultValue={""}
                type="password"
                {...register("password", {
                  minLength: {
                    value: 4,
                    message: "Minimum 4 characters for password",
                  },
                  required: "password is required",
                })}
                className="block border border-gray-300 w-full p-3 rounded "
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                id="confirm_password"
                defaultValue={""}
                type="password"
                {...register("confirm_password", {
                  validate: (value, formValues) =>
                    value === formValues.password || "password not matching",
                })}
                className="block border border-gray-300 w-full p-3 rounded "
                placeholder="Confirm Password"
              />
              {errors.confirm_password && (
                <p className="text-red-500">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-center  py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>
          <div className="text-center text-sm text-gray-700 mt-4">
            By signing up, you agree to the
            <Link
              className="no-underline border-b border-gray-700 text-gray-700"
              to="#"
            >
              {" "}
              Terms of Service
            </Link>{" "}
            and
            <Link
              className="no-underline border-b border-gray-700 text-gray-700"
              to="#"
            >
              {" "}
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="text-gray-700 mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue-500 text-blue-500"
            to="/login"
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default Signup;
