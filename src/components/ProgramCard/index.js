import React from "react";
import { IoIosVideocam, GiMicrophone } from "react-icons/io";
// import { Container, Row, Col } from "react-bootstrap";

// import lrtTv from "../../images/LRT-Televizija.png";
// import channelProgramData from "./data";
import "./index.scss";

// const IMAGES = {
//   LRT_Opus: "../../images/LRT-Opus.png",
//   LRT_TELEVIZIJA: "../../images/LRT-Televizija.png",
//   LRT_Plius: "../../images/LRT-Kultura.png",
//   LRT_Lituanica: "../../images/LRT-Litaunica.png",
//   LRT_Radijas: "../../images/LRT-Radijas.png",
//   LRT_Klasika: "../../images/LRT-Klasika.png"
// };

function descriptionLength() {
  // pasirasyti funkcija, kuri ziures kokio ilgio yra aprasymas ir jei
  // (esamas zodis +  sekantis).length > uz x ? esamas : esamas + sekantis
}

function isRadio() {
  // ar reikia funkcijos ar per tenrary iseitu prie paciu parametru
  // {is_radio === 1} <GiMicrophone /> ?  : <IoIosVideocam />
}

// Paskui reikes <img src={IMAGES[title.raplace(' ', '_')]}

function ProgramCard() {
  return (
    <div className="programCard">
      <div className="ProgramCard__logo-box">
        <div className="logo">
          {/* <img src={lrtTv} alt="Logo" width="27px" height="16px" /> */}
        </div>
        <div className="start-end-time">
          <span>21.30 - 22.30</span>
        </div>
        <div className="tv-radio">
          <IoIosVideocam size={24} />
        </div>
      </div>

      <div className="programCard__description">
        <h3 className="program-description">
          Nacionaline ekspedicija "Dniepru per Nemuną"
        </h3>
      </div>
      <div className="programCard__progress">
        <div
          className="live"
          // style="{width:${parseInt(channelProgramData.prc), 10}}"
        >
          Progres ----55% ----
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
