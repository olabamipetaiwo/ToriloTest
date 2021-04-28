import React, { Fragment, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ReactComponent as AllIcon } from "assets/svgs/all.svg";
import { ReactComponent as ApprovedIcon } from "assets/svgs/approved.svg";
import { ReactComponent as PendingIcon } from "assets/svgs/pending.svg";
import { ReactComponent as DeclinedIcon } from "assets/svgs/declined.svg";
import { ReactComponent as CaretDown } from "assets/svgs/caretdown.svg";
import Pagination from "../Pagination/index";
import "./index.scss";

const Table = ({ tableData }) => {
  const [companies, setCompanies] = useState([]);
  const [active, setActive] = useState("All");
  const sortList = useRef();

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  // Get current posts
  var indexOfLastPost = currentPage * postsPerPage;
  var indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    setCompanies(tableData.slice(indexOfFirstPost, indexOfLastPost));
    // eslint-disable-next-line
  }, [tableData]);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    indexOfLastPost = pageNumber * postsPerPage;
    indexOfFirstPost = indexOfLastPost - postsPerPage;
    setCompanies(tableData.slice(indexOfFirstPost, indexOfLastPost));
  };

  const filterByStatus = (status) => {
    if (status === "All") {
      setActive("All");
      setCompanies([...tableData]);
    } else {
      setActive(status);
      setCompanies(
        tableData.length > 0 &&
          tableData.filter((data) => {
            return data.status === status;
          })
      );
    }
  };

  const filterList = (category) => {
    let filtered = [];
    let fn = "";
    switch (category) {
      case "name":
        fn = (a, b) => {
          let nameA = a.name.toLowerCase();
          let nameB = b.name.toLowerCase();
          return nameA > nameB ;
        };
        break;
      case "revenue":
        fn = (a, b) => {
          return b.revenue - a.revenue;
        };
        break;
      case "size":
        fn = (a, b) => {
          return b.size - a.size;
        };
        break;
      default:
        return true;
    }

    filtered = tableData.sort(fn);
    setCompanies([...filtered]);
    openSort();
  };

  const handleCheck = (e) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let checkbox of checkboxes) {
      if (checkbox.checked) {
        checkbox.checked = false;
        e.target.checked = false;
      } else {
        checkbox.checked = true;
        e.target.checked = true;
      }
    }
  };

  const openSort = () => {
    sortList.current.classList.toggle("active");
  };

  return (
    <Fragment>
      <section className="w-100 table__container">
        <div className="row space-between">
          <ul className="tabs d-flex">
            <li>
              <button
                onClick={filterByStatus.bind(this, "All")}
                className={active === "All" ? "active" : ""}
              >
                <AllIcon />
                All
              </button>
            </li>
            <li>
              <button
                onClick={filterByStatus.bind(this, "Approved")}
                className={active === "Approved" ? "active" : ""}
              >
                <ApprovedIcon />
                Approved
              </button>
            </li>
            <li>
              <button
                onClick={filterByStatus.bind(this, "Pending")}
                className={active === "Pending" ? "active" : ""}
              >
                <PendingIcon />
                Pending
              </button>
            </li>
            <li>
              <button
                onClick={filterByStatus.bind(this, "Declined")}
                className={active === "Declined" ? "active" : ""}
              >
                <DeclinedIcon />
                Declined
              </button>
            </li>
          </ul>
          <div class="dropButton">
            <button onClick={openSort}>
              Sort
              <CaretDown />
            </button>
            <ul ref={sortList} className="sort__list">
              <li onClick={filterList.bind(this, "name")}>By Name</li>
              <li onClick={filterList.bind(this, "size")}>By Size</li>
              <li onClick={filterList.bind(this, "revenue")}>By Revenue</li>
            </ul>
          </div>
        </div>

        {/* Table */}
        <section className="table">
          <table className="mt-sm">
            <tr>
              <th>
                <input type="checkbox" onClick={handleCheck} />
              </th>
              <th className="image"></th>
              <th>Company Name</th>
              <th>Company Size</th>
              <th>Yrs of Inc.</th>
              <th>Revenue</th>
              <th></th>
            </tr>

            {companies.length > 0 ? (
              companies.map((data) => {
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
            ) : (
              <p>No data</p>
            )}
          </table>

          <section className="pagination mt-sm w-100">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={tableData.length}
              paginate={paginate}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </section>
        </section>

        {/* Table */}
      </section>
    </Fragment>
  );
};

Table.propTypes = {
  Table: PropTypes.array.isRequired,
};

export default Table;
