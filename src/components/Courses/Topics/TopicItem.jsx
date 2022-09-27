import React from "react";

const TopicItem = (props) => {
  return (
    <div
      className="list__item col-6 col-md-3 my-3 position-relative"
      id={props.id}
    >
      <div className="image__container h-100 rounded">
        <img
          className="image h-100 w-100"
          src="https://picsum.photos/200/300"
          alt="Category"
        />
        <h4 className="item__label position-absolute top-50 start-50 translate-middle text-center">
          {props.title}
        </h4>
      </div>
    </div>
  );
};

export default TopicItem;
