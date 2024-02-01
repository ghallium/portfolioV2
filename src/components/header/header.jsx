
import { Link } from "react-router-dom";


function Header() {
    return (
    <>
    <div className=" dark:bg-zinc-900">
        <header className="w-full lg:w-3/4 mx-auto py-2 flex justify-between items-center">
                <div className="header_title">
                    <Link to="/">
                        <h1 className="text-4xl text-ghgrey dark:text-zinc-100 font-light">Guillaume <span className="text-ghgreen font-bold">Robert</span></h1>
                        <p className="text-xl text-ghgrey dark:text-zinc-100">Développeur <span className="text-ghgreen font-bold">front end React</span></p>
                    </Link>
                </div>
                <nav className="text-xl text-ghgrey dark:text-zinc-100 uppercase space-x-3">
                    <Link to="/about" className="hover:text-ghgreen hover:font-medium transition-all active:text-ghgreen focus:text-ghgreen">à propos</Link>
                    <Link to="/projects" className="hover:text-ghgreen hover:font-medium transition-all active:text-ghgreen focus:text-ghgreen">projets</Link>
                    <Link to="/contact" className="hover:text-ghgreen hover:font-medium transition-all active:text-ghgreen focus:text-ghgreen">contact</Link>
                </nav>
        </header>
    </div>
    </>
    )
}

export default Header