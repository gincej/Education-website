import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, Slider } from "@mui/material";

const Sidebar = (props) => {
  const initialData = [
    { id: 0, state: "true" },
    { id: 1, state: "true" },
    { id: 2, state: "true" },
    { id: 3, state: "true" },
    { id: 4, state: "true" },
    { id: 5, state: "true" },
  ];

  const [expanded, setExpanded] = useState(initialData);

  const toggleExpand = (id) => {
    let newStates = expanded.slice();
    newStates[id].state = !newStates[id].state;
    setExpanded(newStates);
  };

  function valuetext(value) {
    return `${value}`;
  }
  const [value, setValue] = React.useState([100, 300]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <nav
      className={
        props.state ? "sidebar sidebar--active col-md-2" : "sidebar col-1"
      }
    >
      <ul className="sidebar__menu list-unstyled">
        <li>
          <Accordion expanded={expanded[0].state} elevation={0}>
            <AccordionSummary
              className="d-flex gap-5"
              expandIcon={<ExpandMoreIcon fontSize="large" />}
              onClick={() => toggleExpand(0)}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3 className="menu__title heading--dark fw-bold m-0">
                Duration
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="checkbox__list list-unstyled">
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    1-3 Hours
                  </p>
                  <p className="item-count text--lightGrey m-0">(1242)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    3-6 Hours
                  </p>
                  <p className="item-count text--lightGrey m-0">(2145)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    6-12 Hours
                  </p>
                  <p className="item-count text--lightGrey m-0">(242)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    13+ Hours
                  </p>
                  <p className="item-count text--lightGrey m-0">(2049)</p>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <hr className="m-2"></hr>
        </li>
        <li>
          <Accordion expanded={expanded[1].state} elevation={0}>
            <AccordionSummary
              className="d-flex gap-5"
              expandIcon={<ExpandMoreIcon fontSize="large" />}
              aria-controls="panel1a-content"
              onClick={() => toggleExpand(1)}
              id="panel1a-header"
            >
              <h3 className="menu__title heading--dark fw-bold m-0">
                Categories
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="checkbox__list list-unstyled">
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    Golang
                  </p>
                  <p className="item-count text--lightGrey m-0">(1242)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">Java</p>
                  <p className="item-count text--lightGrey m-0">(2145)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    Flutter
                  </p>
                  <p className="item-count text--lightGrey m-0">(242)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">CSS</p>
                  <p className="item-count text--lightGrey m-0">(2049)</p>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <hr className="m-2"></hr>
        </li>
        <li>
          <Accordion expanded={expanded[2].state} elevation={0}>
            <AccordionSummary
              className="d-flex gap-5"
              expandIcon={<ExpandMoreIcon fontSize="large" />}
              aria-controls="panel1a-content"
              onClick={() => toggleExpand(2)}
              id="panel1a-header"
            >
              <h3 className="menu__title heading--dark fw-bold m-0">Level</h3>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="checkbox__list list-unstyled">
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    Beginner
                  </p>
                  <p className="item-count text--lightGrey m-0">(2049)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    Intermediate
                  </p>
                  <p className="item-count text--lightGrey m-0">(2145)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    Expert
                  </p>
                  <p className="item-count text--lightGrey m-0">(1520)</p>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <hr className="m-2"></hr>
        </li>
        <li>
          <Accordion expanded={expanded[3].state} elevation={0}>
            <AccordionSummary
              className="d-flex gap-5"
              expandIcon={<ExpandMoreIcon fontSize="large" />}
              aria-controls="panel1a-content"
              onClick={() => toggleExpand(3)}
              id="panel1a-header"
            >
              <h3 className="menu__title heading--dark fw-bold m-0">
                Language
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="checkbox__list list-unstyled">
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    English
                  </p>
                  <p className="item-count text--lightGrey m-0">(3528)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    Spanish
                  </p>
                  <p className="item-count text--lightGrey m-0">(150)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    Lithuanian
                  </p>
                  <p className="item-count text--lightGrey m-0">(65)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    German
                  </p>
                  <p className="item-count text--lightGrey m-0">(220)</p>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <hr className="m-2"></hr>
        </li>
        <li>
          <Accordion expanded={expanded[4].state} elevation={0}>
            <AccordionSummary
              className="d-flex gap-5"
              expandIcon={<ExpandMoreIcon fontSize="large" />}
              aria-controls="panel1a-content"
              onClick={() => toggleExpand(4)}
              id="panel1a-header"
            >
              <h3 className="menu__title heading--dark fw-bold m-0">Price</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Slider
                min={1}
                step={5}
                max={1000}
                marks={[
                  { value: 1, label: "1" },
                  { value: 500, label: "500$" },
                  { value: 1000, label: "1000$" },
                ]}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </AccordionDetails>
          </Accordion>

          <hr className="m-2"></hr>
        </li>
        <li>
          <Accordion expanded={expanded[5].state} elevation={0}>
            <AccordionSummary
              className="d-flex gap-5"
              expandIcon={<ExpandMoreIcon fontSize="large" />}
              aria-controls="panel1a-content"
              onClick={() => toggleExpand(5)}
              id="panel1a-header"
            >
              <h3 className="menu__title heading--dark fw-bold m-0">
                Features
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="checkbox__list list-unstyled">
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    Video lessons
                  </p>
                  <p className="item-count text--lightGrey m-0">(3528)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    Audio books
                  </p>
                  <p className="item-count text--lightGrey m-0">(150)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    E-books
                  </p>
                  <p className="item-count text--lightGrey m-0">(65)</p>
                </li>
                <li className="checkbox__item d-flex align-items-center gap-1">
                  <Checkbox />{" "}
                  <p className="checkbox__label text--dark m-0 fw-bold">
                    Real project
                  </p>
                  <p className="item-count text--lightGrey m-0">(220)</p>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <hr className="m-2"></hr>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
