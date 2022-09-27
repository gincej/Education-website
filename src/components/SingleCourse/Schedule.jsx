import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ArticleIcon from "@mui/icons-material/Article";

const Schedule = () => {
  const initialData = [
    { id: 0, state: "true" },
    { id: 1, state: "false" },
    { id: 2, state: "false" },
    { id: 3, state: "false" },
    { id: 4, state: "false" },
    { id: 5, state: "false" },
  ];

  const [expanded, setExpanded] = useState(initialData);

  const toggleExpand = (id) => {
    let newStates = expanded.slice();
    newStates[id].state = !newStates[id].state;
    setExpanded(newStates);
  };

  return (
    <div className="schedule">
      <div className="schedule__top d-flex align-items-baseline justify-content-between">
        <h2 className="heading--dark fw-bold m-0 mb-5">Module Courses</h2>
        <p className="text--dark fw-bold m-0">
          24 Modules - 124 Lectures - 24h 12m
        </p>
      </div>
      <Accordion expanded={expanded[0].state} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" />}
          onClick={() => toggleExpand(0)}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4 className="menu__title heading--dark fw-bold m-0">
            Introducing to Web Development
          </h4>
        </AccordionSummary>
        <AccordionDetails className="p-0">
          <ul className="schedule__list list-unstyled text--regular p-3 border">
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                Welcome!
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Courses Resources
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Join online group classes
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                How do websites work?
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                What is internet?
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 p-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Download 10 rules of code
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded[1].state} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" />}
          onClick={() => toggleExpand(1)}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4 className="menu__title heading--dark fw-bold m-0">
            Introducing HTML
          </h4>
        </AccordionSummary>
        <AccordionDetails className="p-0">
          <ul className="schedule__list list-unstyled text--regular p-3 border">
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                Welcome!
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                What is internet?
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 p-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Download 10 rules of code
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded[2].state} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" />}
          onClick={() => toggleExpand(2)}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4 className="menu__title heading--dark fw-bold m-0">
            Introducing to Web Development
          </h4>
        </AccordionSummary>
        <AccordionDetails className="p-0">
          <ul className="schedule__list list-unstyled text--regular p-3 border">
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                Welcome!
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Courses Resources
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Join online group classes
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                How do websites work?
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                What is internet?
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 p-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Download 10 rules of code
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded[3].state} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" />}
          onClick={() => toggleExpand(3)}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4 className="menu__title heading--dark fw-bold m-0">
            Intermediate HTML
          </h4>
        </AccordionSummary>
        <AccordionDetails className="p-0">
          <ul className="schedule__list list-unstyled text--regular p-3 border">
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                Welcome!
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Courses Resources
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Join online group classes
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                How do websites work?
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                What is internet?
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 p-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Download 10 rules of code
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded[4].state} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" />}
          onClick={() => toggleExpand(4)}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4 className="menu__title heading--dark fw-bold m-0">
            Introducing CSS
          </h4>
        </AccordionSummary>
        <AccordionDetails className="p-0">
          <ul className="schedule__list list-unstyled text--regular p-3 border">
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                Welcome!
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Courses Resources
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Join online group classes
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                How do websites work?
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                What is internet?
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 p-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Download 10 rules of code
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded[5].state} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" />}
          onClick={() => toggleExpand(5)}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4 className="menu__title heading--dark fw-bold m-0">
            React Fundamentals
          </h4>
        </AccordionSummary>
        <AccordionDetails className="p-0">
          <ul className="schedule__list list-unstyled text--regular p-3 border">
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                Welcome!
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Courses Resources
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Join online group classes
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                How do websites work?
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 d-flex align-items-center">
                {" "}
                <PlayCircleIcon className="icon me-3" fontSize="large" />
                What is internet?
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
            <li className="schedule__item d-flex align-items-center justify-content-between">
              <p className="schedule__label text--dark m-0 p-0 d-flex align-items-center">
                {" "}
                <ArticleIcon className="icon me-3" fontSize="large" />
                Download 10 rules of code
              </p>
              <p className="time text--lightGrey m-0">01:24</p>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <div className="button__container text-center pt-3">
        <button className="btn--main rounded">More Modules</button>
      </div>
    </div>
  );
};

export default Schedule;
