import { Link } from "react-router-dom";

function Error(){
    return(
        <div className="containers">
            <h2 className="titles">
                <span style={{ color: 'red', textAlign: 'center' }}>
                    Ops! :(<br/>
                </span>
                Parece que essa página não existe!<br/>
                <Link to="/">Vá para a  Home!</Link>
            </h2>
        </div>
    );
}

export default Error;