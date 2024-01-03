import React from "react";
import Carousel from "../components/carousel.js";
import MultiForm from "../components/MultiForm.tsx";
import Sell from "../components/sell.jsx";
import Forms from "../components/forms.jsx";
import Faqs from "../components/faqs.jsx";
import Reviews from "../components/reviews.jsx";
import Location from "../components/location.jsx";
const User = () => {
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
      <Sell />
      {/* <Forms /> */}
      <Faqs />
      <Reviews />
      <Location />
    </div>
  );
};

export default User;
