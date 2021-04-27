import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Rating = ({ color }) => {
  return (
    <Fragment>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z"
          fill={color ? color : "white"}
        />
      </svg>
    </Fragment>
  );
};

Rating.propTypes = {
  color: PropTypes.string,
};

export default Rating;
