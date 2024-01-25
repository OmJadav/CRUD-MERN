import React from "react";
import { useForm } from "react-hook-form";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import axios from "axios";

function EmpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registered = async (data) => {
    // reset();
    try {
      const response = await axios.post("http://localhost:5000/addemp", data);
      console.log("Employee added successfully:", response.data);
    } catch (error) {
      console.log("Error Employee adding:", error);
    }
  };

  return (
    <>
      {/* <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Add Employee in Database
          </h1>
        </div>
      </header>
      <main> */}
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {/* employee adding form  */}
        <form
          className="flex  flex-col gap-4 "
          // onSubmit={handleSubmit((data) => {
          //   console.log("Form submitted:", data);
          // })}
          noValidate
          onSubmit={handleSubmit(registered)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Full Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              {...register("name", { required: "Name is Required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
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
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Your Phone Number" />
            </div>
            <TextInput
              id="phone"
              type="number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  // value: /[6-9]\d{9}/g,
                  value: /^[6-9]\d{9}$/g,
                  message: "Number not valid",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="role" value="Your Role/Designation" />
            </div>
            <TextInput
              id="role"
              type="text"
              {...register("role", { required: "Role is Required" })}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="role" value="Your Salary" />
            </div>
            <TextInput
              id="salary"
              type="number"
              {...register("salary", { required: "salary is Required" })}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="jd" value="Your Date Of Joining" />
            </div>
            <TextInput
              id="doj"
              placeholder="dd-mm-yyyy"
              type="text"
              {...register("doj", { required: "DOJ is Required" })}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="address" value="Your Address" />
            </div>
            <Textarea
              id="address"
              type="text"
              {...register("address", { required: "Address is Required" })}
            />
          </div>

          <Button type="submit">Add</Button>
        </form>
        {/* employee adding form  */}
      </div>
      {/* </main> */}
    </>
  );
}

export default EmpForm;
