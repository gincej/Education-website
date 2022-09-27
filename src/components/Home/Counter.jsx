import React from "react";
import VideoIcon from "@mui/icons-material/VideoLibraryOutlined";
import PeopleIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonIcon from "@mui/icons-material/AccountCircleOutlined";
import FlagIcon from "@mui/icons-material/FlagOutlined";

const Counter = () => {
  return (
    <div className="counter pt-5 py-md-5 heading--dark mw-100 section">
      <div className="counter__list row">
        <div className="counter__item col-12 col-md-3 pb-5 pb-md-0 d-flex flex-column align-items-center">
          <div className="counter__icon pb-3">
            <VideoIcon className="icon" fontSize="large" />
          </div>
          <div className="counter__title fw-bold">10.000+</div>
          <div className="counter__subtitle">Courses</div>
        </div>
        <div className="counter__item col-12 col-md-3 pb-5 pb-md-0 d-flex flex-column align-items-center">
          <div className="counter__icon pb-3">
            <PeopleIcon className="icon" fontSize="large" />
          </div>
          <div className="counter__title fw-bold">50.000+</div>
          <div className="counter__subtitle">Students</div>
        </div>
        <div className="counter__item col-12 col-md-3 pb-5 pb-md-0 d-flex flex-column align-items-center">
          <div className="counter__icon pb-3">
            <PersonIcon className="icon" fontSize="large" />
          </div>
          <div className="counter__title fw-bold">1000+</div>
          <div className="counter__subtitle">Mentors</div>
        </div>
        <div className="counter__item col-12 col-md-3 pb-5 pb-md-0 d-flex flex-column align-items-center">
          <div className="counter__icon pb-3">
            <FlagIcon className="icon" fontSize="large" />
          </div>
          <div className="counter__title fw-bold">180</div>
          <div className="counter__subtitle">Countries</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
