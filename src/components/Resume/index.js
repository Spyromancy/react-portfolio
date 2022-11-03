import React from "react";

function Resume() {
  return (
    <div>
      <h2 className="section-title">Resume</h2>
      <div className="resume-container">
        <p>
          Download my <a href="/"> resume</a>
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
