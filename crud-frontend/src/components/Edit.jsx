import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import Swal from "sweetalert2";
import backendUrl from "../urlhelper/urlHelper";

export default function Edit() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  let [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const params = useParams();
  const empid = params.empid;
  useEffect(() => {
    const fetchEmpById = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${backendUrl}/view/${empid}`);
        // setEmpDetails(response.data);
        setValue("name", response.data.name);
        setValue("email", response.data.email);
        setValue("phone", response.data.phone);
        setValue("role", response.data.role);
        setValue("salary", response.data.salary);
        setValue("doj", response.data.doj);
        setValue("address", response.data.address);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error edit by id axios:", error);
      }
    };
    fetchEmpById();
  }, [empid, setValue]);

  const updateDetails = async (data) => {
    // reset();
    try {
      const response = await axios.post(`${backendUrl}/edit/${empid}`, data);
      Swal.fire("Success", response.data.message, "success").then(() => {
        navigate("/");
      });
      console.log(response.data.message);
    } catch (error) {
      console.log("Error Updating user axios:", error);
      Swal.fire("Something Went Wrong", error.response.data.error, "error");
    }
  };
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-3  sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Edit Employee Details
          </h1>
        </div>
      </header>
      {loading && <Loader />}

      <main>
        <div className="mx-auto max-w-3xl py-6 sm:px-6 lg:px-8">
          {/* empform edit starts here / */}
          <form
            noValidate
            className="flex  flex-col gap-4 form-shadow "
            onSubmit={handleSubmit(updateDetails)}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Full Name" />
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
                <Label htmlFor="email" value="Email" />
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
                <Label htmlFor="phone" value="Phone Number" />
              </div>
              <TextInput
                id="phone"
                type="number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
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
                <Label htmlFor="role" value="Role/Designation" />
              </div>
              <TextInput
                id="role"
                type="text"
                {...register("role", { required: "Role is Required" })}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="salary" value="Salary" />
              </div>
              <TextInput
                id="salary"
                type="number"
                {...register("salary", { required: "Salary is Required" })}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="doj" value="Date Of Joining(dd-mm-yyyy)" />
              </div>
              <TextInput
                id="doj"
                type="text"
                {...register("doj", { required: "DOJ is Required" })}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="Address" />
              </div>
              <Textarea
                id="address"
                type="text"
                {...register("address", { required: "Address is Required" })}
              />
            </div>

            <Button type="submit">Update</Button>
          </form>
          {/* empform edit ends here / */}
        </div>
      </main>
    </>
  );
}
