import React from "react";
import Logo from "../Images/logoipsum-217-light.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer container min-vw-100 px-5 pt-5">
      <div className="footer__body row">
        <div className="footer__description col-12 col-md-6">
          <div className="footer__logo pb-4">
            <img className="w-25" src={Logo} alt="Website logo" />
          </div>
          <div className="footer__text pb-4 pb-md-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            dolores commodi aperiam assumenda, ut earum vel, delectus saepe
            molestiae ad optio laudantium? Aperiam iusto porro dolorem
            dignissimos nostrum voluptatibus reiciendis!
          </div>
        </div>
        <div className="footer__about col-4 col-md-2">
          <p className="footer__title text-md-end">About</p>
          <ul className="about-list list-unstyled d-flex flex-column align-items-md-end">
            <li className="footer__item">
              <a href="/About">About us</a>
            </li>
            <li className="footer__item">
              <a href="/Courses/Programming">Courses</a>
            </li>
            <li className="footer__item">
              <a href="/Contacts">Contact us</a>
            </li>

            <li className="footer__item">
              <a href="">Mentors</a>
            </li>
          </ul>
        </div>
        <div className="footer__support col-4 col-md-2">
          <p className="footer__title text-md-end">Support</p>
          <ul className="support-list list-unstyled d-flex flex-column align-items-md-end">
            <li className="footer__item">
              <a href="">Careers</a>
            </li>
            <li className="footer__item">
              <a href="">Support</a>
            </li>
            <li className="footer__item">
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer__company col-4 col-md-2">
          <p className="footer__title text-md-end">Company</p>
          <ul className="company-list list-unstyled d-flex flex-column align-items-md-end">
            <li className="footer__item">
              <a href="" style={{ whiteSpace: "nowrap" }}>
                Privacy Policy
              </a>
            </li>
            <li className="footer__item">
              <a href="" style={{ whiteSpace: "nowrap" }}>
                Terms of Service
              </a>
            </li>
            <li className="footer__item">
              <a href="" style={{ whiteSpace: "nowrap" }}>
                Code of Conduct
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright row pt-5">
        <div className="footer__item col d-flex gap-md-4">
          <a href="">Privacy Policy</a>

          <a href="">Terms and Conditions</a>
        </div>
        <div className="col d-flex justify-content-end">
          <p>@2020 TanahAir Studio. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
