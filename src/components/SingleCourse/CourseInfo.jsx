import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const CourseInfo = () => {
  return (
    <div className="course pb-0">
      <div className="course-about">
        <h1 className="heading--dark fw-bold">
          What You'll Learn From This Course
        </h1>
        <p className="text--darkGrey pt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, saepe.
          Sed adipisci similique aut nulla explicabo aliquid necessitatibus
          dolores id molestias exercitationem est illo, commodi laudantium
          cumque fugiat, eligendi eos. Obcaecati soluta non veritatis, earum
          facilis placeat delectus tempora dolorem quae reiciendis aspernatur
          hic similique illum dicta consequatur dolor perspiciatis molestias
          corporis nulla ipsam totam et animi iure? Unde, accusantium. <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, saepe.
          Sed adipisci similique aut nulla explicabo aliquid necessitatibus
          dolores id molestias exercitationem est illo, commodi laudantium
          cumque fugiat, eligendi eos. Obcaecati soluta non veritatis, earum
          facilis placeat delectus tempora dolorem quae reiciendis aspernatur
          hic similique illum dicta consequatur dolor perspiciatis molestias
          corporis nulla ipsam totam et animi iure? Unde, accusantium.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          reiciendis alias illum provident qui aliquam quod doloribus itaque.
        </p>
      </div>
      <div className="course-features">
        <h2 className="heading--dark fw-bold pb-4">Objective Features</h2>
        <div className="features__body text--dark fw-bold pt-5 ps-3 sp-md-5 row">
          <ul className="feature-list list-unstyled col-6 px-md-5">
            <li className="feature-item">
              <CheckIcon className="icon" /> Build fully responsive websites and
              web apps for your startup or business.
            </li>
            <li className="feature-item">
              <CheckIcon className="icon" /> Build fully responsive websites and
              web apps for your startup or business.
            </li>
            <li className="feature-item">
              <CheckIcon className="icon" /> Build fully responsive websites and
              web apps for your startup or business.
            </li>
            <li className="feature-item">
              <CheckIcon className="icon" /> Build fully responsive websites and
              web apps for your startup or business.
            </li>
            <li className="feature-item pb-0">
              <CheckIcon className="icon" /> Build fully responsive websites and
              web apps for your startup or business.
            </li>
          </ul>
          <ul className="feature-list row list-unstyled col-6 px-md-5">
            <li className="feature-item">
              <CheckIcon className="icon" /> Craft a portfolio of websites to
              apply for junior developer jobs.
            </li>
            <li className="feature-item">
              <CheckIcon className="icon" /> Craft a portfolio of websites to
              apply for junior developer jobs.
            </li>
            <li className="feature-item">
              <CheckIcon className="icon" /> Craft a portfolio of websites to
              apply for junior developer jobs.
            </li>
            <li className="feature-item">
              <CheckIcon className="icon" /> Craft a portfolio of websites to
              apply for junior developer jobs.
            </li>
            <li className="feature-item pb-0">
              <CheckIcon className="icon" /> Craft a portfolio of websites to
              apply for junior developer jobs.
            </li>
          </ul>
        </div>

        <div className="course-features pb-0">
          <h2 className="heading--dark fw-bold py-4">Requirements</h2>
          <div className="features__body text--dark fw-bold p-5">
            <ul className="feature-list list-unstyled px-md-5">
              <li className="feature-item">
                <CheckIcon className="icon" /> No programming experience needed
              </li>
              <li className="feature-item">
                <CheckIcon className="icon" /> A computer with access to the
                internet
              </li>
              <li className="feature-item">
                <CheckIcon className="icon" /> All tools and software in this
                course is free
              </li>
              <li className="feature-item pb-0">
                <CheckIcon className="icon" /> Any operating system is fitted
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
