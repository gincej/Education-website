import React from "react";
import Hero from "./Hero";
import Courses from "./Courses/Courses";
import Categories from "./Categories/Categories";
import Counter from "./Counter";
import Mentor from "./Mentor";
import Reviews from "./Reviews/Reviews";
import Partners from "./Partners";
import Enroll from "./Enroll";
import "./home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Counter />
      <Courses />
      <Categories />

      <Mentor />
      <Reviews />
      <Partners />
      <Enroll />
    </>
  );
};

export default Home;
