import React, { FormEvent, useState } from "react";
import { useMultistepForm } from "./useMultistepForm.ts";
import { ConditionForm } from "./ConditionForm.jsx";
import { CarrierForm } from "./CarrierForm.jsx";
import { StorageForm } from "./StorageForm.jsx";
import { OperationalForm } from "./Operational.jsx";
import { AccessoriesForm } from "./AccessoriesForm.jsx";
import { UserForm } from "./UserForm.jsx";
import { PriceForm } from "./PriceForm.jsx";
import Steps from "./Steps.jsx";
import AlertBox from "./AlertBox.jsx";

function MultiForm() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <CarrierForm />,
      <ConditionForm />,
      <StorageForm />,
      // <OperationalForm />,
      // <AccessoriesForm />,
      <UserForm />,
      <PriceForm />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();

    if (isLastStep) {
      alert("Form Filled Successfully");
    }
  }

  return (
    <div className="bg-gradient-to-r from-black to-gray-800 p-10 md:p-0">
      <div className="flex flex-col container mx-auto lg:p-7" id="forms">
        <div className="flex flex-col lg:flex-row px-3">
          {" "}
          <div className="md:basis-2/4 ">
            <Steps />
          </div>{" "}
          <div className="md:basis-2/4 lg:mt-10">
            <div className="flex flex-col  items-center ">
              <div className="flex">
                <div className="font-bold  md:text-2xl text-gray-500  mt-3 md:mt-10">
                  <div>iPhone 15 Pro Max</div>
                  <div className="md:text-xl">Color : Blue Titanium</div>
                  <div>Varient : 256GB</div>
                </div>

                <img
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674445/Croma%20Assets/Communication/Mobiles/Images/300822_0_on2t4l.png"
                  className="w-[10rem] h-[10rem]"
                  alt="Iphone 15 pro max"
                />
              </div>
              <form onSubmit={onSubmit}>
                <div className="border p-3 md:p-5  relative md:w-96 shadow-2xl rounded-lg bg-white px-5">
                  <div className="absolute font-bold text-sm top-0 right-0 p-2 bg-black text-white rounded-lg">
                    {currentStepIndex + 1} / {steps.length}{" "}
                  </div>
                  {step}
                  <div className="mt-3 text-sm">
                    {isLastStep ? "" : "The current value of the phone :"}
                    <span> {isLastStep ? "" : "Value"}</span>
                  </div>
                  <div className="flex mt-[1rem] gap-[1rem] justify-end ">
                    {!isFirstStep && (
                      <button
                        onClick={back}
                        type="button"
                        className="bg-indigo-700 p-2.5 shadow rounded-md font-medium text-white "
                      >
                        Back
                      </button>
                    )}
                    <button
                      type="submit"
                      className="bg-indigo-700 p-2.5 shadow rounded-md font-medium text-white"
                    >
                      {isLastStep ? "Finish " : "Next"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MultiForm;
