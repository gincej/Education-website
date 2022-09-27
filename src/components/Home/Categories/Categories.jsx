import React from "react";
import CategoryItem from "./CategoryItem";
import Art from "../../Images/Categories/Art.jpg";
import Business from "../../Images/Categories/Business.jpg";
import Copywriting from "../../Images/Categories/Copywriting.jpg";
import Marketing from "../../Images/Categories/Marketing.jpg";
import PersonalDevelopment from "../../Images/Categories/Personal-Development.jpg";
import Photography from "../../Images/Categories/Photography.jpg";
import Programming from "../../Images/Categories/Art.jpg";
import Videography from "../../Images/Categories/Videography.jpg";

const categoryList = [
  { title: "Art & Design", image: Art, id: 1 },
  { title: "Business", image: Business, id: 2 },
  { title: "Copywriting", image: Copywriting, id: 3 },
  { title: "Marketing", image: Marketing, id: 4 },
  { title: "Programming", image: Programming, id: 5 },
  { title: "Photography", image: Photography, id: 6 },
  { title: "Videography", image: Videography, id: 7 },
  {
    title: "Personal Development",
    image: PersonalDevelopment,
    id: 8,
  },
];

const Categories = () => {
  return (
    <div className="categories section">
      <div className="categories__body container mw-100 m-0 px-md-5">
        <h1 className="categories__title text--xlarge heading--dark fw-bold pb-2 pb-md-5">
          Top Categories
        </h1>
        <div className="categories__list row">
          {categoryList.map((category) => (
            <CategoryItem
              title={category.title}
              image={category.image}
              key={category.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
