import React from "react";

const ReviewItem = (props) => {
  return (
    <div className="review row d-flex justify-content-center mw-md-50 px-md-5 mx-md-5">
      <div className="review__image col-12 col-md-5 d-flex justify-content-center">
        <img
          className="w-75 rounded"
          src="https://picsum.photos/300/"
          alt="Review"
        />
      </div>
      <div className="review__body col-12 col-md-7 p-5 p-md-0 d-flex flex-column justify-content-center">
        <h1 className="body__text heading--dark pb-3 pe-md-5">
          "{props.text}"
        </h1>

        <div className="body__name text--large heading--dark fw-bold">
          {props.name}
        </div>

        <div className="body__course text--darkGrey text--regular">
          {props.course}
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
