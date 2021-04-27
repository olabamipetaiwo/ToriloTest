import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Card from "components/Card/index";
import "./index.scss";
import { cards } from "data/cards";

const Overview = () => {
  return (
    <Fragment>
      <Header />
      <section className="mainContent">
        <div className="row-full">
          <section className="overview">
            <div className="col">
              <h2 className="h-1 mb-sm">Overview</h2>
              <section className="d-flex space-between cards">
                {cards.length > 0 &&
                  cards.map((data) => {
                    return <Card data={data} key={data.name} />;
                  })}
              </section>
              <section className="row">
                <section className="row-lg"></section>
                <section className="row-sm">
                  <div className="col">
                    <div className="col customerSatisfaction">
                      
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default Overview;
