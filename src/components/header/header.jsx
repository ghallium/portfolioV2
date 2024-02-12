import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="dark:bg-zinc-900">
      <header className="bg-white w-full lg:w-3/4 mx-auto">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
            <div>
                <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
            </div>
            <div
                className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a className="hover:text-gray-500" href="#">Products</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Solution</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Resource</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Developers</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
          </nav>    
            
      </header>
      </div>
    </>
  );
}

export default Header;
