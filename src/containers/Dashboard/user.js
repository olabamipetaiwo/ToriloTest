import React from "react";
import UserNav from "./usernav";
import './dashboard.scss';

const User = ({children}) => {

    const closeNav = () => {
        document.querySelector('.bdrop').classList.remove('open');
        document.querySelector('.nav').classList.remove('open');
    }

    return (
      <section className="dashboard">
        <div onClick={closeNav} className="bdrop"></div>
        <UserNav />
        <section className="content">{children}</section>
      </section>
    );    
}

export default User;