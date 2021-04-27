import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as ArrowUp } from "assets/svgs/arrowup.svg";
import { ReactComponent as ArrowDown } from "assets/svgs/arrowdown.svg";
import "./index.scss";


const Card = ({ data }) => {
  return (
    <section
      className="card"
      style={{
        backgroundColor: data?.color || "#FDECE2",
      }}
    >
      <h5>{data?.name}</h5>
      <h2 className="h-1">{data?.count}</h2>
      {data.trend === true ? (
        <p className="d-flex up align-center">
          <ArrowUp />

          {data?.percent}
        </p>
      ) : (
        <p className=" d-flex down  align-center">
          <ArrowDown />
          {data?.percent}
        </p>
      )}
      <p>Since last week</p>
    </section>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
