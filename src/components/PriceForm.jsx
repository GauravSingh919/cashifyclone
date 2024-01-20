import React from "react";

export function PriceForm() {
  return (
    <div className="px-2 md:px-0">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          Phone Price
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600"></p>
        <div className="mt-6 space-y-6">
          <div className="flex justify-center items-center font-medium gap-x-5 text-gray-500 text-center">
            <div className="font-bold">Your device is valued at :</div>
          </div>

          <div className="text-center text-3xl font-extrabold">$300</div>
        </div>
      </fieldset>
    </div>
  );
}
