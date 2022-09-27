import React, { useState } from "react";
import CourseItem from "./CourseItem";
import { CourseData } from "../../CourseData";

const Courses = () => {
  const courseList = CourseData;
  const [currentList, setCurrentList] = useState(courseList);

  const changeCategory = (category) => {
    let newList = CourseData;
    if (category !== "all") {
      newList = courseList.filter((item) => item.category === category);
    }
    setCurrentList(newList);
  };
  const initialData = [
    { id: 0, state: true },
    { id: 1, state: false },
    { id: 2, state: false },
    { id: 3, state: false },
    { id: 4, state: false },
  ];

  const [active, setActive] = useState(initialData);

  const toggleActive = (id) => {
    let newStates = active.slice();
    newStates[id].state = true;
    newStates.forEach((item) => {
      if (item.id !== id) {
        item.state = false;
      }
    });
    setActive(newStates);
  };

  return (
    <div className="courses section">
      <h1 className="courses__title text--xlarge heading--dark fw-bold text-center">
        Trending Courses
      </h1>
      <ul className="courses__menu text--large list-unstyled my-4 d-flex justify-content-center align-items-center gap-4 gap-md-5 flex-wrap">
        <li
          className={
            active[0].state ? "menu__item--active rounded" : "menu__item"
          }
          onClick={function (event) {
            changeCategory("all");
            toggleActive(0);
          }}
        >
          All
        </li>
        <li
          className={
            active[1].state ? "menu__item--active rounded" : "menu__item"
          }
          id="btn-business"
          onClick={function (event) {
            changeCategory("Business");
            toggleActive(1);
          }}
        >
          Business
        </li>
        <li
          className={
            active[2].state ? "menu__item--active rounded" : "menu__item"
          }
          onClick={function (event) {
            changeCategory("Art & Design");
            toggleActive(2);
          }}
        >
          Art & Design
        </li>
        <li
          className={
            active[3].state ? "menu__item--active rounded" : "menu__item"
          }
          onClick={function (event) {
            changeCategory("Development");
            toggleActive(3);
          }}
        >
          Development
        </li>
        <li
          className={
            active[4].state ? "menu__item--active rounded" : "menu__item"
          }
          id="btn-marketing"
          onClick={function (event) {
            changeCategory("Marketing");
            toggleActive(4);
          }}
        >
          Marketing
        </li>
      </ul>
      <div className="courses__content container mw-100 p-5">
        <div className="row">
          {currentList
            .filter((courses, index) => index < 8)
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
                cssId={course.cssId}
              />
            ))}
        </div>
      </div>
      <div className="courses__button d-flex justify-content-center">
        <button
          className="btn--main rounded my-1 text-center"
          onClick={(event) => (window.location.href = `/Courses/Programming/`)}
        >
          More Courses
        </button>
      </div>
    </div>
  );
};

export default Courses;
