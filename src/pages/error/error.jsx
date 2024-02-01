import iamError from "../../assets/iamerror.png";
import mobileError from "../../assets/mobile-error.png"


function Error() {
    return (
    <div className="error-pageblock">
        <div className="error-image">
            <img src={iamError} alt="je suis une erreur 404"/>
        </div>
        <div className="error-image-mobile">
            <img src={mobileError} alt="je suis une erreur 404"/>
        </div>
        <div className="error-info">
            <h1>404</h1>
            <p>La page que vous avez demandé n'existe pas.</p>
            <a href="/">Revenir à la page d'accueil</a>
        </div>
    </div>
    )
}

export default Error 