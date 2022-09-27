import React from "react";
import "../courses.css";
import CoursesWrapper from "../CoursesWrapper";

const programmingInfo = {
  id: 1235,
  title: "Programming",
  about:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum culpa officia repudiandae fugit neque, rerum alias modi repellat voluptatem minima cupiditate quod. Atque obcaecati doloremque dolor aperiam quo omnis.",
  topicList: [
    { id: "python", title: "Python" },
    { id: "js", title: "Javascript" },
    { id: "css", title: "CSS" },
    { id: "csharp", title: "C#" },
    { id: "web", title: "Web Development" },
    { id: "data-science", title: "Data Science" },
    { id: "java", title: "Java" },
    { id: "sql", title: "SQL" },
  ],
};

const ProgrammingMain = () => {
  return <CoursesWrapper category={programmingInfo} key={programmingInfo.id} />;
};

export default ProgrammingMain;
