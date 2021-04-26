import React, { useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import profile from 'assets/pngs/profile.png';
import "./index.scss";

const Header = ({ pageName }) => {
  const actions = useRef();
  const toogleBtn = useRef();

  const openNav = () => {
    toogleBtn.current.classList.toggle("mobActive");
    document.querySelector(".bdrop").classList.add("open");
    document.querySelector(".nav").classList.add("open");
  };

  const toogleActions = () => {
    actions.current.classList.toggle("show");
  };

  return (
    <header class="adminHeader">
      <button ref={toogleBtn} onClick={openNav} className="nav-icon">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>

      <h2>{pageName}</h2>

      <section className="adminHeader__box">

        <div className="adminHeader__box__item">
          <figure>
                        <img src={profile} alt="Profile" />
          </figure>

          <button className="btn-action" onClick={toogleActions}>
            <svg
              className="adminHeader__box__caret"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.24106 7.99541C4.53326 7.69735 4.99051 7.67025 5.31272 7.91412L5.40503 7.99541L12 14.7229L18.595 7.99541C18.8872 7.69735 19.3444 7.67025 19.6666 7.91412L19.7589 7.99541C20.0511 8.29347 20.0777 8.75989 19.8386 9.08855L19.7589 9.18272L12.582 16.5036C12.2898 16.8017 11.8325 16.8288 11.5103 16.5849L11.418 16.5036L4.24106 9.18272C3.91965 8.85485 3.91965 8.32328 4.24106 7.99541Z"
                fill="#200E32"
              />
            </svg>
          </button>
          <ul ref={actions} className="adminHeader__box__item__dropdown">
            <li>
              <Link to="/vendor/profile">Profile </Link>
            </li>
            <li>
              <Link to="/vendor/services">Services </Link>
            </li>
            {/* <li>
              <Link to="/vendor/settings">Settings </Link>
            </li> */}
            <li>
              <Link to="#" >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
};

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default Header;
