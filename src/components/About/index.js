import React from "react";
import avatar from "../../assets/images/avatar.jpg";

function About() {
  return (
    <div id="about-me">
      <div className="avatar">
        <img src={avatar} alt="my avatar"></img>
      </div>
      <div className="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-box">
          <p>
            I am a hard working programmer who is looking to expand his work
            portfolio and help bring your projects to life. I'm familiar with
            MERN, as well as Python and am constantly looking to add more
            languages to the list. I have done many projects both solo and in
            group settings in order to create a finished product that meets
            client standards. You can find a demonstration of some of the works
            i'm most proud of below so that you can better understand the
            quality of works i bring to the table.
          </p>
          <h2>Skills</h2>
          <p>
            <strong>Languages:</strong> HTML, CSS, JavaScript, Python, MySQL
            <br />
            <strong>Applications:</strong> Node.js, JQuery, MongoDb, React,
            Express.js, Sequelize, APIs
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
