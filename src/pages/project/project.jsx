import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Error from "../error/error";
import data from "../../data/projets.json";
import Carousel from "../../components/carousel/carousel";

export default function Projet() {
  let { id } = useParams();
  const foundProject = data.find((projet) => projet.id === id);

  if (!foundProject) {
    return <Error />;
  } else {
    return (
      <>
        <div className="bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
          <div className="project_pageblock flex w-full lg:w-3/4 mx-auto">
            <div className="carousel_area">
              <Carousel />
            </div>
            <div className="projectcontents_area mx-0 lg:mx-5">
              <h2 className="text-5xl py-4 text-ghgreen">
                {foundProject.title}
              </h2>
              <div className="tags_types py-4">
                <ul className="flex space-x-2 mb-2">
                  {foundProject.tags.map((tag) => (
                    <li
                      className="bg-ghgreen text-white font-medium p-1 rounded-md"
                      key={tag}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="project_type bg-zinc-600 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-800 font-medium p-1 rounded-md">
                  {foundProject.type_projet}
                </span>
                <span className="project_status mx-2 uppercase">
                  {foundProject.status}
                </span>
              </div>
              <p className="projet_description mb-3">
                {foundProject.description}
              </p>
              <div className="project_links flex mb-24 space-x-2">
                <a
                  href={foundProject.github_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="goGithub font-bold hover:text-ghgreen hover:scale-105 transition-all">
                    <i class="fa-brands fa-github"></i>
                    <span className="mx-2">Voir sur Github</span>
                  </div>
                </a>
                {foundProject.project_url ? ( // Si foundProject.project_url = null, n'est pas rendu dans le composant
                  <a
                    href={foundProject.project_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="goWebsite font-bold hover:text-ghgreen hover:scale-105 transition-all">
                      <span>Voir le site</span>
                    </div>
                  </a>
                ) : null}
              </div>
              <div className="backtoprojects font-bold hover:text-ghgreen transition-all">
                <i className="fa-solid fa-circle-arrow-left"></i>
                <Link to="/projects" className="mx-2">
                  Revenir aux projets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
