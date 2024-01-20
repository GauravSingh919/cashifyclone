// Modal.js
import React, { useState, useEffect } from "react";
import MultiFormModal from "./MultiFormModal.tsx";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IoLogoApple } from "react-icons/io";
const Modal = ({ product, showModal, closeModal, placeholder }) => {

  useEffect(() => {
    const originalOverflowStyle = document.body.style.overflow;
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflowStyle;
    }
    return () => {
      document.body.style.overflow = originalOverflowStyle;
    };
  }, [showModal]);

  const files = [
    {
      title: "iPhone 16 Pro Max",
      size: "256 GB",
      source: "/product/phone_1.jpg",
    },
    {
      title: "iPhone 16 Pro Max",
      size: "256 GB",
      source: "/product/phone_1.jpg",
    },
    {
      title: "iPhone 16 Pro Max",
      size: "256 GB",
      source: "/product/phone_1.jpg",
    },
    {
      title: "iPhone 16 Pro Max",
      size: "256 GB",
      source: "/product/phone_1.jpg",
    },
    {
      title: "iPhone 16 Pro Max",
      size: "256 GB",
      source: "/product/phone_1.jpg",
    },
    {
      title: "iPhone 16 Pro Max",
      size: "256 GB",
      source: "/product/phone_1.jpg",
    },
    // More files...
  ];
  const [selectedFile, setSelectedFile] = useState(null);
  const [isMultiFormModalOpen, setMultiFormModalOpen] = useState(false);

  const handleFileClick = (file) => {
    setSelectedFile(file);
    setMultiFormModalOpen(true);
  };

  const closeMultiFormModal = () => {
    setMultiFormModalOpen(false);
    setSelectedFile(null);
  };

  return (
    <>
      {showModal && (
        <>
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity will-change-scroll"
            onClick={closeModal}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  flex items-center justify-center z-50 overflow-auto ">
            <div className="bg-white rounded-lg w-[25rem] xl:w-[80rem] h-[40rem] md:w-[40rem] md:h-[40rem] border">
              <div className="bg-black sticky top-0 z-10">
                <div className="flex justify-center items-center px-4   top-0">
                  <div className="text-2xl my-5 text-white flex items-center">
                    <IoLogoApple className="text-5xl" />
                    <div>{product}</div>
                  </div>
                </div>
                <div className="flex justify-end relative">
                  <button
                    className="absolute bottom-10 font-normal text-lg pr-5 text-white"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="w-7 " />
                  </button>
                </div>
              </div>

              <div className="relative flex items-center justify-end pr-5 mt-5">
                <input
                  type="search"
                  placeholder={placeholder}
                  className="text-lg font-medium px-2 border border-black rounded-md outline-none"
                />
              </div>
              <div className="p-3 mt-6 md:mt-10">
                All models. Take your pick.
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-10"
                >
                  {files.map((file) => (
                    <li key={file.source} className="relative group">
                      <div
                        className="aspect-h-7 aspect-w-10 overflow-hidden rounded-lg bg-gray-100 hover:bg-white hover:text-black hover:shadow-md transition duration-300"
                        onClick={() => handleFileClick(file)}
                      >
                        <img
                          src={file.source}
                          alt=""
                          className="pointer-events-none object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                          <button type="button" className="focus:outline-none">
                            <div className="bg-black font-medium text-sm text-white px-2 py-1 rounded-lg">
                              Take a look a closer
                            </div>
                          </button>
                        </div>
                      </div>
                      <p className="mt-2 block truncate text-sm font-medium text-gray-900">
                        {file.title}
                      </p>
                      <p className="block text-sm font-medium text-gray-500">
                        {file.size}
                      </p>
                    </li>
                  ))}
                </ul>
                {/* {isMultiFormModalOpen && selectedFile && (
            <MultiFormModal
              file={selectedFile}
              closeModal={closeMultiFormModal}
            />
          )} */}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
