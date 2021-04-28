import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { ReactComponent as ApprovedIcon } from "assets/svgs/approved.svg";
import { ReactComponent as PendingIcon } from "assets/svgs/pending.svg";
import { ReactComponent as DeclinedIcon } from "assets/svgs/declined.svg";
import { ReactComponent as CaretDown } from "assets/svgs/caretdown.svg";
import { ReactComponent as CaretLeft } from "assets/svgs/caretleft.svg";
import { ReactComponent as CaretRight } from "assets/svgs/caretright.svg";
import "./index.scss";


const Chart = ({ chartData }) => {
  return (
    <Fragment>
      <section className="w-100 chart__container">
        
      </section>
    </Fragment>
  );
};

Chart.propTypes = {
  Chart: PropTypes.array.isRequired,
};

export default Chart;
