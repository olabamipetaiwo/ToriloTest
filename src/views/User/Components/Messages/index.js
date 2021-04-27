import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Messages = ({ messages }) => {
  return (
    <Fragment>
      <section className="messages">
        <div className="row space-between align-center w-100 mb-xs">
          <h2 className="h-1 primary">Messages</h2>
          <button className="btn btn-blue">+ &nbsp; New message</button>
        </div>

        <ul>
          {messages.length > 0 &&
            messages.map((message) => {
              return (
                <li>
                  <div className="d-flex">
                    <figure className="mr-xs">
                      <img src={message.display} alt={message.name} />
                    </figure>
                    <div className="col w-100 messageItem">
                      <h5>{message.name}</h5>
                      <p>
                        {message.messages[message.messages.length - 1].content}
                      </p>
                      <p>
                        {message.messages[message.messages.length - 1].time}
                      </p>
                    </div>
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
