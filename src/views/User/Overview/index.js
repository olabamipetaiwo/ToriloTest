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
            <section className="overview__card">
              <div className="row">
                <div className="round">
                  <input id="checkbox1" type="checkbox" />
                  <label htmlFor="checkbox1"></label>
                </div>
                <p>Complete Your Profile</p>
              </div>

              <div className="row">
                <div className="round">
                  <input id="checkbox3" type="checkbox" />
                  <label htmlFor="checkbox3"></label>
                </div>
                <p>Create a Service</p>
              </div>

              <div className="row">
                <div className="round">
                  <input id="checkbox2" type="checkbox" />
                  <label htmlFor="checkbox2"></label>
                </div>
                <p>Connect with a customer</p>
              </div>
            </section>
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default Overview;
