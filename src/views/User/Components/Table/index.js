import React, { Fragment } from "react";
import "./index.scss";
import { ReactComponent as ApprovedIcon } from "assets/svgs/approved.svg";
import { ReactComponent as PendingIcon } from "assets/svgs/pending.svg";
import { ReactComponent as DeclinedIcon } from "assets/svgs/declined.svg";
import { ReactComponent as CaretDown } from "assets/svgs/caretdown.svg";
import { ReactComponent as CaretLeft } from "assets/svgs/caretleft.svg";
import { ReactComponent as CaretRight } from "assets/svgs/caretright.svg";

const Table = ({ tableData }) => {
  return (
    <Fragment>
      <section className="w-100 table__container">
        <div className="row space-between">
          <ul className="tabs d-flex">
            <li>
              <button>All</button>
            </li>
            <li>
              <button>
                <ApprovedIcon />
                Approved
              </button>
            </li>
            <li>
              <button>
                <PendingIcon />
                Pending
              </button>
            </li>
            <li>
              <button>
                <DeclinedIcon />
                Declined
              </button>
            </li>
          </ul>
          <div class="dropButton">
            <button>
              Sort
              <CaretDown />
            </button>
          </div>
        </div>

        {/* Table */}
        <section className="table">
          <table className="mt-sm">
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th className="image"></th>
              <th>Company Name</th>
              <th>Company Size</th>
              <th>Yrs of Inc.</th>
              <th>Revenue</th>
              <th></th>
            </tr>

            {tableData.length > 0
              ? tableData.map((data) => {
                  return (
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td className="image">
                        <figure>
                          <img src={data.image} alt={data.name} />
                        </figure>
                      </td>
                      <td>{data.name}</td>
                      <td>{data.size}</td>
                      <td>{data.inc}</td>
                      <td>NGN {data.revenue}</td>
                      {data.status === "Pending" && (
                        <td className="status">
                          <div className="badge badge-pending">
                            <PendingIcon /> &nbsp; {data.status}
                          </div>
                        </td>
                      )}
                      {data.status === "Declined" && (
                        <td className="status">
                          <div className="badge badge-declined">
                            <DeclinedIcon /> &nbsp; {data.status}
                          </div>
                        </td>
                      )}
                      {data.status === "Approved" && (
                        <td className="status">
                          <div className="badge badge-approved">
                            <ApprovedIcon /> &nbsp; {data.status}
                          </div>
                        </td>
                      )}
                    </tr>
                  );
                })
              : "<p>No data"}
          </table>

          <section className="pagination mt-sm w-100">
            <ul className="d-flex">
              <li>
                <button>
                  <CaretLeft />
                </button>
              </li>
              <li>
                <button className="active">1</button>
              </li>
              <li>
                <button>2</button>
              </li>
              <li>
                <button>3</button>
              </li>
              <li>
                <button>200</button>
              </li>
              <li>
                <button>
                  <CaretRight />
                </button>
              </li>
            </ul>
          </section>
        </section>

        {/* Table */}
      </section>
    </Fragment>
  );
};

export default Table;
