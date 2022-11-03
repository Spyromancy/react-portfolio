import React from "react";

function Resume() {
  return (
    <div>
      <h2 className="section-title">Resume</h2>
      <div className="resume-container">
        <p>
          Link to my{" "}
          <a href="https://docs.google.com/document/d/1_ttgMG_njOH3itKZch3D2O3kkOgwAqk1/view">
            {" "}
            resume
          </a>
        </p>
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
