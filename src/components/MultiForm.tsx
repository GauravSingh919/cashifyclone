import React, { FormEvent } from "react";
import { useMultistepForm } from "./useMultistepForm.ts";
import { ConditionForm } from "./ConditionForm.jsx";
import { CarrierForm } from "./CarrierForm.jsx";
import { StorageForm } from "./StorageForm.jsx";
import { OperationalForm } from "./Operational.jsx";
import { AccessoriesForm } from "./AccessoriesForm.jsx";

function MultiForm() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <ConditionForm />,
      <CarrierForm />,
      <StorageForm />,
      <OperationalForm />,
      <AccessoriesForm />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }

  return (
    <div className="flex flex-col  container mx-auto">
      <div className="my-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div>
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674445/Croma%20Assets/Communication/Mobiles/Images/300822_0_on2t4l.png"
              className="md:w-[25rem] md:h-[25rem]"
              alt="Iphone 15 pro max"
            />
            <div className="font-bold text-2xl text-gray-500 text-center">
              iPhone 15 Pro Max
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="border p-3 md:p-5  relative md:w-96 shadow-2xl rounded-lg bg-white ">
              <div className="absolute font-bold text-sm top-0 right-0 p-2 bg-black text-white rounded-lg">
                {currentStepIndex + 1} / {steps.length}{" "}
              </div>
              {step}

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
  );
}
export default MultiForm;
