import React from "react";
import football from "../assets/events/football.jpg";

const Event = (props) => {
  return (
    <div className="event">
      <img src={props.img} />
      <div className="eventContent">
        <p className="eventName">{props.eventName}</p>
        <p className="eventTime">{props.time}</p>

        <div className="btn-viewmore">
          <a href={props.link} target="_blank">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};
export default Event;
