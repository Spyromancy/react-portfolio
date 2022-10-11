import React, { useState } from "react";

function Works() {
  const [myWorks] = useState([
    {
      name: "Run Buddy",
      languages: "HTML, CSS",
      link: "https://spyromancy.github.io/run-buddy/",
      alt: "A screenshot of the deployed Run Buddy website",
    },
    {
      name: "Compere",
      languages: "MYSQL/JS/CSS/Express",
      link: "https://vast-eyrie-87159.herokuapp.com/",
      alt: "a screenshot of the deployed quiz hositng website compere",
    },
    {
      name: "Movie Info DB",
      languages: "HTML/CSS/JS",
      link: "https://indy6678.github.io/movie-info-db/",
      alt: "a screenshot of the deployed movie info database website",
    },
    {
      name: "Project 3",
      languages: "Coming Soon",
      link: "/",
      alt: "placeholder image",
    },

    {
      name: "Placeholder2",
      languages: "coming soon",
      link: "/",
      alt: "placeholder image",
    },
    {
      name: "Placeholder1",
      languages: "coming soon",
      link: "/",
      alt: "placeholder image",
    },
  ]);

  return (
    <div className="completed-work">
      <h2 className="section-title"> My Projects</h2>

      {myWorks.map((item, i) => (
        <img
          src={require(`../../assets/projects/${i}.png`)}
          alt={item.alt}
          className="card"
          key={item.name}
        />
      ))}
    </div>
  );
}

export default Works;
