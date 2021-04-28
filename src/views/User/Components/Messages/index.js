import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Option } from "assets/svgs/option.svg";
import "./index.scss";

const Messages = ({ messages }) => {
  const showOptions = (id) => {
    const containers = Array.from(document.querySelectorAll(".messageOptions"));
    containers.forEach((item) => {
      if (item.getAttribute("id") === id) {
        if (item.classList.contains("show")) {
          item.classList.remove("show");
        } else {
          item.classList.add("show");
        }
      } else {
        item.classList.remove("show");
      }
    });
  };
  return (
    <Fragment>
      <section className="messages">
        <div className="row space-between align-center w-100 mb-xs">
          <h2 className="h-1 primary">Messages</h2>
          <button className="btn btn-blue">+ &nbsp; New message</button>
        </div>

        <ul className="messageContainer">
          {messages.length > 0 &&
            messages.map((message) => {
              return (
                <li>
                  <div className="d-flex space-between messageItem">
                    <figure className="mr-xs">
                      <img src={message.display} alt={message.name} />
                    </figure>
                    <div className="col messageInfo">
                      <h5>{message.name}</h5>
                      <p>
                        {message.messages[message.messages.length - 1].content}
                      </p>
                      <p>
                        {message.messages[message.messages.length - 1].time}
                      </p>
                    </div>
                    <button
                      onClick={showOptions.bind(this, message.name)}
                      className="transparent"
                    >
                      <Option />
                    </button>
                    <ul className="col messageOptions" id={message.name}>
                      <li>View</li>
                      <li>Edit</li>
                    </ul>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
    </Fragment>
  );
};

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default Messages;
