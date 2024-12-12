import React, { useState } from "react";
import "../styles/Projects.scss"; // Adicione seu CSS personalizado aqui
import Header from "./Header";
import translations from "../tradução/tradulation";
import iconReact from "../assets/iconHome-React.png";
import iconVue from "../assets/iconHome-Vue.png";
import iconJS from "../assets/iconHome-JS.png";
import iconTS from "../assets/iconHome-TS.png";
import iconGit from "../assets/iconGitHub.png";
import iconMongoDB from "../assets/iconMongoDB.png";
import iconSpringBoot from "../assets/iconSpringBoot.png";
import iconMySQL from "../assets/iconMySQL.png";
import imgProjectGP from "../assets/imgProjectSRP.webp";
import imgProjectSRP from "../assets/imgProjectGP.webp";
import imgProjectTS from "../assets/imgProjectTS.webp";

const Projects = ({texts}) => {
  const [language, setLanguage] = useState("pt");

  const onLanguageChange = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  // const texts = translations[language];

  const projects = [
    {
      id: 1,
      imgProject: imgProjectSRP,
      name: texts.project1title,
      description: texts.project1descri,
      resposabilidades: "POO, Front-End & Back-End",
      icon1: iconReact,
      icon2: iconJS,
      icon3: iconSpringBoot,
      icon4: iconMongoDB,
      githubLink: "https://github.com/Projeto-Interdisciplar-SRP",
    },
    {
      id: 2,
      imgProject: imgProjectGP,
      name: texts.project2title,
      description: texts.project2descri,
      icon1: iconVue,
      icon2: iconTS,
      icon3: iconSpringBoot,
      icon4: iconMongoDB,
      resposabilidades: "POO & Front-End",
      githubLink: "https://github.com/DW3-GreenPeace",
    },
    {
      id: 3,
      imgProject: imgProjectTS,
      name: texts.project3title,
      description: texts.project3descri,
      icon1: iconVue,
      icon2: iconTS,
      icon3: iconSpringBoot,
      resposabilidades: "POO & Front-End",
      icon4: iconMySQL,
      githubLink: "https://github.com/Loja-Brinquedo-Fatec",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="title">{texts.projects}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imgProject} alt="" className="img-project" />
            <div className="projeto-info">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p>
                {texts.metodoligas} <br />
                {texts.project1metologias}
                <br />
                <br />
                {texts.responsabilidade} <br />
                {project.resposabilidades}
              </p>
              <div className="tecUsados">
                <div className="left">
                  <div className="imgs">
                    <img src={project.icon1} alt=""/>
                    <img src={project.icon2} alt="" />
                    <img src={project.icon3} alt="" />
                    <img src={project.icon4} alt="" />
                  </div>
                  <p>{texts.techUsados}</p>
                </div>
                <div className="github">
                  <div className="imgs">
                    <img src={iconGit} alt="" />
                  </div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    {texts.verprojeto}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
