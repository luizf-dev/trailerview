import { CircleArrowLeft, SquarePlay, House, CircleHelp } from "lucide-react";
import { Link } from "react-router-dom";
import '../../sass/Navbar.scss';



function Header(){
    return(
        <nav className="navbar">
            <div className="home-icon">
                <Link to="/"><House className="house links" size={36}/></Link>
            </div>
            <div className="logo">
                <Link to="/"><SquarePlay className="logo-icon" size={36}></SquarePlay></Link>
                <Link to="/"><h1 className="title-header">TrailerView</h1></Link>
            </div>
            <div className="back-info-icons">
            <Link to="/"><CircleArrowLeft className="links" size={24}></CircleArrowLeft></Link>         
            <Link to="/sobre"><CircleHelp className="links" size={24}/></Link>         
            </div>                       
         </nav>
    );
}

export default Header;