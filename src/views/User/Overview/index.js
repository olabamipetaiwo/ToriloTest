import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Card from "components/Card/index";
import Table from "../Components/Table/index";

import CustomerSatisfaction from "../Components/CustomerSatisfaction/index";
import Messages from "../Components/Messages/index";
import "./index.scss";
import { cards, reviews, messages,tableData } from "data/data";
// import Chart from "./Chart";
// import Table from "./Table";


const Overview = () => {
  return (
    <Fragment>
      <Header />
      <section className="mainContent">
        <div className="row-full">
          <section className="overview col">
            <h2 className="h-1 mb-sm">Overview</h2>
            <section className="d-flex space-between cards">
              {cards.length > 0 &&
                cards.map((data) => {
                  return <Card data={data} key={data.name} />;
                })}
            </section>

            {/* Chart */}
            {/* <section className="col mt-sm">
              <div className="row">
                <h3>Monthly</h3>
              </div>
              <div className="row w-100 chart"><Chart /></div>
            </section> */}
            {/* Chart */}

            {/* FOoter */}
            <section className="d-flex space-between mt-sm mainView">
              {/* Table */}
              <section className="row-lg">
                <Table tableData={tableData} />
              </section>
              {/* Table */}

              <section className="row-sm">
                <div className="col">
                  <CustomerSatisfaction reviews={reviews} />
                </div>
                <div className="col mt-sm mb-sm">
                  <Messages messages={messages} />
                </div>
              </section>
            </section>
            {/* Foote*/}
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default Overview;
