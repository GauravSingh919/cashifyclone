import React from "react";
export function ConditionForm() {
  return (
    <div className="px-2 md:px-0">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          Device Condition
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          What is the condition of the phone?
        </p>
        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              id="brandnew"
              name="push-tick"
              type="radio"
              required
              autoFocus
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="brandnew"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Brand New
              <p className="text-xs text-gray-400">
                Phone still in factory original packaging. Must come with the
                box and all accessories sealed/untouched.
              </p>
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="flawless"
              name="push-tick"
              type="radio"
              required
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="flawless"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Flawless
              <p className="text-xs text-gray-400">
                Has absolutely no scratches, scuffs or other marks. Looks brand
                new.
              </p>
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="good"
              name="push-tick"
              type="radio"
              required
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="good"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Good
              <p className="text-xs text-gray-400">
                Shows light to moderate signs of wear. Contains few light
                scratches and/or dents.
              </p>
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="fair"
              name="push-tick"
              type="radio"
              required
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="fair"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Fair
              <p className="text-xs text-gray-400">
                Shows moderate to excessive signs of wear. Contains excessive
                scratching, major dents, and/or mild housing damage such as a
                slightly bent frame.
              </p>
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="broken"
              name="push-tick"
              type="radio"
              required
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="broken"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Broken
              <p className="text-xs text-gray-400">
                Cracks (regardless of size) or broken parts on either screen or
                body of the item.
              </p>
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
