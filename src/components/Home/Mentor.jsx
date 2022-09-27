import React from "react";
import MentorImage from "../Images/Mentor.jpg";

const Mentor = () => {
  return (
    <div className="mentor section my-md-5">
      <div className="row mx-md-5">
        <div className="mentor__image col-12 col-md-6 pb-4 pb-md-0 text-center">
          <img className="w-100 rounded" src={MentorImage} alt="" />
        </div>
        <div className="mentor__body col-12 col-md-6 d-flex flex-column justify-content-center">
          <h1 className="mentor__title text--xlarge heading--dark fw-bold mb-4">
            Become a Mentor
          </h1>
          <p className="mentor__text text--darkGrey text--regular">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            distinctio obcaecati qui ducimus, fuga, ut accusantium omnis
            repudiandae eos repellat quos perferendis vel aliquam? Aut veritatis
            facere ea ut nemo.
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            distinctio obcaecati qui ducimus, fuga, ut accusantium omnis
            repudiandae eos repellat quos perferendis vel aliquam? Aut veritatis
            facere ea ut nemo.
          </p>
          <div className="button-container">
            <button className="mentor__button btn--main rounded mt-3">
              Start Teaching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
