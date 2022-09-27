import React from "react";

import { Rating } from "@mui/material";

const CourseItem = (props) => {
  return (
    <div className="col-6 col-md-3 mb-3 px-2">
      <div
        className="card d-flex h-100"
        onClick={(event) =>
          (window.location.href = `/Courses/Programming/Web-development`)
        }
      >
        <div className="card__image position-relative mb-2">
          <img src={props.img} className="rounded-top w-100" alt="Course" />
          <p className="image__label bg--secondary text--light text--small rounded text-center lh-1 w-75 py-1 position-absolute top-100 start-50 translate-middle">
            {props.label}
          </p>
        </div>
        <h5 className="card__title heading--dark text--small h-100 px-2 pt-2 align-self-start fw-bold">
          {props.title}
        </h5>
        <div className="card__body d-flex flex-column justify-content-end px-2">
          <p className="card__team text--primary text--xsmall mb-2 fw-bold">
            {props.team}
          </p>
          <div className="rating w-100 mb-2 d-flex flex-wrap align-items-center gap-1">
            <Rating
              className="size-small"
              name="read-only"
              size="small"
              value={props.rating}
              readOnly
            />
            <p className="rating__label text--small text--lightGrey m-0 d-inline ">
              (2083)
            </p>
          </div>
          <div className="prices  d-flex align-items-center gap-1">
            <p className="price__old text--small text--lightGrey m-0 d-inline text-decoration-line-through">
              ${props.prevPrice}
            </p>
            <p className="price__new heading--dark m-0 d-inline fw-bold">
              ${props.discount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
