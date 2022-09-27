import React from "react";

const CategoryItem = (props) => {
  return (
    <div
      className="list__item col-6 col-md-3 my-3 position-relative"
      onClick={(event) => (window.location.href = `/Courses/Programming`)} //should be Courses/${props.title}
    >
      <div className="image__container h-100 rounded">
        <img className="image h-100 w-100" src={props.image} alt="Category" />
        <h4 className="item__label position-absolute top-50 start-50 translate-middle text-center">
          {props.title}
        </h4>
      </div>
    </div>
  );
};

export default CategoryItem;
