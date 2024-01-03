import React from "react";
export function CarrierForm() {
  return (
    <div className="px-2 md:px-0">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          Phone's Carrier
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Please select the phone's carrier.
        </p>
        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              id="at&t"
              name="push-notifications"
              type="radio"
              required
              autoFocus
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="at&t"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              AT&T
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="verizon"
              name="push-notifications"
              type="radio"
              required
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="verizon"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Verizon
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="sprint"
              name="push-notifications"
              type="radio"
              required
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="sprint"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Sprint
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="t-mobile"
              name="push-notifications"
              type="radio"
              required
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="t-mobile"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              T-Mobile
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="unlocked"
              name="push-notifications"
              type="radio"
              required
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="unlocked"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Unlocked
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="otherCarrier"
              name="push-notifications"
              type="radio"
              required
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="otherCarrier"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Other Carrier
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
