import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Ratings from "components/Rating/index";
import "./index.scss";

const CustomerSatisfaction = ({ reviews }) => {
  const base = Array.from({ length: 10 }, (_, i) => i + 1);

  const formatRating = (rating) => parseInt(Math.floor(rating / 10));

  return (
    <Fragment>
      <div className="col customerSatisfaction">
        <h2 className="h-1 primary">Customer Satisfaction</h2>
        <p className="p-1 grey mt-xs mb-xs"> Across help desk this month</p>
        <p className="p-1 primary"> Response received</p>
        <h3 className="h-1 mb-sm">390</h3>

        {reviews.length > 0 &&
          reviews.map((review) => {
            return (
              <div className="row space-between mb-xs">
                <p className="p-1 rate">{review.type}</p>
                <div className="d-flex stars">
                  {base.map((star) =>
                    star <= formatRating(review.percent) ? (
                      <Ratings color={review.color} />
                    ) : (
                      <Ratings />
                    )
                  )}
                </div>
                <p className="p-1">{review.percent}%</p>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

CustomerSatisfaction.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default CustomerSatisfaction;
