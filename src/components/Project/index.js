import React, { useState } from "react";
import Modal from "../Modal";

function Works() {
  const [myWorks] = useState([
    {
      name: "Run Buddy",
      languages: "HTML, CSS",
      link: "https://spyromancy.github.io/run-buddy/",
      alt: "A screenshot of the deployed Run Buddy website",
      git: "https://github.com/Spyromancy/run-buddy",
    },
    {
      name: "Movie Info DB",
      languages: "HTML/CSS/JS",
      link: "https://indy6678.github.io/movie-info-db/",
      alt: "a screenshot of the deployed movie info database website",
      git: "https://github.com/indy6678/movie-info-db",
    },
    {
      name: "Compere",
      languages: "MYSQL/JS/CSS/Express",
      link: "https://vast-eyrie-87159.herokuapp.com/",
      alt: "a screenshot of the deployed quiz hositng website compere",
      git: "https://github.com/AHudg/compere",
    },
    {
      name: "Project 3",
      languages: "Coming Soon",
      link: "/",
      alt: "placeholder image",
      git: "/",
    },

    {
      name: "Placeholder2",
      languages: "coming soon",
      link: "/",
      alt: "placeholder image",
      git: "/",
    },
    {
      name: "Placeholder1",
      languages: "coming soon",
      link: "/",
      alt: "placeholder image",
      git: "/",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  function toggleModal(item, i) {
    setCurrentProject({ ...item, index: i });
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div>
      <h2 className="section-title"> My Projects</h2>
      <div className="completed-work">
        {isModalOpen && (
          <Modal project={currentProject} toggleModal={toggleModal}></Modal>
        )}
        {myWorks.map((item, i) => (
          <img
            src={require(`../../assets/projects/${i}.png`)}
            alt={item.alt}
            className="card"
            onClick={() => toggleModal(item, i)}
            key={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
