import React from "react";
import "./about.css";
import Enroll from "../Home/Enroll";
import Counter from "../Home/Counter";

const About = () => {
  return (
    <div className="about mw-md-100">
      <h1 className="about__title heading--light text--heading fw-bold text-center w-100">
        About Us
      </h1>
      <div className="about__welcome row">
        <div className="welcome__image col d-flex justify-content-center pb-5 pb-md-0">
          <img
            className="rounded img-fluid w-md-75"
            src="https://picsum.photos/500"
            alt="Welcome"
          />
        </div>
        <div className="welcome__text col d-flex flex-column justify-content-center">
          <h1 className="heading--dark text--heading fw-bold pb-4">
            Headmaster's Welcome
          </h1>
          <p className="text-darkGrey text--regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non
            voluptates aut nulla animi vero voluptatum iusto quas recusandae,
            hic consequuntur minima fuga laboriosam dolores accusantium.
            Incidunt doloremque harum quam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Omnis non voluptates aut nulla animi
            vero voluptatum iusto quas recusandae, hic consequuntur minima fuga
            laboriosam dolores accusantium. Incidunt doloremque harum quam.
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non
            voluptates aut nulla animi vero voluptatum iusto quas recusandae,
            hic consequuntur minima fuga laboriosam dolores accusantium.
            Incidunt doloremque harum quam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Omnis non voluptates aut nulla animi
            vero voluptatum iusto quas recusandae, hic consequuntur minima fuga
            laboriosam dolores accusantium. Incidunt doloremque harum quam.
          </p>
        </div>
      </div>
      <Counter />
      <div className="about__mission">
        <div className="row p-md-5 d-flex align-items-center">
          <h1 className="heading--dark col-12 col-md-6 fw-bold text--heading text-center pb-3 pb-md-0">
            Our Story
          </h1>
          <p className="text--darkGrey col-12 col-md-6 text--regular">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            nostrum mollitia eligendi, iste saepe pariatur autem! Ex error
            soluta vel placeat nostrum aspernatur incidunt. Quibusdam labore
            libero sint expedita excepturi. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Repellat nostrum mollitia eligendi,
            iste saepe pariatur autem! Ex error soluta vel placeat nostrum
            aspernatur incidunt. Quibusdam labore libero sint expedita
            excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellat nostrum mollitia eligendi, iste saepe pariatur autem! Ex
            error soluta vel placeat nostrum aspernatur incidunt. Quibusdam
            labore libero sint expedita excepturi. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Repellat nostrum mollitia eligendi,
            iste saepe pariatur autem! Ex error soluta vel placeat nostrum
            aspernatur incidunt. Quibusdam labore libero sint expedita
            excepturi.
          </p>
        </div>
        <hr />
        <div className="row p-md-5 pb-0 d-flex align-items-center">
          <p className="text--darkGrey col-12 col-md-6 text--regular order-md-0 order-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            nostrum mollitia eligendi, iste saepe pariatur autem! Ex error
            soluta vel placeat nostrum aspernatur incidunt. Quibusdam labore
            libero sint expedita excepturi. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Repellat nostrum mollitia eligendi,
            iste saepe pariatur autem! Ex error soluta vel placeat nostrum
            aspernatur incidunt. Quibusdam labore libero sint expedita
            excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellat nostrum mollitia eligendi, iste saepe pariatur autem! Ex
            error soluta vel placeat nostrum aspernatur incidunt. Quibusdam
            labore libero sint expedita excepturi. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Repellat nostrum mollitia eligendi,
            iste saepe pariatur autem! Ex error soluta vel placeat nostrum
            aspernatur incidunt. Quibusdam labore libero sint expedita
            excepturi.
          </p>
          <h1 className="heading--dark col-12 col-md-6 text--heading fw-bold text-center order-md-1 order-0 pb-3 pb-md-0">
            Our Mission
          </h1>
        </div>
      </div>
      <Enroll />
    </div>
  );
};

export default About;
