import { Link } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  let navLinks; 

  const onToggleMenu = (e) => {
    e.target.name = e.target.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[9%]');
  };

  useEffect(() => {
    navLinks = document.querySelector('.nav-links');
  }, []);

  return (
    <>
      <div className="dark:bg-zinc-900 text-ghgrey">
      <header className="w-11/12 py-2 lg:w-3/4 mx-auto">
        <nav className="flex justify-between items-center">
            <div className="header_title transition-transform 
            animate-[slide-out-right_500ms_ease-in-out]">
              <Link to="/">
                <h1 className="text-2xl lg:text-4xl text-ghgrey dark:text-zinc-100 font-light">Guillaume <span className="text-ghgreen font-bold">Robert</span></h1>
                <p className="text-lg lg:text-xl text-ghgrey dark:text-zinc-100">Développeur <span className="text-ghgreen font-bold">front end</span></p>
              </Link>
            </div>
            <div
                className="nav-links text-lg duration-500 z-10 md:static absolute bg-white dark:bg-zinc-900 md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul className="flex uppercase md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li><Link to="/about" className="hover:text-ghgreen hover:font-medium transition-all active:text-ghgreen focus:text-ghgreen">à propos</Link></li>
                    <li><Link to="/projects" className="hover:text-ghgreen hover:font-medium transition-all active:text-ghgreen focus:text-ghgreen">projets</Link></li>
                    <li><Link to="/contact" className="hover:text-ghgreen hover:font-medium transition-all active:text-ghgreen focus:text-ghgreen">contact</Link></li>
                </ul>
            </div>
            <div>
              <ion-icon onClick={(e) => onToggleMenu(e)} name="menu" className="w-16 text-3xl cursor-pointer md:hidden"></ion-icon>

            </div>
          </nav>    
            
      </header>
      </div>
    </>
  );
}

export default Header;
