// SelectDevice.js
import React, { useState } from "react";
import Modal from "./Modal";

const SelectDevice = () => {
  const [showiPhoneModal, setShowiPhoneModal] = useState(false);
  const [showiPadModal, setShowiPadModal] = useState(false);
  const [showAppleWatchModal, setShowAppleWatchModal] = useState(false);

  const openiPhoneModal = () => setShowiPhoneModal(true);
  const closeiPhoneModal = () => setShowiPhoneModal(false);

  const openiPadModal = () => setShowiPadModal(true);
  const closeiPadModal = () => setShowiPadModal(false);

  const openAppleWatchModal = () => setShowAppleWatchModal(true);
  const closeAppleWatchModal = () => setShowAppleWatchModal(false);

  return (
    <div className="my-10">
      <div className="container mx-auto">
        <div className="text-blue-800 font-bold lg:text-[40px]  text-center mb-10">
          SELECT A PRODUCT
        </div>
        <div className="grid grid-cols-3 text-center font-bold text-2xl ">
          <div onClick={openiPhoneModal} className="cursor-pointer">
            iPhone
            <img src="/product/phone_1.jpg" alt="iPhone" className="" />
          </div>
          <div onClick={openiPadModal} className="cursor-pointer">
            iPad
            <img src="/product/ipad_1.jpg" alt="iPad" className="" />
          </div>
          <div onClick={openAppleWatchModal} className="cursor-pointer">
            Watch
            <img src="/product/iwatch_1.jpg" alt="applewatch" />
          </div>

          <Modal
            product="iPhone"
            showModal={showiPhoneModal}
            closeModal={closeiPhoneModal}
            placeholder="Search an iPhone ..."
          />

          <Modal
            product="iPad"
            showModal={showiPadModal}
            closeModal={closeiPadModal}
            placeholder="Search an iPad ..."
          />

          <Modal
            product="Apple Watch"
            showModal={showAppleWatchModal}
            closeModal={closeAppleWatchModal}
            placeholder="Search an Apple Watch ..."
          />
        </div>
      </div>
    </div>
  );
};

export default SelectDevice;
