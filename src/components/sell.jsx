import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import React from "react";

const sell = () => {
  return (
    <div>
      <div className="lg:flex items-center ">
        <div className="lg:py-10 bg-blue-300 w-screen">
          <div className="flex justify-center gap-x-10 lg:gap-x-32">
            <div className="hidden lg:flex px-5">
              <div className="flex items-center">
                <img
                  src="https://www.quickmobile.in/assets/images/sellphone_imgs/quick_and_easy_quotes_sell.webp"
                  alt="mobile1"
                />
                <ChevronDoubleRightIcon className="w-32 text-yellow-200" />
              </div>
              <div className="flex items-center">
                <img
                  src="https://www.quickmobile.in/assets/images/sellphone_imgs/assured_pickup_24hrs_sell.webp"
                  alt="mobile2"
                />
                <div>
                  <ChevronDoubleRightIcon className="w-32 text-yellow-200 " />
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://www.quickmobile.in/assets/images/sellphone_imgs/instant_cash_sell.webp"
                  alt="mobile3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:hidden  w-screen">
        <div className="p-16 bg-blue-300 ">
          <div className="mobile12">
            <div >
              <img
                src="https://www.quickmobile.in/assets/images/sellphone_imgs/quick_and_easy_quotes_sell.webp"
                alt=""
                className=""
              />
              <div className="my-5">
                <ChevronDoubleDownIcon className="w-32 text-yellow-200 mx-auto" />
              </div>
            </div>
            <div>
              <img
                src="https://www.quickmobile.in/assets/images/sellphone_imgs/assured_pickup_24hrs_sell.webp"
                alt="mobile13"
                className=""
              />
              <div className="my-5">
                <ChevronDoubleDownIcon className="w-32 text-yellow-200 mx-auto" />
              </div>
            </div>
            <div>
              <img
                src="https://www.quickmobile.in/assets/images/sellphone_imgs/instant_cash_sell.webp"
                alt="mobile14"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sell;
