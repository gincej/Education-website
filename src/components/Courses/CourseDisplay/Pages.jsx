import React from "react";

const Pages = ({ itemsPerPage, totalItems, paginate }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pages.map((number) => (
          <li key={number} className="page-item">
            <a
              href="#content"
              onClick={() => paginate(number)}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pages;
