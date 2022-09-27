import React from "react";
import Picture from "../Images/hero.png";
import SearchIcon from "@mui/icons-material/Search";
import Time from "@mui/icons-material/AccessTime";
import Account from "@mui/icons-material/AccountCircleOutlined";
import Video from "@mui/icons-material/VideoLibraryOutlined";

const Hero = () => {
  return (
    <div className="hero container py-5 min-vw-100" id="card-4">
      <div className="hero__body row m-0 d-flex align-items-center justify-content-center">
        <div className="hero__left col-12 col-md-6 d-flex flex-column gap-3 p-md-5">
          <h1 className="hero__heading heading--light text--heading fw-bold">
            Find the Best Courses and Amazing Mentors
          </h1>
          <h4 className="hero__text text--light pb-md-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aut
            culpa ratione dolorum temporibus deleniti voluptatem nihil numquam,
            corrupti eum.
          </h4>
          <div className="hero__search p-2 bg-white rounded d-flex align-items-center">
            <SearchIcon fontSize="large" />
            <input
              className="input-field w-100 text--regular"
              type="text"
              name="search"
              id="search"
              placeholder="Search for a course you'd like to learn..."
            />
            <button className="hero__button btn--main rounded d-none d-md-block">
              Search
            </button>
          </div>

          <button className="hero__button btn--main mt-3 mw-50 align-self-center rounded d-block d-md-none">
            Search
          </button>
          <div className="hero__items text--light text--large w-100 row pt-3 pt-md-5 d-flex justify-content-between gap-3 gap-sm-0">
            <div className="col-12 col-sm-4 d-flex align-items-center justify-content-center gap-1">
              <Time fontSize="large" />
              Lifetime Access
            </div>
            <div className="col-12 col-sm-4 d-flex align-items-center justify-content-center gap-1">
              <Account fontSize="large" /> Expert Mentors
            </div>
            <div className="col-12 col-sm-4 d-flex align-items-center justify-content-center gap-1">
              <Video fontSize="large" />
              100k+ Courses
            </div>
          </div>
        </div>
        <div className="hero__right col-12 col-md-6 text-center">
          <img
            className="hero__image img-fluid p-5"
            src={Picture}
            alt="Computer"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
