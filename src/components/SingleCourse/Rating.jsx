import React from "react";
import { Rating as Stars } from "@mui/material";
import ProgressBar from "react-bootstrap/ProgressBar";
import Arrow from "@mui/icons-material/KeyboardArrowDown";
import ThumbUp from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDown from "@mui/icons-material/ThumbDownAltOutlined";

const Rating = () => {
  return (
    <div className="ratings">
      <h2 className="ratings__title heading--dark fw-bold pb-5">Feedback</h2>
      <div className="ratings__display row">
        <div className="col-12 col-md-2 heading--dark fw-bold d-flex flex-column justify-content-around">
          <h1 className="ratings__number text--xlarge fw-bold">4.7</h1>
          <Stars name="read-only" size="large" value={5} readOnly />
          <p>Course Rating</p>
        </div>
        <div className="col-12 col-md-10 px-md-5">
          <ul className="ratings__list list-unstyled">
            <li className="ratings__item d-flex align-items-center gap-2">
              <ProgressBar className="w-75" now={80} variant="warning" />
              <Stars name="read-only" size="large" value={5} readOnly />
              <p
                className="text--lightGrey m-0 align-self-end"
                style={{ whiteSpace: "nowrap" }}
              >
                500 Reviews
              </p>
            </li>
            <li className="ratings__item d-flex align-items-center gap-2">
              <ProgressBar className="w-75" now={60} variant="warning" />
              <Stars name="read-only" size="large" value={4} readOnly />
              <p
                className="text--lightGrey m-0 align-self-end"
                style={{ whiteSpace: "nowrap" }}
              >
                214 Reviews
              </p>
            </li>
            <li className="ratings__item d-flex align-items-center gap-2">
              <ProgressBar className="w-75" now={40} variant="warning" />
              <Stars name="read-only" size="large" value={3} readOnly />
              <p
                className="text--lightGrey m-0 align-self-end"
                style={{ whiteSpace: "nowrap" }}
              >
                151 Reviews
              </p>
            </li>
            <li className="ratings__item d-flex align-items-center gap-2">
              <ProgressBar className="w-75" now={30} variant="warning" />
              <Stars name="read-only" size="large" value={2} readOnly />
              <p
                className="text--lightGrey m-0 align-self-end"
                style={{ whiteSpace: "nowrap" }}
              >
                125 Reviews
              </p>
            </li>
            <li className="ratings__item d-flex align-items-center gap-2">
              <ProgressBar className="w-75" now={15} variant="warning" />
              <Stars name="read-only" size="large" value={1} readOnly />
              <p
                className="text--lightGrey m-0 align-self-end"
                style={{ whiteSpace: "nowrap" }}
              >
                101 Reviews
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="reviews pt-md-5 mt-5">
        <div className="reviews__top d-flex justify-content-between align-items-center">
          <h2 className="heading--dark fw-bold">Reviews</h2>
          <button className="btn--main rounded">
            All Ratings <Arrow fontSize="large" />
          </button>
        </div>
        <div className="reviews__body pt-5">
          <div className="reviews__info row pb-3">
            <div className="reviews__image col-12 col-md-2">
              <img
                className="image__item"
                src="https://picsum.photos/100"
                alt=""
              />
            </div>
            <div className="reviews__name col-6 col-md-8">
              <h3 className="heading--dark fw-bold">James</h3>
              <Stars name="read-only" size="large" value={5} readOnly />
              <p className="text--lightGrey">1 month ago</p>
            </div>
            <div className="reviews__icons col-6 col-md-2 d-flex align-items-center justify-content-end gap-3">
              <ThumbUp fontSize="large" /> <ThumbDown fontSize="large" />
            </div>
          </div>
          <div className="reviews__text text--darkGrey pb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sit
            accusamus quam maxime dignissimos, aut temporibus tempora cupiditate
            doloremque dolores libero minima enim expedita voluptatum! Itaque
            dignissimos sunt quod aperiam! Modi reprehenderit similique
            laudantium magnam commodi beatae ratione distinctio asperiores saepe
            debitis, sunt iste fugit maxime quos? Maiores fugiat doloribus
            laboriosam, similique eius quod ratione. Voluptatum, dolorem
            sapiente? Autem, nemo.
          </div>
          <hr />
        </div>

        <div className="reviews__body pt-5">
          <div className="reviews__info row pb-3">
            <div className="reviews__image col-12 col-md-2">
              <img
                className="image__item"
                src="https://picsum.photos/100"
                alt=""
              />
            </div>
            <div className="reviews__name col-6 col-md-8">
              <h3 className="heading--dark fw-bold">Anna</h3>
              <Stars name="read-only" size="large" value={5} readOnly />
              <p className="text--lightGrey">3 month ago</p>
            </div>
            <div className="reviews__icons col-6 col-md-2 d-flex align-items-center justify-content-end gap-3">
              <ThumbUp fontSize="large" /> <ThumbDown fontSize="large" />
            </div>
          </div>
          <div className="reviews__text text--darkGrey pb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sit
            accusamus quam maxime dignissimos, aut temporibus tempora cupiditate
            doloremque dolores libero minima enim expedita voluptatum! Itaque
            dignissimos sunt quod aperiam! Modi reprehenderit similique
            laudantium magnam commodi beatae ratione distinctio asperiores saepe
            debitis, sunt iste fugit maxime quos? Maiores fugiat doloribus
            laboriosam, similique eius quod ratione. Voluptatum, dolorem
            sapiente? Autem, nemo.
          </div>
          <hr />
        </div>
        <div className="reviews__body pt-5">
          <div className="reviews__info row pb-3">
            <div className="reviews__image col-12 col-md-2">
              <img
                className="image__item"
                src="https://picsum.photos/100"
                alt="Review"
              />
            </div>
            <div className="reviews__name col-6 col-md-8">
              <h3 className="heading--dark fw-bold">Thomas</h3>
              <Stars name="read-only" size="large" value={4} readOnly />
              <p className="text--lightGrey">1 week ago</p>
            </div>
            <div className="reviews__icons col-6 col-md-2 d-flex align-items-center justify-content-end gap-3">
              <ThumbUp fontSize="large" /> <ThumbDown fontSize="large" />
            </div>
          </div>
          <div className="reviews__text text--darkGrey pb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sit
            accusamus quam maxime dignissimos, aut temporibus tempora cupiditate
            doloremque dolores libero minima enim expedita voluptatum! Itaque
            dignissimos sunt quod aperiam! Modi reprehenderit similique
            laudantium magnam commodi beatae ratione distinctio asperiores saepe
            debitis, sunt iste fugit maxime quos? Maiores fugiat doloribus
            laboriosam, similique eius quod ratione. Voluptatum, dolorem
            sapiente? Autem, nemo.
          </div>
        </div>
        <div className="button-container text-center">
          <button className="btn--main rounded">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Rating;
