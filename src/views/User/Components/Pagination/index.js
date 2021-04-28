import React, { Fragment } from "react";
import { ReactComponent as CaretLeft } from "assets/svgs/caretleft.svg";
import { ReactComponent as CaretRight } from "assets/svgs/caretright.svg";
import "./index.scss";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const execPaginate = (num) => {
    paginate(num);
  };

  const nextPage = () => {
    paginate(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    paginate(currentPage - 1);
    setCurrentPage(currentPage - 1);
  };

  return (
    <Fragment>
      <ul className="d-flex">
        {currentPage !== 1 && (
          <li>
            <button onClick={prevPage}>
              <CaretLeft />
            </button>
          </li>
        )}

        {pageNumbers.map((number, index) => {
          return (
            <li>
              <button
                className={index + 1 === currentPage ? "active" : ""}
                key={number}
                onClick={() => execPaginate(number)}
              >
                {number}
              </button>
            </li>
          );
        })}

        <li>
          <button className="rest">...</button>
        </li>

        {currentPage === Math.ceil(totalPosts / postsPerPage) ? (
          ""
        ) : (
          <li>
            <button onClick={nextPage}>
                <CaretRight />
            </button>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

export default Pagination;
