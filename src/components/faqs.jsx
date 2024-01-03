import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Faqs = () => {
  const accordionData = [
    {
      question: "How do I identify my iPhone model?",
      answer:
        "It's important to get your iPhone model correct prior to selling it to avoid any surprises. We suggest you reference Apple's very own identify your iPhone model guide to help identify your model.",
    },
    {
      question: "What's the best way to sell an iPhone for cash?",
      answer:
        "It depends. There's no one right answer. If you're an experienced seller on eBay or Craigslist, you will likely get the highest value for your iPhone on those platforms. However, they do require more effort from the seller, charge fees, and come with risk of fraud that novice sellers may not know how to protect themselves from.",
    },
    {
      question: "What's the best way to sell an iPhone for cash?",
      answer:
        "It depends. There's no one right answer. If you're an experienced seller on eBay or Craigslist, you will likely get the highest value for your iPhone on those platforms. However, they do require more effort from the seller, charge fees, and come with risk of fraud that novice sellers may not know how to protect themselves from.",
    },
    {
      question: "What's the best way to sell an iPhone for cash?",
      answer:
        "It depends. There's no one right answer. If you're an experienced seller on eBay or Craigslist, you will likely get the highest value for your iPhone on those platforms. However, they do require more effort from the seller, charge fees, and come with risk of fraud that novice sellers may not know how to protect themselves from.",
    },
    {
      question: "What's the best way to sell an iPhone for cash?",
      answer:
        "It depends. There's no one right answer. If you're an experienced seller on eBay or Craigslist, you will likely get the highest value for your iPhone on those platforms. However, they do require more effort from the seller, charge fees, and come with risk of fraud that novice sellers may not know how to protect themselves from.",
    },
    {
      question: "What's the best way to sell an iPhone for cash?",
      answer:
        "It depends. There's no one right answer. If you're an experienced seller on eBay or Craigslist, you will likely get the highest value for your iPhone on those platforms. However, they do require more effort from the seller, charge fees, and come with risk of fraud that novice sellers may not know how to protect themselves from.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-5" id="faqs">
      <div className="text-indigo-800 text-3xl font-bold text-center pt-20">
        Frequently Asked Questions
      </div>
      <div className="flex flex-col lg:items-center py-5 ">
        <div className=" ">
          {accordionData.map((item, index) => (
            <div key={index}>
              <div className="py-2 transition-all ease-in duration-500">
                <div
                  className="question  flex items-center justify-between text-lg shadow bg-white border p-3 cursor-pointer w-full lg:w-[60rem]"
                  onClick={() => toggleAccordion(index)}
                >
                  <div>{item.question}</div>
                  <ChevronDownIcon
                    className={`w-5 h-5 transform transition-all duration-300 ease-in-out ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openIndex === index && (
                  <div className="answer relative flex items-center transition-all duration-700 ease-in-out text-lg shadow bg-white border w-full lg:w-[60rem] p-3">
                    <div>{item.answer}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
