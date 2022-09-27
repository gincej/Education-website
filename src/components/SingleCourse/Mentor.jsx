import React from "react";
import { Rating } from "@mui/material";

const Mentor = () => {
  return (
    <div className="mentor">
      <h1 className="mentor__title heading--dark fw-bold pb-5">Mentor</h1>
      <div className="mentor__body row h-100">
        <div className="mentor__image col-12 col-md-4">
          <img
            className="w-100 rounded"
            src="https://picsum.photos/200"
            alt="Mentor"
          />
        </div>
        <div className="mentor__content col-12 col-md-8 py-3 px-md-5 d-flex flex-column justify-content-between">
          <h3 className="mentor__name heading--dark fw-bold">
            Anne Diana Miller
          </h3>
          <p className="text--darkGrey">Senior developer expert instructor</p>
          <div className="rating-container d-flex gap-2 align-items-center">
            <Rating name="read-only" size="large" value={5} readOnly />
            <h5 className="rating__label text--dark m-0 fw-bold">4,7/5</h5>
            <p className="rating__label text--small text--lightGrey m-0 d-inline ">
              (1023 Reviews)
            </p>
          </div>
          <p className="text--darkGrey">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            corporis dignissimos a nam necessitatibus debitis. Dolorum sequi
            laudantium libero excepturi, temporibus velit minus magnam vitae!
            Quam ipsam officiis blanditiis expedita?
          </p>

          <div className="mentor__numbers d-flex gap-3">
            <p className="text--darkGrey">12 Courses</p>
            <p className="text--darkGrey">2859 Students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
