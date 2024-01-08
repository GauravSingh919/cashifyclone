import React, { useState } from "react";
export function UserForm() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    // Allow only numeric characters (0-9)
    const inputValue = event.target.value;
    const regex = /^[0-9]*$/;

    if (regex.test(inputValue)) {
      setValue(inputValue);
    }
  };
  return (
    <div className="px-2 md:px-0">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          User Form Details
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Write about yourself
        </p>
        <div className="mt-6 space-y-6">
          <div className="flex flex-col  ">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900 "
            >
              Name
            </label>
            <input
              id="name"
              name="push-notifications"
              type="textbox"
              placeholder="Enter a name"
              required
              autoFocus
              className="w-full border-gray-100 text-black focus:ring-indigo-600 border rounded px-2"
            />
          </div>
          <div className="flex flex-col  ">
            <label
              htmlFor="emaill"
              className="block text-sm font-medium leading-6 text-gray-900 "
            >
              Email
            </label>
            <input
              id="emaill"
              name="push-notifications"
              type="textbox"
              placeholder="Enter a email address"
              required
              autoFocus
              className="w-full border-gray-100 text-black focus:ring-indigo-600 border rounded px-2"
            />
          </div>
          <div className="flex flex-col  ">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900 "
            >
              Phone Number
            </label>
            <input
              id="name"
              name="push-notifications"
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="Enter a phone number"
              required
              autoFocus
              className="w-full border-gray-100 text-black focus:ring-indigo-600 border rounded px-2"
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}
