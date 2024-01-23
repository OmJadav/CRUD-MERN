import React from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, Label, TextInput, Textarea } from "flowbite-react";

function EmpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <form
        noValidate
        className="flex  flex-col gap-4 "
        onSubmit={handleSubmit((data) => {
          console.log("Form submitted:", data);
        })}
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
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
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
                value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
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
                value: /[789]\d{9}/g,
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
            <Label htmlFor="jd" value="Your Date Of Joining" />
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
            <Label htmlFor="address" value="Your Address" />
          </div>
          <Textarea
            id="address"
            type="text"
            {...register("address", { required: "Address is Required" })}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default EmpForm;
