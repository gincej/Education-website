import React from "react";
import "./contacts.css";
import QuestionIcon from "@mui/icons-material/QuestionAnswerOutlined";
import LocationIcon from "@mui/icons-material/LocationOnOutlined";
import SmartphoneIcon from "@mui/icons-material/SmartphoneOutlined";
import ContactPicture from "../Images/Contacts.jpg";

const Contacts = () => {
  const handleSubmit = (e) => {
    alert("Your form was successfully submitted!");
    e.preventDefault();
  };

  return (
    <div className="contacts">
      <div className="contacts__info row">
        <div className="info__content col-12 col-md-6 pb-5 pb-md-0 d-flex justify-content-center">
          <div className="wrapper">
            <p className="text-uppercase text--darkGrey">Contact Information</p>
            <h1 className="heading--dark fw-bold pb-4">Get In Touch</h1>
            <div className="info__list row gap-3">
              <div className="info__icon col-1">
                <QuestionIcon fontSize="large" />
              </div>
              <div className="info__text col-5">
                <p className="text--darkGrey m-0">Talk to us:</p>
                <p className="text--dark text--regular"> hello@createx.com</p>
              </div>
            </div>
            <div className="info__list row gap-3">
              <div className="info__icon col-1">
                <SmartphoneIcon fontSize="large" />
              </div>
              <div className="info__text col-5">
                <p className="text--darkGrey m-0">Call us:</p>
                <p className="text--dark text--regular"> (370)63595955</p>
              </div>
            </div>
            <div className="info__list row gap-3">
              <div className="info__icon col-1">
                <LocationIcon fontSize="large" />
              </div>
              <div className="info__text col-5">
                <p className="text--darkGrey m-0">Address:</p>
                <p className="text--dark text--regular">
                  {" "}
                  Pievų g. 15a, Vilnius, Lithuania
                </p>
              </div>
            </div>
            <p className="text-uppercase text--darkGrey pt-3">Follow us:</p>
            <div className="social-icons d-flex gap-2 gap-md-4">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
        </div>

        <div className="contacts__map px-5 px-md-0 col-12 col-md-6 text-center d-flex align-items-center">
          <iframe
            title="contact map"
            className="map rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.9470011703747!2d25.25947801589036!3d54.71055558028749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd915751bd7cd9%3A0x7feb25790f366e70!2sAkropolis%20Vilnius!5e0!3m2!1slt!2slt!4v1662322529560!5m2!1slt!2slt"
            width="800"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contacts__form text--darkGrey  text--regular row ">
        <div className="form__image col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img className="w-75" src={ContactPicture} alt="Contacts" />
        </div>
        <div className="form__body col-12 col-md-6  ps-5 ps-md-0">
          <p className="text-uppercase text--darkGrey">Any questions?</p>
          <h1 className="heading--dark fw-bold pb-4">Drop Us a Line</h1>
          <form className="row" onSubmit={() => handleSubmit()}>
            <div className="col-6 pb-3">
              <label htmlFor="first-name" className="form-label">
                Fist name*
              </label>
              <input
                type="text"
                className="form-control"
                id="first-name"
                placeholder="Your first name"
                required
              />
            </div>
            <div className="col-6">
              <label htmlFor="last-name" className="form-label">
                Last name*
              </label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                placeholder="Your last name"
                required
              />
            </div>
            <div className="col-6">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your working email"
                required
              />
            </div>
            <div className="col-6 pb-3">
              <label htmlFor="phone" className="form-label">
                Phone*
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="+(370)"
                pattern="[0-9]{8}"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Message*
              </label>
              <textarea
                className="message form-control"
                id="message"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div className="checkbox__container d-flex flex-column pt-4">
              <input
                type="checkbox"
                className="form-check-input me-2"
                id="checkbox"
              />
              <label
                className="text--small form-check-label"
                htmlFor="checkbox"
              >
                I agree to receive communication from Online School
              </label>

              <button
                className="btn--main rounded w-50 mt-3 mb-3"
                type="submit"
                value="Submit"
                id="btn-submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
