import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "./index.scss";

const Overview = () => {
  return (
    <Fragment>
      <Header pageName="Overview" />
      <section className="mainContent">
        <div className="row-1">
          <section className="overview">
            <h2 className="h-admin mb-xs">Get Started</h2>
          </section>
          <section className="overview">
            <h2 className="h-admin mb-xs">Get Started</h2>
          </section>
          <section className="overview">
            <h2 className="h-admin mb-xs">Get Started</h2>
          </section>
          <section className="overview">
            <h2 className="h-admin mb-xs">Get Started</h2>
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default Overview;
