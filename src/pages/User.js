import React, { useEffect, useState } from "react";
import Carousel from "../components/carousel.js";
import MultiForm from "../components/MultiForm.tsx";
import Sell from "../components/sell.jsx";
import Select from "../components/SelectDevice.jsx";
// import Forms from "../components/forms.jsx";
import Faqs from "../components/faqs.jsx";
import Reviews from "../components/reviews.jsx";
import Location from "../components/location.jsx";
import SelectDevice from "../components/SelectDevice.jsx";
import { IoLogoWhatsapp } from "react-icons/io";

const User = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
      // Disable scrolling on the body when the popup is shown
      document.body.style.overflow = "auto";
    }, 20000);

    return () => {
      clearTimeout(timeoutId);
      // Re-enable scrolling on the body when the popup is closed
      document.body.style.overflow = "visible";
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    // Re-enable scrolling on the body when the popup is closed
    document.body.style.overflow = "visible";
  };

  let slides = [
    "https://source.unsplash.com/A6JxK37IlPo/1920x550",
    "https://source.unsplash.com/YLNMXzXk8zs/2000x550",
    "https://source.unsplash.com/0KaTrsWvoJE/2000x550",
    "https://source.unsplash.com/2xPgFphVZEE/2000x550",
    "https://source.unsplash.com/yPFAAwomTYQ/2000x550",
  ];

  return (
    <div>
      <Carousel slides={slides} />
      <MultiForm />
      <Select />
      <Sell />
      {/* <Forms /> */}
      <Faqs />
      <Reviews />
      <Location />

      <div className="fixed bottom-5 right-5">
        <IoLogoWhatsapp className="text-green-500 bg-white text-5xl cursor-pointer"/>
        </div> 

      {showPopup && (
        <div className="popup-modal">
          <div className="modal-content ">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />

            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[24rem] md:w-auto  md:p-8 border border-gray-300 shadow-md z-50 ">
              <p>This is your popup modal content.</p>
              <SelectDevice />
              <button
                className="absolute top-4 right-4 p-2 text-gray-500"
                onClick={handleClosePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
