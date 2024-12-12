import "../styles/Header.scss";
import React from "react";
import translations from '../tradução/tradulation.js';
//IMAGENS
import iconHome from "../assets/iconHeader-Home.png";
import iconAbout from "../assets/iconHeader-About.png";
import iconSkills from "../assets/iconHeader-Skills.png";
import iconProjects from "../assets/iconHeader-Projects.png";
import iconContact from "../assets/iconsHeader-Contact.png";
import iconCurriculum from "../assets/iconHeader-Upload.png";


function Header({ onColorChange, onLanguageChange, language  }) {

  return (
    <div className="container-header">
      <header>
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Belarmina &nbsp;</span>
          <span aria-hidden="true" className="front-text">
            &nbsp;Belarmina&nbsp;
          </span>
        </button>
        <div className="acoes">
          <select value={language} onChange={onLanguageChange}>
            <option value="pt">Português</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>
    </div>
  );
}

export default Header;
