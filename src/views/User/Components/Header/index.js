import React, { useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ReactComponent as NotificationIcon } from "assets/svgs/notification.svg";
import { ReactComponent as SearchIcon } from "assets/svgs/search.svg";
import profile from 'assets/pngs/profile.png';
import "./index.scss";

const Header = () => {
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
    <header class="adminHeader mb-md">
      <button ref={toogleBtn} onClick={openNav} className="nav-icon">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>

      <div className="formGroup">
        <SearchIcon />
        <input type="text" placeholder="Search"/>
      </div>

      <section className="adminHeader__box">
        <div className="adminHeader__box__item">
          <button className="btn-action mr-sm">
            <NotificationIcon />
          </button>
          <figure onClick={toogleActions}>
            <img src={profile} alt="Profile" />
          </figure>

          <ul ref={actions} className="adminHeader__box__item__dropdown">
            <li>
              <Link to="/vendor/profile">Profile </Link>
            </li>
            <li>
              <Link to="/vendor/services">Services </Link>
            </li>
            <li>
              <Link to="#">Log Out</Link>
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
