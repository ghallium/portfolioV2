import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blank from "../layouts/blank";
import Default from "../layouts/default";
import Error from "../pages/error/error";
import Home from "../pages/home/home";
import Projects from "../pages/projects/projects";
import Project from "../pages/project/project";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";

const Router = () => {
    return (
      /* Router définit différentes routes de l'application */
      <BrowserRouter>
        <Routes>
          <Route element={<Default />}>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projet/:id" element={<Project />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
  
          <Route element={<Blank />}>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;