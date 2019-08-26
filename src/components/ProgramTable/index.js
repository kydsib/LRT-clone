import React from "react";
import ProgramCard from "../ProgramCard/index";

import "./index.scss";

function ProgramsPannel() {
  return (
    <div className="container">
      <div className="container__block">
        <ProgramCard />
      </div>
      <div className="container__block">
        <ProgramCard />
      </div>
      <div className="container__block">
        <ProgramCard />
      </div>
      <div className="container__block">
        <ProgramCard />
      </div>
      <div className="container__block">
        <ProgramCard />
      </div>
      <div className="container__block">
        <ProgramCard />
      </div>
    </div>
  );
}

export default ProgramsPannel;
