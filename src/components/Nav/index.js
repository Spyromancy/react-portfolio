import React from "react";

function Nav(props) {
  const { setViewing } = props;

  return (
    <div>
      <header>
        <h1>Joshua Haddix</h1>
        <nav>
          <ul>
            <li className="btn" key="About" onClick={() => setViewing("About")}>
              About Me
            </li>
            <li className="btn" key="Work" onClick={() => setViewing("Work")}>
              My Work
            </li>
            <li
              className="btn"
              key="Contact"
              onClick={() => setViewing("Contact")}
            >
              Contact Me
            </li>
            <li
              className="btn"
              key="Resume"
              onClick={() => setViewing("Resume")}
            >
              My Resume
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
