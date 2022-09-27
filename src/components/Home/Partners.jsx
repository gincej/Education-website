import React from "react";
import Logo1 from "../Images/Partners/logoipsum-235.svg";
import Logo3 from "../Images/Partners/logoipsum-250.svg";
import Logo5 from "../Images/Partners/logoipsum-258.svg";
import Logo6 from "../Images/Partners/logoipsum-259.svg";
import Logo7 from "../Images/Partners/logoipsum-260.svg";
import Logo8 from "../Images/Partners/logoipsum-262.svg";
const Partners = () => {
  return (
    <div className="partners section container mb-5 pb-5">
      <h2 className="partners__title text--xlarge heading--dark fw-bold text-center pb-5">
        Trusted by Companies
      </h2>
      <div className="partners__body row px-4 p--md-0 mw-100 d-flex justify-content-center">
        <div className="partners__item col-6 col-md-4" id="logo-1">
          <img src={Logo1} alt="Company" />
        </div>

        <div className="partners__item col-6 col-md-4">
          <img src={Logo3} alt="Company" />
        </div>

        <div className="partners__item col-6 col-md-4">
          <img src={Logo5} alt="Company" />
        </div>
        <div className="partners__item col-6 col-md-4" id="logo-4">
          <img src={Logo6} alt="Company" />
        </div>
        <div className="partners__item col-6 col-md-4">
          <img src={Logo7} alt="Company" />
        </div>
        <div className="partners__item col-6 col-md-4">
          <img src={Logo8} alt="Company" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
