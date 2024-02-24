// SelectDevice.js
import React, { useState } from "react";
import Modal from "./Modal";
import "animate.css";
const SelectDevice = ({ onClick }) => {
  const [showiPhoneModal, setShowiPhoneModal] = useState(false);
  const [showiPadModal, setShowiPadModal] = useState(false);
  const [showAppleWatchModal, setShowAppleWatchModal] = useState(false);

  const openiPhoneModal = () => setShowiPhoneModal(true);
  const closeiPhoneModal = () => setShowiPhoneModal(false);

  const openiPadModal = () => setShowiPadModal(true);
  const closeiPadModal = () => setShowiPadModal(false);

  const openAppleWatchModal = () => setShowAppleWatchModal(true);
  const closeAppleWatchModal = () => setShowAppleWatchModal(false);

  const iPhoneImage = "/product/phone_1.jpg";
  const iPadImage = "/product/ipad_1.jpg";
  const appleWatchImage = "/product/iwatch_1.jpg";

  const iPhoneTitles = [
    "Title 1",
    "Title 2",
    "Title 3" /* ... other titles for iPhone ... */,
  ];
  const iPadTitles = [
    "Title A",
    "Title B",
    "Title C" /* ... other titles for iPad ... */,
  ];
  const appleWatchTitles = [
    "Watch Title X",
    "Watch Title Y",
    "Watch Title Z" /* ... other titles for Apple Watch ... */,
  ];

  const iPhoneSizes = [
    "Size 1",
    "Size 2",
    "Size 3" /* ... other sizes for iPhone ... */,
  ];
  const iPadSizes = [
    "Size A",
    "Size B",
    "Size C" /* ... other sizes for iPad ... */,
  ];
  const appleWatchSizes = [
    "Watch Size X",
    "Watch Size Y",
    "Watch Size Z" /* ... other sizes for Apple Watch ... */,
  ];

  return (
    <div className="my-10" onClick={onClick}>
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
            Apple Watch
            <img src="/product/iwatch_1.jpg" alt="applewatch" />
          </div>

          <Modal
            product="iPhone"
            showModal={showiPhoneModal}
            closeModal={closeiPhoneModal}
            placeholder="Search an iPhone ..."
            images={iPhoneImage}
            title={iPhoneTitles}
            size={iPhoneSizes[0]}
          />

          <Modal
            product="iPad"
            showModal={showiPadModal}
            closeModal={closeiPadModal}
            placeholder="Search an iPad ..."
            images={iPadImage}
            title={iPadTitles[1]}
            size={iPadSizes[1]}
          />

          <Modal
            product="Apple Watch"
            showModal={showAppleWatchModal}
            closeModal={closeAppleWatchModal}
            placeholder="Search an Apple Watch ..."
            images={appleWatchImage}
            title={appleWatchTitles[2]}
            size={appleWatchSizes[2]}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectDevice;
