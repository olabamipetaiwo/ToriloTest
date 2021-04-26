import React from "react";
import { NavLink } from "react-router-dom"; 
import { ReactComponent as HomeIcon } from "assets/svgs/home.svg";
import { ReactComponent as CompanyIcon } from "assets/svgs/company.svg";
import { ReactComponent as ChatIcon } from "assets/svgs/chat.svg";
import { ReactComponent as ProjectIcon } from "assets/svgs/project.svg";
// import { AUTHLINKS } from "data/auth";
import "./nav.scss";

const UserNav = () => {
  const closeNav = () => {
    document.querySelector(".bdrop").classList.remove("open");
    document.querySelector(".nav").classList.remove("open");
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            onClick={closeNav}
            activeClassName="active"
            className="active"
            to={{ pathname: "user/overview" }}
          >
            <HomeIcon />
            <span>Overview</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeNav}
            activeClassName="active"
            to={{ pathname: "user/companies" }}
          >
            <CompanyIcon />
            <span>Companies</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeNav}
            activeClassName="active"
            to={{ pathname: "user/projects" }}
          >
            <ProjectIcon />
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeNav}
            activeClassName="active"
            to={{ pathname: "user/messages" }}
          >
            <ChatIcon />
            <span>Messages</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
