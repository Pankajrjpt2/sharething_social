import "./sidebar.css";
import Birthday from "../../components/birthday/Birthday";
import { Birthdays } from "../../dummyApi";
export default function Sidebar() {
  return (
    <div className="sidebarMainContainer">
      <div className="events">
        <img
          src="https://img.icons8.com/color/32/000000/calendar--v1.png"
          alt=""
          className="eventCalender"
        />
        <span className="eventText">Events</span>
      </div>
      <div className="sidebarWrapper">
        <div className="dateAndLine">
          <span className="DayText">Today</span>
          <hr className="horizontalLin" />
        </div>
        {Birthdays.map((b) => (
          <Birthday key={b.id} birthday={b} />
        ))}

        <div className="dateAndLine">
          <span className="DayText">Tomorrow</span>
          <hr className="horizontalLin" />
        </div>

        {/* <div className="birthdayProfile">
          <div className="birthdayProfileLeft">
            <img
              src="/assets/person/person2.jpg"
              alt=""
              className="birthdayProfilePic"
            />
            <div className="birthdayProfileTextContainer">
              <span className="birthdayProfileUsername">Pankaj Rajput</span>
              <span className="birthdayProfileAge">23 yrs</span>
            </div>
          </div>
          <div className="birthdayProfileRight">
            <img
              src="https://img.icons8.com/color/32/000000/filled-sent.png"
              className="wishBtn"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
