import { SquarePlay } from "lucide-react";
import { Link } from "react-router-dom";
import '../../sass/Navbar.scss';



function Header(){
    return(
        <nav className="navbar">
            <Link to="/"><SquarePlay className="logo-icon" size={28}></SquarePlay></Link>
            <Link to="/"><h1 className="title-header">TrailerView</h1></Link>
            <Link to="/sobre"><h4 className="title-sobre">Sobre</h4></Link>
        </nav>
    );
}

export default Header;