


function Footer() {
    
    return (
        <footer className="text-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
           <div className="w-full lg:w-3/4 mx-auto text-xl py-2 text-center">
                <p className="py-2">© Guillaume ROBERT - 2024</p>
                <div className="footer-socialicons py-2 space-x-5">
                    <a href="mailto:guillaumerober@gmail.com"><i className="fa-solid fa-envelope text-3xl hover:text-ghgreen transition-all"></i></a>
                    <a href="https://www.linkedin.com/in/guill-robert" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin text-3xl hover:text-ghgreen transition-all"></i></a>
                    <a href="https://www.github.com/ghallium" target="_blank" rel="noreferrer"><i className="fa-brands fa-github text-3xl hover:text-ghgreen transition-all"></i></a>
                </div>
                <p className="text-base mb-4">Tous droits réservés</p> 
            </div>    
           
           
        </footer>
    )
}

export default Footer 