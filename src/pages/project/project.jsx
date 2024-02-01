import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Error from "../error/error";
import data from "../../data/projets.json";
import Carousel from "../../components/carousel/carousel";
import zeldaSound from "../../assets/zelda-secret-sound.mp3";


export default function Projet() {
  let {id} = useParams();
  const foundProject = data.find(projet => projet.id === id);
  const konamiSequence = "38384040373937396665";
  const [input, setInput] = useState("");

  function playZeldaSound() {
      new Audio(zeldaSound).play();
  }

  useEffect(() => {
    const onKeyDown = (e) => {
      setInput((prevInput) => prevInput + e.keyCode);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (input.endsWith(konamiSequence)) {
      // Do something when the Konami Code is entered
      document.querySelector(".project_pageblock").style.background = "#464747";
      document.querySelector(".projectcontents_area h2").style.color = "white";
      document.querySelector(".projet_description").style.color = "white";
      document.querySelector(".project_type").style.background = "white";
      document.querySelector(".project_type").style.color = "#464747";
      playZeldaSound();
      
    }
  }, [input]);

  if(!foundProject) {
    return <Error />;
  } else {
    return (
      <div className="project_pageblock">
        
        <div className="carousel_area">
          <Carousel />
        </div>
        <div className="projectcontents_area">
          <h2>{foundProject.title}</h2>
          <div className="tags_types">
            <ul>
              {foundProject.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <span className="project_type">{foundProject.type_projet}</span>
            <span className="project_status">{foundProject.status}</span>
          </div>
          <p className="projet_description">{foundProject.description}</p>
          <div className="project_links">
            
            <a href={foundProject.github_link} target="_blank" rel="noreferrer">
              <div className="goGithub">
                <i class="fa-brands fa-github"></i>
                <span>Voir sur Github</span>
              </div>
            </a>
            {foundProject.project_url ? ( // Si foundProject.project_url = null, n'est pas rendu dans le composant
              <a href={foundProject.project_url} target="_blank" rel="noreferrer">
                <div className="goWebsite">
                  <span>Voir le site</span>
                </div>
              </a>
            ) : null}
          </div>
          <div className="backtoprojects">
              <i class="fa-solid fa-circle-arrow-left"></i>  
              <Link to="/projects">Revenir aux projets</Link>
          </div>
        </div>
      </div>
    );
  }
}
