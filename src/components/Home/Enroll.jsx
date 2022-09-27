import React from "react";

const Enroll = () => {
  return (
    <div className="enroll ">
      <div className="enroll__content row px-md-5">
        <div className="col px-md-5 d-flex flex-column gap-5 align-items-center  pb-5 pb-md-0">
          <h1 className="heading--dark fw-bold text--xlarge">Enroll Now</h1>
          <p className="text--darkGrey text--regular">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            deserunt velit commodi consectetur praesentium dolor, perferendis
            nostrum libero debitis labore eos veritatis voluptate alias aut amet
            inventore distinctio, dolores nam!
          </p>
          <button
            className="btn--main rounded w-100 w-md-50"
            onClick={(event) =>
              (window.location.href = `/Courses/Programming/`)
            }
          >
            View Courses
          </button>
        </div>
        <div className="col px-md-5 d-flex flex-column gap-5 align-items-center">
          <h1 className="heading--dark fw-bold text--xlarge">Contact Us</h1>
          <p className="text--darkGrey text--regular">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            deserunt velit commodi consectetur praesentium dolor, perferendis
            nostrum libero debitis labore eos veritatis voluptate alias aut amet
            inventore distinctio, dolores nam!
          </p>
          <button
            className="btn--main rounded w-100 w-md-50"
            onClick={(event) => (window.location.href = `/Contacts`)}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
export default Enroll;
