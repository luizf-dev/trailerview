import { Link } from "react-router-dom";
import '../../sass/Footer.scss';
import { House, CircleArrowLeft, CircleHelp } from 'lucide-react';

function Footer(){
    return(
        <div>
            <footer>
                <Link to="/"><House className="house links" size={24}/></Link>
                <Link to="/sobre" className="links"><CircleHelp/></Link>
                <Link to="/"><CircleArrowLeft className="links" size={24}></CircleArrowLeft></Link>         

            </footer>
        </div>
    );

}

export default Footer;