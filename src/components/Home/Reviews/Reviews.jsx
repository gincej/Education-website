import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ReviewItem from "./ReviewItem";

const reviewList = [
  {
    id: 1,
    reviewText:
      "After studying here I gained new knowledge and insights. The mentor was very friendly and guided me to get the knowledge I wanted. Thank you!",
    name: "John Brenner",
    reviewCourse: "Web development",
  },
  {
    id: 2,
    reviewText: "Great study material and very helpful mentors.",
    name: "Amy Rodgers",
    reviewCourse: "Graphic design",
  },
  {
    id: 3,
    reviewText:
      "Very high value course. A perfect option for it's money's worth!",
    name: "Laura Damens",
    reviewCourse: "Python fundamentals",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="section">
      <Carousel
        className="mw-100 m-0 p-0"
        activeIndex={index}
        onSelect={handleSelect}
        variant="dark"
      >
        {reviewList.map((review) => (
          <Carousel.Item className="my-5">
            <ReviewItem
              text={review.reviewText}
              name={review.name}
              course={review.reviewCourse}
              key={review.id}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
