import React, { useState } from "react";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import CategoryIcon from "@mui/icons-material/Category";
import Pages from "./Pages";
import { CourseData } from "../../CourseData";
import CourseItem from "./CourseItem";
import Sidebar from "./Sidebar";

const CoursesDisplay = () => {
  const [sidebar, setSidebar] = useState("true");
  const toggleSidebar = () => setSidebar(!sidebar);

  const [courses] = useState(CourseData);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(12);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="courses" id="content">
      <div className="courses__top p-5 mt-5 d-flex justify-content-between flex-wrap">
        <h1 className=" heading--dark fw-bold">All Courses</h1>
        <div className="courses__action d-flex gap-4 flex-wrap">
          <button
            className="btn--filter rounded d-flex align-items-center gap-1"
            onClick={toggleSidebar}
          >
            Filter <CategoryIcon />
          </button>
          <button className="btn--main rounded d-flex align-items-center gap-1">
            Most Popular <ArrowIcon />
          </button>
        </div>
      </div>
      <div className="courses__body row">
        <Sidebar state={sidebar} />
        <div className="courses__content col-10 row h-100 ms-1 ms-md-0 px-md-5">
          {currentCourses.map((course) => (
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
          <div className="pagination  d-flex justify-content-center">
            <Pages
              itemsPerPage={coursesPerPage}
              totalItems={courses.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDisplay;
