import "./home.css";
import "../../data/projets.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" bg-ghgreen dark:bg-zinc-800 text-white">
      <div className="home_mainblock w-full lg:w-3/4 py-6 mx-auto">
        <p className="word-animation text-7xl">
          <span className="py-2">Bonjour, je suis <span className="dark:text-ghgreen inline-block">développeur web...</span></span>
        </p>

        <p className="word-animation text-4xl mb-8">
          <span>...et plus précisément développeur front end.</span>
        </p>
        <div className="stack-tech opacity-0 py-4">
          <p className="text-4xl underline mb-8 dark:text-ghgreen">Ma stack :</p>
          <ul className="flex flex-wrap space-x-3 mb-6">
            <li className="flex items-center space-x-2 hover:animate-bounce">
              <svg
                className="w-16"
                fill="#ffffff"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                enable-background="new 0 0 512 512"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="c133de6af664cd4f011a55de6b000d0b">
                    {" "}
                    <path
                      display="inline"
                      d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span>HTML</span>
            </li>
            <li className="flex items-center space-x-2 hover:animate-bounce">
              <svg
                className="w-16"
                fill="#ffffff"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                enable-background="new 0 0 512 512"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="c133de6af664cd4f011a55de6b001a2b">
                    {" "}
                    <path
                      display="inline"
                      d="M204.064,46.682v22.018h-56.302V0.501h56.302v24.13h-32.172v22.051H204.064z M261.941,24.631h22.492 V0.501h-56.308c0,0,0,12.112,0,24.13c7.533,7.533,11.461,11.139,22.356,22.034c-6.369,0-22.356,0.022-22.356,0.021v22.014h56.308 V46.682L261.941,24.631z M341.746,24.631h22.49V0.501H307.93c0,0,0,12.112,0,24.13c7.531,7.533,11.461,11.139,22.355,22.034 c-6.365,0-22.355,0.022-22.355,0.021v22.014h56.307V46.682L341.746,24.631z M438.395,101.112l-34.203,370.486l-148.193,39.9 l-148.196-39.9L73.605,101.112H438.395z M369.477,176.444H255.865h-115.62l5.529,44.739h110.091h6.184l-6.184,2.574 l-106.067,44.177l3.518,43.73l102.549,0.333l54.963,0.175l-3.521,58.311l-51.442,14.484v-0.046l-0.422,0.116l-49.684-12.542 l-3.015-36.195h-0.164h-46.085h-0.162l6.032,69.876l93.5,27.649v-0.05l0.168,0.05l93-27.146L361.1,267.935H255.865h-0.26 l0.26-0.112l109.086-46.639L369.477,176.444z"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span>CSS</span>
            </li>
            <li className="flex items-center space-x-2 hover:animate-bounce">
              <svg
                className="w-16"
                fill="#ffffff"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>javascript</title>{" "}
                  <path d="M17.313 14.789h-2.809c0 2.422-0.011 4.829-0.011 7.254 0.033 0.329 0.051 0.712 0.051 1.099 0 0.81-0.081 1.601-0.236 2.365l0.013-0.076c-0.412 0.861-1.475 0.751-1.957 0.6-0.451-0.242-0.808-0.609-1.031-1.055l-0.006-0.014c-0.044-0.094-0.097-0.174-0.16-0.246l0.001 0.001-2.281 1.406c0.367 0.79 0.934 1.434 1.637 1.885l0.018 0.011c0.763 0.427 1.675 0.678 2.645 0.678 0.484 0 0.954-0.063 1.401-0.18l-0.038 0.009c0.988-0.248 1.793-0.89 2.254-1.744l0.009-0.019c0.359-0.914 0.566-1.973 0.566-3.080 0-0.388-0.026-0.77-0.075-1.145l0.005 0.044c0.015-2.567 0-5.135 0-7.722zM28.539 23.843c-0.219-1.368-1.11-2.518-3.753-3.59-0.92-0.431-1.942-0.731-2.246-1.425-0.063-0.158-0.099-0.341-0.099-0.532 0-0.124 0.015-0.244 0.044-0.359l-0.002 0.010c0.208-0.55 0.731-0.935 1.343-0.935 0.199 0 0.388 0.040 0.559 0.113l-0.009-0.004c0.552 0.19 0.988 0.594 1.215 1.112l0.005 0.013c1.292-0.845 1.292-0.845 2.193-1.406-0.216-0.369-0.459-0.689-0.734-0.977l0.002 0.002c-0.767-0.814-1.852-1.32-3.056-1.32-0.171 0-0.34 0.010-0.505 0.030l0.020-0.002-0.881 0.111c-0.856 0.194-1.587 0.639-2.133 1.252l-0.003 0.004c-0.535 0.665-0.859 1.519-0.859 2.449 0 1.279 0.613 2.415 1.56 3.131l0.010 0.007c1.706 1.275 4.2 1.555 4.519 2.755 0.3 1.462-1.087 1.931-2.457 1.762-0.957-0.218-1.741-0.83-2.184-1.652l-0.009-0.017-2.287 1.313c0.269 0.536 0.607 0.994 1.011 1.385l0.001 0.001c2.174 2.194 7.61 2.082 8.586-1.255 0.113-0.364 0.178-0.782 0.178-1.215 0-0.3-0.031-0.593-0.091-0.875l0.005 0.028zM1.004 1.004h29.991v29.991h-29.991z"></path>{" "}
                </g>
              </svg>
              <span>JavaScript</span>
            </li>
            <li className="flex items-center space-x-2 hover:animate-bounce">
              <svg
                className="w-16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>react</title>{" "}
                  <rect width="24" height="24" fill="none"></rect>{" "}
                  <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"></path>{" "}
                </g>
              </svg>
              <span>React</span>
            </li>
            <li className="flex items-center space-x-2 hover:animate-bounce">
              <svg
                className="w-16"
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                  ></path>
                </g>
              </svg>
              <span>Tailwind</span>
            </li>
            <li className="flex items-center space-x-2 hover:animate-bounce">
              <svg
                className="bi bi-bootstrap-fill w-16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>{" "}
                  <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"></path>{" "}
                </g>
              </svg>
              <span>Bootstrap</span>
            </li>
            <li className="flex items-center space-x-2 hover:animate-bounce">
              <svg
                className="w-16"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>node-js</title>{" "}
                  <g id="Layer_2" data-name="Layer 2">
                    {" "}
                    <g id="invisible_box" data-name="invisible box">
                      {" "}
                      <rect width="48" height="48" fill="none"></rect>{" "}
                    </g>{" "}
                    <g id="Q3_icons" data-name="Q3 icons">
                      {" "}
                      <g>
                        {" "}
                        <path d="M42.3,11.8,25.7,2.4a4,4,0,0,0-3.4,0L5.7,11.8A3.4,3.4,0,0,0,4,14.7V33.3a3.4,3.4,0,0,0,1.7,2.9l4.4,2.5a7.2,7.2,0,0,0,3.8,1c3.1,0,4.9-1.9,4.9-5.1V16.3a.5.5,0,0,0-.5-.5H16.2a.5.5,0,0,0-.5.5V34.6c0,1.5-1.5,2.9-3.9,1.7L7.2,33.7a.5.5,0,0,1-.2-.4V14.7a.8.8,0,0,1,.2-.5L23.7,4.9h.6l16.5,9.3a.8.8,0,0,1,.2.5V33.3a.5.5,0,0,1-.2.4L24.3,43a.6.6,0,0,1-.6,0l-4.2-2.4a.3.3,0,0,0-.4,0l-2.5,1.1c-.3.1-.7.2.1.7l5.6,3.1a3.1,3.1,0,0,0,3.4,0l16.6-9.3A3.4,3.4,0,0,0,44,33.3V14.7A3.4,3.4,0,0,0,42.3,11.8Z"></path>{" "}
                        <path d="M29.1,30.3c-4.4,0-5.3-1-5.7-3.1a.4.4,0,0,0-.4-.4H20.8a.4.4,0,0,0-.4.4c0,2.7,1.5,6,8.7,6,5.2,0,8.2-2,8.2-5.5s-2.4-4.5-7.5-5.1-5.6-1-5.6-2.2.4-2.2,4.2-2.2,4.7.7,5.2,2.9a.5.5,0,0,0,.5.4h2.1l.4-.2a.4.4,0,0,0,.1-.3c-.3-3.9-3-5.7-8.3-5.7s-7.5,2-7.5,5.2,2.8,4.5,7.3,5,5.9,1.2,5.9,2.3S32.6,30.3,29.1,30.3Z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span>Node.js</span>
            </li>
          </ul>
        </div>
        <div className="more-info opacity-0 py-4">
          <p className="text-4xl mb-6">Voulez-vous <span className="text-ghgreen">en savoir plus ?</span></p>
          <div className="flex flex-col text-lg font-medium mx-10">
            <Link
              to="about"
              className="py-2 hover:scale-105 hover:font-bold dark:hover:text-ghgreen transition-all"
            >
              À propos de moi
            </Link>
            <Link
              to="projects"
              className="py-2 hover:scale-105 hover:font-bold dark:hover:text-ghgreen transition-all"
            >
              Mes projets
            </Link>
            <Link
              to="https://guillaume-robert-devweb.fr/online-resume/index.html"
              className="py-2 hover:scale-105 hover:font-bold dark:hover:text-ghgreen transition-all"
            >
              Mon CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
