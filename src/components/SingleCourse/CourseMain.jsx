import React from "react";
import Header from "./Header";
import CourseInfo from "./CourseInfo";
import "./single-course.css";
import Schedule from "./Schedule";
import Mentor from "./Mentor";
import Rating from "./Rating";
import MentorCourses from "./MentorCourses";
import Card from "./Card";

const CourseMain = () => {
  return (
    <>
      <Header />
      <div className="structure row">
        <div className="col-12 col-md-8 px-md-5">
          <CourseInfo />
          <Schedule />
          <Mentor />
          <Rating />
        </div>
        <div className="col-12 col-md-4">
          <Card />
        </div>
      </div>

      <MentorCourses />
    </>
  );
};

export default CourseMain;
