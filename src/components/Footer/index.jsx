import { Link } from "react-router-dom";
import '../../sass/Footer.scss';
import { House, CircleArrowLeft } from 'lucide-react';

function Footer(){
    return(
        <div>
            <footer>
                <Link to="/"><House className="house links-footer" size={36}/></Link>
                <Link to="/sobre" className="links-footer">Sobre</Link>
                <Link to="/"><CircleArrowLeft style={{color: '#fff'}} size={24}></CircleArrowLeft></Link>         

            </footer>
        </div>
    );

}

export default Footer;