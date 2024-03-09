import React from "react";
import { useFormik } from "formik";

export function UserForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name.trim()) {
        errors.name = "Name is required";
      }

      if (!values.email.trim()) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid email format";
      }

      if (!values.phone.trim()) {
        errors.phone = "Phone number is required";
      }

      return errors;
    },
    onSubmit: (values) => {
      // Your form submission logic here
      console.log("Form submitted:", values);
    },
  });

  return (
    <div className="px-2 md:px-0">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          User Form Details
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Write about yourself
        </p>
        <form onSubmit={formik.handleSubmit} className="mt-6 space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...formik.getFieldProps("name")}
              placeholder="Enter a name"
              required
              autoFocus
              className={`${
                formik.errors.name && formik.touched.name
                  ? "border-red-500"
                  : ""
              } placeholder:text-sm placeholder:font-normal w-full py-1.5 border-gray-100 text-black text-sm font-normal outline-none ring-1 focus:ring-indigo-600 border rounded px-2`}
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              placeholder="Enter an email address"
              required
              className={`${
                formik.errors.email && formik.touched.email
                  ? "border-red-500"
                  : ""
              } placeholder:text-sm placeholder:font-normal w-full py-1.5 border-gray-100 text-black text-sm font-normal outline-none ring-1 focus:ring-indigo-600 border rounded px-2`}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              {...formik.getFieldProps("phone")}
              placeholder="Enter a phone number"
              required
              className={`${
                formik.errors.phone && formik.touched.phone
                  ? "border-red-500"
                  : ""
              } placeholder:text-sm placeholder:font-normal w-full border-gray-100 text-black text-sm font-normal outline-none py-1.5 ring-1 focus:ring-indigo-600 border rounded px-2`}
            />
            {formik.errors.phone && formik.touched.phone && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300"
          >
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}
