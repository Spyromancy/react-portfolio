import React from "react";

function Nav(props) {
  const { viewing, setViewing } = props;

  return (
    <div>
      <header>
        <h1>Joshua Haddix</h1>
        <nav>
          <ul>
            <li
              className={`btn ${viewing === "About" && "nav-active"}`}
              key="About"
              onClick={() => setViewing("About")}
            >
              About Me
            </li>
            <li
              className={`btn ${viewing === "Work" && "nav-active"}`}
              key="Work"
              onClick={() => setViewing("Work")}
            >
              My Work
            </li>
            <li
              className={`btn ${viewing === "Contact" && "nav-active"}`}
              key="Contact"
              onClick={() => setViewing("Contact")}
            >
              Contact Me
            </li>
            <li
              className={`btn ${viewing === "Resume" && "nav-active"}`}
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
