// Modal.js
import React, { useState, useEffect } from "react";
import MultiFormModal from "./MultiFormModal.tsx";
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
  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  return (
    <>
      {showModal && (
        <>
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={closeModal}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex items-center justify-center z-50 overflow-auto">
            <div className="bg-white rounded-lg w-[25rem] h-[40rem] md:w-[40rem] md:h-[40rem] border">
              <div className="flex justify-between items-center px-4 mt-2">
                <div className="text-2xl mb-4">{product}</div>
                <div>
                  <button className="font-normal text-lg" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <input
                  type="search"
                  placeholder={placeholder}
                  className="text-lg font-medium px-2 border border-black rounded-md outline-none"
                />
              </div>
              <div className="p-3 mt-6 md:mt-10">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
                >
                  {files.map((file) => (
                    <li key={file.source} className="relative">
                      <div
                        className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 md:focus-within:ring-2 md:focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
                        onClick={() => handleFileClick(file)}
                      >
                        <img
                          src={file.source}
                          alt=""
                          className="pointer-events-none object-cover group-hover:opacity-75 hidden md:block"
                        />
                        <button
                          type="button"
                          className="absolute inset-0 focus:outline-none"
                        >
                          <span className="sr-only">
                            View details for {file.title}
                          </span>
                        </button>
                      </div>
                      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                        {file.title}
                      </p>
                      <p className="pointer-events-none block text-sm font-medium text-gray-500">
                        {file.size}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
