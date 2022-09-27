import React from "react";
import Arrow from "@mui/icons-material/ArrowForwardIos";

const Header = (props) => {
  return (
    <div className="header container w-75 w-md-50 m-5">
      <div className="header__label d-flex align-items-center">
        <p className="m-0 text--lightGrey">Home</p>
        <Arrow className="text--dark" fontSize="small" />
        <p className="m-0 text--dark">{props.title} Courses</p>
      </div>
      <h1 className="header__title heading--dark text--xlarge fw-bold py-4">
        {props.title} Courses
      </h1>
      <p className="header__text text--large text--lightGrey">{props.about}</p>
    </div>
  );
};

export default Header;
