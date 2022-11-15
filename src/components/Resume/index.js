import React from "react";

function Resume() {
  return (
    <div>
      <h2 className="section-title">
        <a
          className="my-resume"
          href="https://docs.google.com/document/d/12kZii2si1fd4hGNR2l4Xgr1U1tuL_2hf/view"
        >
          My Resume
        </a>
      </h2>
      <div className="resume-container">
        <h2> Front-end Proficiencies </h2>
        <ul className="resume-list">
          <li> HTML </li>
          <li> CSS </li>
          <li> JavaScript </li>
          <li> JQuery </li>
          <li> React </li>
          <li> Python </li>
          <li> Bootstrap </li>
        </ul>
        <h2> Back-end Proficiencies </h2>
        <ul className="resume-list">
          <li> APIs</li>
          <li> Node </li>
          <li> Express </li>
          <li> MySQL, Sequelize</li>
          <li> MongoDb </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
