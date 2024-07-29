import { Link } from "react-router-dom";
import '../../sass/Error.scss';

function Error(){
    return(
        <div className="container-erro">
            <h2 className="title-erro">
                <span>Erro 404!  :(<br/></span>
                <strong>Parece que essa página não existe!</strong><br/>
                <Link className="link-home" to="/">Acesse a  Home!</Link>
            </h2>
        </div>
    );
}

export default Error;