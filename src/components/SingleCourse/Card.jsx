import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Card = () => {
  return (
    <div className="card course-card">
      <div className="card__image pb-3">
        <img
          src="https://picsum.photos/100/70"
          className="rounded-top w-100"
          alt="Course"
        />
      </div>
      <div className="card__body px-3">
        <div className="prices d-flex align-items-center gap-2">
          <p className="price__old text--regular text--lightGrey m-0 d-inline text-decoration-line-through">
            $124
          </p>
          <h2 className="price__new heading--dark m-0 d-inline fw-bold">$53</h2>
        </div>
        <hr />
        <div className="card__title d-flex align-item-center pb-4">
          <h4 className="text--dark fw-bold m-0">64 Document Courses</h4>
          <button className="btn btn-danger fw-bold w-50">50% OFF</button>
        </div>
        <ul className="feature-list list-unstyled row gap-3 ps-3 py-3">
          <div className="col p-0 d-flex flex-column gap-3">
            <li className="feature__item text--dark text--regular d-flex align-items-center">
              <CheckCircleIcon color="primary" />
              24 Modules
            </li>
            <li className="feature__item text--dark text--regular d-flex align-items-center">
              <CheckCircleIcon color="primary" />
              Full Time Access
            </li>
            <li className="feature__item text--dark text--regular d-flex align-items-center">
              <CheckCircleIcon color="primary" />
              24 Resources
            </li>
          </div>
          <div className="col p-0 d-flex flex-column gap-3">
            <li className="feature__item text--dark text--regular d-flex align-items-center">
              <CheckCircleIcon color="primary" />
              12 Exercises
            </li>
            <li className="feature__item text--dark text--regular d-flex align-items-center">
              <CheckCircleIcon color="primary" />
              Certificate
            </li>
          </div>
        </ul>

        <div className="button__container d-flex flex-column gap-3 pb-3">
          <button className="btn--main rounded">Add To Cart</button>
          <button className="btn--secondary rounded">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
