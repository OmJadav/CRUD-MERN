import React from "react";
import { useForm } from "react-hook-form";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useParams } from "react-router-dom";

export default function Edit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const params = useParams();
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-3  sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Edit Employee Details of {params.id}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-3xl py-6 sm:px-6 lg:px-8">
          {/* empform edit starts here / */}
          <form
            noValidate
            className="flex  flex-col gap-4 form-shadow "
            onSubmit={handleSubmit((data) => {
              console.log("Form submitted:", data);
            })}
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
                <Label htmlFor="jd" value="Date Of Joining" />
              </div>
              <TextInput
                id="jd"
                placeholder="dd-mm-yyyy"
                type="text"
                {...register("jd", { required: "DOJ is Required" })}
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
