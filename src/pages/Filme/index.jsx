import { useParams } from "react-router-dom";


function Filme(){

    const {id} = useParams();



    return(
        <div className="containers"> 
            <h1 className="titles">meu produto é {id}</h1>
        </div>
    );
}

export default Filme;