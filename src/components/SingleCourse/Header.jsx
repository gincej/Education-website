import React from "react";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import ShareIcon from "@mui/icons-material/ShareOutlined";
import AddIcon from "@mui/icons-material/Add";
import { Rating } from "@mui/material";

const Header = () => {
  return (
    <div className="course-header mw-100">
      <div className="overlay d-flex flex-column gap-3" id="overlay">
        <div className="header__label d-flex align-items-center">
          <p className="m-0 text--light">Home</p>
          <Arrow className="text--light" fontSize="small" />
          <p className="m-0 text--light"> Programming Courses</p>

          <Arrow className="text--light" fontSize="small" />

          <p className="m-0 text--light">
            How To Become An Expert Web Developer
          </p>
        </div>
        <h1 className="header__title heading--light text--xlarge fw-bold py-4 w-50">
          How to Become an Expert Web Developer
        </h1>

        <div className="rating w-100 mb-2 d-flex flex-wrap align-items-end gap-3">
          <Rating name="read-only" size="large" value={5} readOnly />
          <h5 className="rating__label text--light m-0 fw-bold">4,7/5</h5>
          <p className="rating__label text--small text--light m-0 d-inline ">
            (1023 Reviews)
          </p>
          <p className="rating__label text--small text--light m-0 d-inline ">
            20327 Students
          </p>
        </div>
        <div className="creator d-flex gap-3 align-items-center">
          <img
            className="creator__picture"
            src="https://picsum.photos/50"
            alt="Creator"
          />
          <p className="creator__name text text--light m-0">
            Anne Diana Millers
          </p>
        </div>
        <div className="course__actions d-flex gap-1 gap-md-3 pt-5">
          <button className="btn--main rounded d-flex align-items-center gap-1">
            Add To Wishlist <AddIcon fontSize="large" />
          </button>
          <button className="btn--share rounded d-flex align-items-center gap-1">
            Share <ShareIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
