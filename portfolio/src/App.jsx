import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import translations from './tradução/tradulation.js';
import Footer from './components/Footer.jsx';
import React,{ useState } from "react";
import './App.scss'

function App() {

  const [language, setLanguage] = useState("pt");

  const onLanguageChange = () => {
      setLanguage(language === "pt" ? "en" : "pt");
    };

    const texts = translations[language];

  return (
    <>
    <Header onLanguageChange={onLanguageChange}/>,
    <Home texts={texts} />
    <Projects texts={texts} />
    <About texts={texts} />
    <Footer />
    </>
  )
}

export default App
