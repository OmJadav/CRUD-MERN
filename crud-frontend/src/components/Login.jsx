import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container w-auto mx-auto flex-1 flex flex-col items-center justify-center px-4">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Log in</h1>
          <form
            noValidate
            onSubmit={handleSubmit((data) => {
              console.log("Form submitted:", data);
            })}
          >
            <div className="mb-4">
              <input
                id="email"
                type="text"
                className="block border border-gray-300 w-full p-3 rounded "
                placeholder="Email"
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
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
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
            >
              Log In
            </button>
          </form>

          <div className="text-center text-sm text-gray-700 mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-gray-700 text-gray-700"
              href="#"
            >
              {" "}
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-gray-700 text-gray-700"
              href="#"
            >
              {" "}
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-gray-700 mt-6">
          Don't Have an Account?
          <a
            className="no-underline border-b border-blue-500 text-blue-500"
            href="/signup"
          >
            Sign in
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default Login;
