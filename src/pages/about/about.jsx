import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import zeldaSound from "../../assets/zelda-secret-sound.mp3";
import imgGameBoy from "../../assets/game-boy-portrait.jpg";
import zeldaSecret from "../../assets/zeldaSecret.png";
import "./about.css";


function About() {

function playZeldaSound() {
    new Audio(zeldaSound).play();
}

const konamiSequence = "38384040373937396665";
const [input, setInput] = useState("");

  useEffect(() => {
    const onKeyDown = (e) => {
      setInput((prevInput) => prevInput + e.keyCode);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const imageElement = document.querySelector(".about-image img");

    if (input.endsWith(konamiSequence)) {
      // Do something when the Konami Code is entered
      imageElement.src = zeldaSecret;
      playZeldaSound();

      // Ajouter les classes Tailwind pour styliser l'image et la rendre visible
      
      imageElement.classList.add("w-[1400px]");  // Montre l'image sur les écrans moyens et plus grands
    } else {
      // Rétablissez l'image par défaut et retirez les classes Tailwind
      imageElement.src = imgGameBoy;
      imageElement.classList.remove("hidden");
      imageElement.classList.remove("md:block");
    }
  }, [input]);

  return (
    <>
    <div className="bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-white">
    <div className="flex w-full lg:w-3/4 mx-auto">
    <div className="about-image w-full opacity-0 lg:w-[1800px]">
        <img src={imgGameBoy} alt="une game boy avec ma tête pixellisée"></img>
      </div>
    <div className="about_container">
      <div className="about_info">
        <h2 className="about_title opacity-0 text-5xl font-light py-8 px-5">À <span className="text-ghgreen font-bold">propos</span></h2>
        <div className="about_content w-10/12">
          
          <div className="about_text opacity-0 mx-5">
            <p className="text-xl font-light mb-8">
            Hey bonjour ! Moi c'est Guillaume Robert et je suis développeur web en reconversion professionnelle après avoir auparavant travaillé dans des domaines comme le graphisme ou la rédaction web. Après 7 mois de formation à distance chez OpenClassrooms, j'ai acquis un certain nombre de compétences comme apprendre à <span className="text-ghgreen font-medium">intégrer une maquette</span> et la transformer en site fonctionnel, concevoir un site e-commerce en <span className="text-ghgreen font-medium">JavaScript</span>, découvrir le fonctionnement des <span className="text-ghgreen font-medium">API REST</span> et de node.js ou encore pratiquer le framework <span className="text-ghgreen font-medium">React</span>. 
            </p>
            <p className="text-xl font-light mb-8">
            Lorsque je ne suis pas devant Visual Studio Code, je m'intéresse à tout ce qui touche de près ou de loin à la culture populaire : cinéma, bande-dessinée, manga et séries télévisées. Je suis également un passionné de jeux vidéo depuis mon plus jeune âge et pratique le streaming à mes heures perdues. Aussi, j'aime bien les chiens (et les chats), la culture hip-hop et manger des pizzas.   
            </p>
            <p className="text-xl font-light mb-8">
              Vous souhaitez en savoir plus sur mes compétences et mon expérience ? N'hésitez pas à consulter mon <Link to="https://guillaume-robert-devweb.fr/online-resume/index.html" className="font-medium hover:text-ghgreen transition-all">CV en ligne</Link> ainsi que mes <Link to="/projects" className="font-medium hover:text-ghgreen transition-all">projets</Link> ! 
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default About;

