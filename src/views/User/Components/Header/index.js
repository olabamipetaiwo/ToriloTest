import React, { useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
        {/* <button className="btn-notification">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z" fill="#200E32"/>
                        <path opacity="0.4" d="M14.0088 19.2285C13.5088 19.1217 10.4627 19.1217 9.96275 19.2285C9.53539 19.3272 9.07324 19.5568 9.07324 20.0604C9.09809 20.5408 9.37935 20.9648 9.76895 21.2337L9.76795 21.2347C10.2718 21.6275 10.8632 21.8773 11.4824 21.9669C11.8123 22.0122 12.1482 22.0102 12.4901 21.9669C13.1083 21.8773 13.6997 21.6275 14.2036 21.2347L14.2026 21.2337C14.5922 20.9648 14.8734 20.5408 14.8983 20.0604C14.8983 19.5568 14.4361 19.3272 14.0088 19.2285Z" fill="#200E32"/>
                    </svg>
                 </button> */}

        <div className="adminHeader__box__item">
          {/* <figure>
                        <img src={profile} alt="Profile" />
                    </figure> */}

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
