import React from "react";
import Header from "./Header";
import Topics from "./Topics/Topics";
import PopularCourses from "./PopularCourses";
import CoursesDisplay from "./CourseDisplay/CoursesDisplay";

const CoursesWrapper = (props) => {
  return (
    <>
      <Header title={props.category.title} about={props.category.about} />
      <PopularCourses title={props.category.title} />
      <Topics
        title={props.category.title}
        topicList={props.category.topicList}
        id={props.category.id}
        key={props.category.id}
      />
      <CoursesDisplay />
    </>
  );
};

export default CoursesWrapper;
