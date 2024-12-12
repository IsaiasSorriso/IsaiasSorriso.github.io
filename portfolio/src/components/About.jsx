import Header from "./Header";
import "../styles/About.scss";
import translations from '../tradução/tradulation.js';
import React,{ useState } from "react";

import iconReact from "../assets/iconHome-React.png";
import iconVue from "../assets/iconHome-Vue.png";
import iconJS from "../assets/iconHome-JS.png";
import iconTS from "../assets/iconHome-TS.png";
import iconCassandra from "../assets/iconCassandra.png";
import iconC from "../assets/iconC.png";
import iconCS from "../assets/iconCS.png";
import iconMongoDB from "../assets/iconMongoDB.png";
import iconSpringBoot from "../assets/iconSpringBoot.png";
import iconMySQL from "../assets/iconMySQL.png";
import iconSass from "../assets/iconSass.png";
import iconPython from "../assets/iconPython.png";
import iconPowerBI from "../assets/iconPowerBI.png";
import iconExcel from "../assets/iconExcel.png";
import iconJava from "../assets/iconJava.png";
function About({texts}) {

    const [language, setLanguage] = useState("pt");

    const onLanguageChange = () => {
        setLanguage(language === "pt" ? "en" : "pt");
      };

    //   const texts = translations[language];

    return(
        <div className="container">
            {/* <Header onLanguageChange={onLanguageChange}/> */}
            <h1>{texts.aboutTitle}</h1>
            <div className="About">
                
                <p className="sobre">
                    {texts.AboutP1} <br /> <br />
                    {texts.AboutP2} <br /> <br />
                    {texts.AboutP3} <br /> 
                    {texts.AboutP4} <br />
                    {texts.AboutP5}
                </p>
                <div className="appUsados">
                    <h2>{texts.techjaUsados}</h2>
                    <div className="tecnologias">
                    <div className="qual">
                        <img src={iconSpringBoot} alt="" />
                        <p>Spring Boot</p>
                    </div>
                    <div className="qual">
                        <img src={iconReact} alt="" />
                        <p>React</p>
                    </div>
                    <div className="qual">
                        <img src={iconJS} alt="" />
                        <p>JavaScript</p>
                    </div>
                    <div className="qual">
                        <img src={iconTS} alt="" />
                        <p>TypeScript</p>
                    </div>
                    <div className="qual">
                        <img src={iconVue} alt="" />
                        <p>Vue</p>
                    </div>
                    <div className="qual">
                        <img src={iconMySQL} alt="" />
                        <p>MySql</p>
                    </div>
                    <div className="qual">
                        <img src={iconCassandra} alt="" />
                        <p>Cassandra</p>
                    </div>
                    <div className="qual">
                        <img src={iconMongoDB} alt="" />
                        <p>MongoDB</p>
                    </div>
                    <div className="qual">
                        <img src={iconJava} alt="" />
                        <p>Java</p>
                    </div>
                    <div className="qual">
                        <img src={iconSass} alt="" />
                        <p>Sass</p>
                    </div>
                    <div className="qual">
                        <img src={iconC} alt="" />
                        <p>C</p>
                    </div>
                    <div className="qual">
                        <img src={iconCS} alt="" />
                        <p>C#</p>
                    </div>
                    <div className="qual">
                        <img src={iconPython} alt="" />
                        <p>Python</p>
                    </div>
                    <div className="qual">
                        <img src={iconExcel} alt="" />
                        <p>Exel</p>
                    </div>
                    <div className="qual">
                        <img src={iconPowerBI} alt="" />
                        <p>Power BI</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default About; 