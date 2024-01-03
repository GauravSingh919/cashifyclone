import React from "react";
export function StorageForm() {
  return (
    <div className="px-2 md:px-0">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          Device Storage
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          What is the phone's storage capacity?
        </p>
        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              id="push-everything"
              name="push-notifications"
              type="radio"
              required
              autoFocus
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="push-everything"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              256GB
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="push-email"
              name="push-notifications"
              type="radio"
              required
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="push-email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              512GB
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="push-nothing"
              name="push-notifications"
              type="radio"
              required
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="push-nothing"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              1TB
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
