import React from "react";
import ProgramCard from "../ProgramCard/index";

import "./index.scss";

function ProgramsPannel(props) {
  return (
    <div className="container">
      {props.channels.map(channel => (
        <ProgramCard key={channel.id} channel={channel}></ProgramCard>
      ))}
    </div>
  );
}

export default ProgramsPannel;
