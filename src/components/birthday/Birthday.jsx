import "./birthday.css";

import React from "react";
import { Birthdays, Users } from "../../dummyApi";

export default function Birthday({ birthday }) {
  console.log(Birthdays.filter((b) => b.birthday_date === "23/09/2022"));
  return (
    <div className="birthdayProfile">
      <div className="birthdayProfileLeft">
        <img
          src={Users.filter((u) => u.id === birthday.userId)[0].profilePicture}
          alt=""
          className="birthdayProfilePic"
        />
        <div className="birthdayProfileTextContainer">
          <span className="birthdayProfileUsername">
            {Users.filter((u) => u.id === birthday.userId)[0].username}
          </span>
          <span className="birthdayProfileAge">{birthday.age} Years</span>
        </div>
      </div>
      <div className="birthdayProfileRight">
        <img
          src="https://img.icons8.com/color/32/000000/filled-sent.png"
          className="wishBtn"
        />
      </div>
    </div>
  );
}
