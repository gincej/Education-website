import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CourseItem from "./CourseDisplay/CourseItem";
import { CourseData } from "../CourseData";

const courseList = CourseData;

const PopularCourses = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="trending container pt-5 mw-100">
      <h1 className="trending__title heading--dark fw-bold ms-5">
        Most Popular {props.title} Courses
      </h1>
      <div className="trending__list container mw-100">
        <Carousel
          className="p-5"
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          interval={null}
        >
          <Carousel.Item>
            <div className="review d-flex justify-content-center mx-md-5 px-md-5">
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
          </Carousel.Item>
          <Carousel.Item>
            <div className="review row d-flex justify-content-center mx-md-5 px-md-5">
              {courseList
                .filter((courses, index) => index > 3 && index < 8)
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
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default PopularCourses;
