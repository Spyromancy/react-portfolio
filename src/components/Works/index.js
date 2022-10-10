import React, { useState } from "react";

function Works() {
  const myWorks = useState([
    {
      name: "Run Buddy",
      languages: "HTML, CSS",
      link: "https://spyromancy.github.io/run-buddy/",
      imgName: "run-buddy.PNG",
      alt: "A screenshot of the deployed Run Buddy website",
    },
    {
      name: "Compere",
      languages: "MYSQL/JS/CSS/Express",
      link: "https://vast-eyrie-87159.herokuapp.com/",
      imgName: "Compere.PNG",
      alt: "a screenshot of the deployed quiz hositng website compere",
    },
    {
      name: "Movie Info DB",
      languages: "HTML/CSS/JS",
      link: "https://indy6678.github.io/movie-info-db/",
      imgName: "Movie-Info-DB.PNG",
      alt: "a screenshot of the deployed movie info database website",
    },
    {
      name: "Project 3",
      languages: "Coming Soon",
      link: "/",
      imgName: "sub-temp.bmp",
      alt: "placeholder image",
    },
    /*
    {
      name: "Placeholder",
      languages: "coming soon",
      link: "/",
      imgName: "sub-temp.bmp",
      alt: "placeholder image",
    },
    {
      name: "Placeholder",
      languages: "coming soon",
      link: "/",
      imgName: "sub-temp.bmp",
      alt: "placeholder image",
    }, */
  ]);

  return (
    <div>
      {/*  Map myWorks into the div*/}
      {myWorks.map((project, i) => (
        <div className="card" key={project.name}>
          <img
            src={require(`../../assets/projects/${i}.PNG`)}
            alt={project.alt}
            key={project.alt}
          />
        </div>
      ))}
    </div>
  );
}

export default Works;
