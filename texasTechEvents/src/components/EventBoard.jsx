import React from "react";
import logo from "../assets/ttu-logo.jpg";
import Event from "./Event";
import football from "../assets/events/football.jpg";
import emmy from "../assets/events/emmy.png";
import roadwork from "../assets/events/roadwork.png";
import basketball from "../assets/events/basketball.jpeg";
import danceTech from "../assets/events/danceTech.png";
import internationalAffairs from "../assets/events/internationalAffair.jpeg";
import studyabroad from "../assets/events/studyabroad.jpeg";
import benjamin from "../assets/events/benjamin.png";
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
          time="February 27, 2023"
          link="https://www.doublet973.com/teams/2023-texas-tech-football-schedule-revealed/article_e8eb08bc-a19e-11ed-b6a5-97f55b7fb969.html"
        />
        <Event
          img={emmy}
          eventName="Modern Dance"
          time="March 1, 2023"
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
          time="March 15, 2023"
          link="https://www.doublet973.com/teams/2023-texas-tech-football-schedule-revealed/article_e8eb08bc-a19e-11ed-b6a5-97f55b7fb969.html"
        />
        <Event
          img={danceTech}
          eventName="Dance Tech 2023"
          time="March 2, 2023"
          link="https://www.depts.ttu.edu/theatre-dance/productions/past-productions/2022-2023/dancetech.php"
        />
        <Event
          img={internationalAffairs}
          eventName="International Affairs"
          time="March 2, 2023"
          link="https://events.ttu.edu/cal/event/eventView.do?b=de&href=/public/cals/MainCal/CAL-01f62b63-85aacc75-0185-abe68ca0-0000074c.ics"
        />
        <Event
          img={studyabroad}
          eventName="Study Abroad Day"
          time="February 27, 2023"
          link="https://events.ttu.edu/cal/event/eventView.do?b=de&href=/public/cals/MainCal/CAL-01f62b63-8654be24-0186-55c9e6b3-000005e4.ics"
        />
        <Event
          img={benjamin}
          eventName="Scholarship Workshop"
          time="February 27, 2023"
          link="https://events.ttu.edu/cal/event/eventView.do?b=de&href=/public/cals/MainCal/CAL-01f62b63-8572265d-0185-735a3d99-0000086c.ics"
        />
        <Event
          img={internationalAffairs}
          eventName="International Affairs"
          time="March 2, 2023"
          link="https://events.ttu.edu/cal/event/eventView.do?b=de&href=/public/cals/MainCal/CAL-01f62b63-85aacc75-0185-abe68ca0-0000074c.ics"
        />
        <Event
          img={basketball}
          eventName="Basketball Game"
          time="March 15, 2023"
          link="https://www.doublet973.com/teams/2023-texas-tech-football-schedule-revealed/article_e8eb08bc-a19e-11ed-b6a5-97f55b7fb969.html"
        />
      </div>
    </div>
  );
};
export default EventBoard;
