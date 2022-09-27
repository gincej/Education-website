import React from "react";
import { CourseData } from "../CourseData";
import CourseItem from "../Home/Courses/CourseItem";

const MentorCourses = () => {
  const courseList = CourseData;

  return (
    <div className="mentor__courses mx-md-5">
      <h2 className="heading--dark fw-bold">
        More Courses From Anne Diana Millers
      </h2>
      <div className="courses__content p-md-5">
        <div className="row">
          {courseList
            .filter((courses, index) => index < 4)
            .map((course) => (
              <CourseItem
                title={course.title}
                label={course.label}
                team={course.team}
                prevPrice={course.prevPrice}
                discount={course.discount}
                rating={course.rating}
                img={course.image}
                id={course.id}
                key={course.id}
              />
            ))}
        </div>
      </div>
      <div className="courses__button d-flex justify-content-center">
        <button
          className="btn--main rounded my-1 text-center"
          onClick={(event) => (window.location.href = `/Courses/Programming`)}
        >
          More Courses
        </button>
      </div>
    </div>
  );
};

export default MentorCourses;
