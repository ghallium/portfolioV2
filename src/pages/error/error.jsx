import iamError from "../../assets/iamerror.png";



function Error() {
    return (
    <div className="error-pageblock w-full lg:w-3/4 mx-auto lg:flex bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
        <div className="error-image h-48 overflow-hidden lg:h-auto">
            <img src={iamError} className="-mt-28 lg:mt-0" alt="I am error"/>
        </div>
        
        <div className="error-info py-4 text-center lg:text-left">
            <h1 className="text-7xl xl:text-9xl py-6 mx-5 font-light">4<span className="text-ghgreen font-bold">04</span></h1>
            <div className="mx-5">
                <p className="text-3xl xl:text-5xl mb-6 font-light">La page que vous avez demandé n'existe pas.</p>
                <a href="/" className="font-bold text-2xl xl:text-4xl hover:text-ghgreen transition-all">Revenir à la page d'accueil</a>
            </div>
        </div>
    </div>
    )
}

export default Error; 