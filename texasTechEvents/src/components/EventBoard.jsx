import React from "react";
import logo from "../assets/ttu-logo.jpg";
import Event from "./Event";
import football from "../assets/events/football.jpg";
import emmy from "../assets/events/emmy.png";
import roadwork from "../assets/events/roadwork.png";
import basketball from "../assets/events/basketball.jpeg";
const EventBoard = () => {
  return (
    <div>
      <div className="title">
        <img className="logo" src={logo} alt="Texas Tech Logo" />
        <h1>Texas Tech Events</h1>
      </div>
      <div className="event-board">
        <Event
          img={football}
          eventName="Football Game"
          time="February 27"
          link="https://www.doublet973.com/teams/2023-texas-tech-football-schedule-revealed/article_e8eb08bc-a19e-11ed-b6a5-97f55b7fb969.html"
        />
        <Event
          img={emmy}
          eventName="Modern Dance"
          time="March 1"
          link="https://www.ttu.edu/administration/president/lectureseries/pilobolus.php"
        />
        <Event
          img={roadwork}
          eventName="Road Work"
          time="February 2023"
          link="https://events.ttu.edu/cal/main/showMainEnd.rdo"
        />
        <Event
          img={basketball}
          eventName="Basketball Game"
          time="March 15"
          link="https://www.doublet973.com/teams/2023-texas-tech-football-schedule-revealed/article_e8eb08bc-a19e-11ed-b6a5-97f55b7fb969.html"
        />
        <Event
          img={football}
          eventName="Football Game"
          time="February 27"
          link="https://www.doublet973.com/teams/2023-texas-tech-football-schedule-revealed/article_e8eb08bc-a19e-11ed-b6a5-97f55b7fb969.html"
        />
        <Event
          img={emmy}
          eventName="Modern Dance"
          time="March 1"
          link="https://www.ttu.edu/administration/president/lectureseries/pilobolus.php"
        />
        <Event
          img={roadwork}
          eventName="Road Work"
          time="February 2023"
          link="https://events.ttu.edu/cal/main/showMainEnd.rdo"
        />
        <Event
          img={basketball}
          eventName="Basketball Game"
          time="March 15"
          link="https://www.doublet973.com/teams/2023-texas-tech-football-schedule-revealed/article_e8eb08bc-a19e-11ed-b6a5-97f55b7fb969.html"
        />
      </div>
    </div>
  );
};
export default EventBoard;
