import React from "react";
import TopicItem from "./TopicItem";

const Topics = (props) => {
  return (
    <div className="topics section">
      <div className="topics__body container mw-75 d-flex flex-column">
        <div className="topics__top mb-4 d-flex justify-content-between flex-wrap">
          <h1 className="topics__title heading--dark fw-bold">
            {props.title} Topics
          </h1>

          <button className="btn--main btn--wide rounded">See All</button>
        </div>

        <div className="topics__list row align-self-center">
          {props.topicList.map((topic) => (
            <TopicItem title={topic.title} id={topic.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
