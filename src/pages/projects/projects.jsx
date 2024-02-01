import React from "react";
import projectsData from "../../data/projets.json";
import { Link } from "react-router-dom";


function Projects() {
  return (
    
    <div className="projects_area bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-white py-5">
      <h2 className="text-5xl font-light py-3 mb-6 text-center">Pr<span className="text-ghgreen font-bold">ojets</span></h2>
      <div className="projects_container">
      {projectsData.map((p) => (
        <Link key={p.id} to={`/projet/${p.id}`}>
          
          <div
            className="project_card"
            style={{
             backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${p.cover})`,

            }}
          >
            <p className="project_card_title">{p.title}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}

export default Projects;