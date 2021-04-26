import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "assets/svgs/home.svg";
import { ReactComponent as CompanyIcon } from "assets/svgs/company.svg";
import { ReactComponent as ChatIcon } from "assets/svgs/chat.svg";
import { ReactComponent as ProjectIcon } from "assets/svgs/project.svg";
import { ReactComponent as SettingsIcon } from "assets/svgs/settings.svg";
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
          <NavLink onClick={closeNav} activeClassName="active" to="overview">
            <HomeIcon />
            <span>Overview</span>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} activeClassName="active" to="companies">
            <CompanyIcon />
            <span>Companies</span>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} activeClassName="active" to="projects">
            <ProjectIcon />
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} activeClassName="active" to="messages">
            <ChatIcon />
            <span>Messages</span>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNav} activeClassName="active"  to="settings">
            <SettingsIcon />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
