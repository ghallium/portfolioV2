import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Error from "../error/error";
import data from "../../data/projets.json";
import Carousel from "../../components/carousel/carousel";
import "./project.css";

export default function Projet() {
  let { id } = useParams();
  const currentIndex = data.findIndex((projet) => projet.id === id);

  if (currentIndex === -1) {
    return <Error />;
  }

  const previousIndex = (currentIndex - 1 + data.length) % data.length;
  const nextIndex = (currentIndex + 1) % data.length;

  const foundProject = data[currentIndex];
  const previousProject = data[previousIndex];
  const nextProject = data[nextIndex];

  if (!foundProject) {
    return <Error />;
  } else {
    return (
      <>
        <div className="bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
          <div className="project_pageblock flex flex-col lg:flex-row w-full lg:w-3/4 mx-auto">
            <div className="carousel_area opacity-0">
              <Carousel />
            </div>
            <div className="projectcontents_area w-11/12 mx-auto lg:mx-5">
              <h2 className="text-5xl opacity-0 py-4 text-ghgreen">
                {foundProject.title}
              </h2>
              <div className="tags_types opacity-0 py-4">
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
              <p className="project_description opacity-0 mb-3">
                {foundProject.description}
              </p>
              <div className="project_links opacity-0 flex mb-12 space-x-2">
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
              <div className="next-previous-back-projects opacity-0 text-xs mb-4 lg:text-sm font-bold uppercase flex justify-between items-center">
                <div className="previous hover:text-ghgreen transition-all">
                  <i className="fa-solid fa-circle-arrow-left"></i>
                  <Link to={`/projet/${previousProject.id}`} className="mx-1">
                    Projet précédent
                  </Link>
                </div>
                <div className="backto hover:text-ghgreen transition-all"> 
                  <i className="fa-solid fa-circle-arrow-up"></i>
                  <Link to="/projects" className="mx-1">
                    Revenir aux projets
                  </Link>
                </div>
                <div className="next hover:text-ghgreen transition-all">
                  <i className="fa-solid fa-circle-arrow-right"></i>
                  <Link to={`/projet/${nextProject.id}`} className="mx-1">
                    Projet suivant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
