import { Button } from "flowbite-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import backendUrl from "../urlhelper/urlHelper";
import axios from "axios";
import Loader from "./Loader";
import Swal from "sweetalert2";

function Login() {
  let [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userLogin = async (userData) => {
    try {
      setloading(true);
      const response = (await axios.post(`${backendUrl}/login`, userData)).data;
      setloading(false);
      localStorage.setItem("currentUser", JSON.stringify(response.data));

      Swal.fire("Success", response.data.message, "success").then(
        () => (window.location.href = "/")
      );
      console.log("Form submitted:", response.data);
    } catch (error) {
      console.log(error.response.error);

      Swal.fire(error.response.error, "Login failed", "error");
      setloading(false);
    }
  };
  return (
    <>
      {loading && <Loader />}
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <div className="container w-auto mx-auto flex-1 flex flex-col items-center justify-center px-4">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Log in</h1>
            <form noValidate onSubmit={handleSubmit(userLogin)}>
              <div className="mb-4">
                <input
                  id="email"
                  type="text"
                  className="block border border-gray-300 w-full p-3 rounded "
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
                  type="password"
                  {...register("password", {
                    required: "password is required",
                  })}
                  className="block border border-gray-300 w-full p-3 rounded "
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              {/* <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
            >
              Log In
            </button> */}
              <Button
                type="submit"
                className="w-full text-2xl text-center py-1 "
                color="purple"
              >
                Log In
              </Button>
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
                href="#"
              >
                {" "}
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="text-gray-700 mt-6">
            Don't Have an Account?
            <Link
              className="no-underline border-b border-blue-500 text-blue-500"
              to="/signup"
            >
              Sign in
            </Link>
            .
          </div>
          <div className="text-gray-700 mt-6">
            <Link
              className="no-underline border-b border-blue-500 text-blue-500"
              to="/"
            >
              Return back to Home page
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
