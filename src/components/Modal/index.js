import React from "react";

function Modal({ project, toggleModal }) {
  const { name, languages, link, git, alt, index } = project;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <a href={link} target="blank">
          <img
            src={require(`../../assets/projects/${index}.png`)}
            className="screencap"
            alt={`${alt}`}
          />
        </a>
        <p>{languages}</p>
        <div className="flex-row">
          <a href={git} target="blank">
            <button type="button">View on GitHub</button>
          </a>
          <button type="button" onClick={toggleModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
