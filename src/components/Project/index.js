import React from "react";

function Project({ project }) {
  const { imgName, link, name, languages, alt } = project;
  return (
    <div class="sub-card">
      <a href={link}>
        <img src={require(`../../assets/projects/${imgName}`)} alt={alt} />
      </a>
      <div class="caption">
        <h3>{name}</h3>
        <p>{languages}</p>
      </div>
    </div>
  );
}

export default Project;
