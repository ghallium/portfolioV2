import React, { useState } from "react";
import projectsData from "../../data/projets.json";
import { Link } from "react-router-dom";

function Projects() {
  const [selectedTags, setSelectedTags] = useState([]);

  function filterProjects() {
    // Si aucun filtre n'est sélectionné, retourner tous les projets
    if (selectedTags.length === 0) {
      return projectsData;
    }

    // Filtrer les projets en fonction des tags sélectionnés
    return projectsData.filter((project) => {
      return selectedTags.every((tag) => project.tags.includes(tag));
    });
  }

  function handleTagToggle(tag) {
    // Mettre à jour les tags sélectionnés
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  const filteredProjects = filterProjects();

  return (
    <>
      <div className=" bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-white py-5">
        <div className="flex w-full lg:w-3/4 mx-auto">
          <div className="filters-area w-full lg:w-1/12">
            <h2 className="uppercase mb-4">Filtres</h2>
            <ul>
              <li>
                <input
                  type="checkbox"
                  onChange={() => handleTagToggle("HTML / CSS")}
                />
                <label className="mx-2">HTML / CSS</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onChange={() => handleTagToggle("Javascript")}
                />
                <label className="mx-2">Javascript</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onChange={() => handleTagToggle("React")}
                />
                <label className="mx-2">React</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onChange={() => handleTagToggle("Vite")}
                />
                <label className="mx-2">Vite</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onChange={() => handleTagToggle("Tailwind")}
                />
                <label className="mx-2">Tailwind</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onChange={() => handleTagToggle("Node.js")}
                />
                <label className="mx-2">Node.js</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onChange={() => handleTagToggle("MongoDB")}
                />
                <label className="mx-2">MongoDB</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  onChange={() => handleTagToggle("Sass")}
                />
                <label className="mx-2">Sass</label>
              </li>
              {/* Ajoutez des gestionnaires pour les autres checkboxes */}
            </ul>
          </div>
          <div className="projects-area w-full lg:w-11/12">
            <h2 className="text-5xl font-light py-3 mb-6 mx-0 lg:mx-14">
              Pr<span className="text-ghgreen font-bold">ojets</span>
            </h2>
            <div className="projects-container w-full mx-0 lg:mx-14 flex flex-wrap items-center">
              {filteredProjects.map((p) => (
                <Link key={p.id} to={`/projet/${p.id}`}>
                  <div
                    className="project-card w-[390px] h-[235px] rounded-md mb-3 mr-3 relative"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${p.cover})`,
                    }}
                  >
                    <p className="project-card-title text-white text-xl font-bold mx-2 absolute bottom-2">
                      {p.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
