import iamError from "../../assets/iamerror.png";
import mobileError from "../../assets/mobile-error.png"


function Error() {
    return (
    <div className="error-pageblock flex bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
        <div className="error-image">
            <img src={iamError} alt="je suis une erreur 404"/>
        </div>
        <div className="error-image-mobile md:hidden">
            <img src={mobileError} alt="je suis une erreur 404"/>
        </div>
        <div className="error-info">
            <h1 className="text-9xl py-6 mx-5 font-light">4<span className="text-ghgreen font-bold">04</span></h1>
            <div className="mx-5">
                <p className="mb-4">La page que vous avez demandé n'existe pas.</p>
                <a href="/" className="font-bold hover:text-ghgreen transition-all">Revenir à la page d'accueil</a>
            </div>
        </div>
    </div>
    )
}

export default Error 