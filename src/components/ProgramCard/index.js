import React from "react";
import LRTLogos from "../../../src/images/index";
import { IoIosVideocam } from "react-icons/io";
import { GiMicrophone } from "react-icons/gi";

import "./index.scss";

function descriptionLength(description, limit = 47) {
  const newDescription = [];
  if (description.length > limit) {
    description.split(" ").reduce((accumulator, cur) => {
      if (accumulator + cur.length <= limit) {
        newDescription.push(cur);
      }
      return accumulator + cur.length;
    }, 0);
    return `${newDescription.join(" ")}`;
  }
  return description;
}

function ProgramCard(props) {
  return (
    <div
      className={`programCard programCard--${props.channel.channel_title
        .replace(" ", "-")
        .toLowerCase()}`}
    >
      <div
        className={`programCard__progress programCard__progress--${props.channel.channel_title
          .replace(" ", "-")
          .toLowerCase()}`}
        style={{ width: `${props.channel.proc}%` }}
      ></div>
      <div className="programCard__logo-box">
        <div className="programCard__logo-box--logo">
          <img
            src={LRTLogos[props.channel.channel_title.replace(" ", "_")]}
            alt={props.channel.channel_title}
            width="18px"
            height="16px"
          />
        </div>
        <div className="programCard__logo-box--start-end-time">
          <span>
            {props.channel.time_start} - {props.channel.time_end}
          </span>
        </div>
      </div>
      <div className="programCard__tv-radio">
        {props.channel.is_radio === 1 ? (
          <GiMicrophone size={22} />
        ) : (
          <IoIosVideocam size={22} />
        )}
      </div>

      <div className="programCard__description">
        <h3 className="program-description">
          {descriptionLength(props.channel.title)}
        </h3>
      </div>
    </div>
  );
}

export default ProgramCard;
