import { CircleArrowLeft, SquarePlay, House } from "lucide-react";
import { Link } from "react-router-dom";
import '../../sass/Navbar.scss';



function Header(){
    return(
        <nav className="navbar">
            <div className="home-icon">
                <Link to="/"><House className="house links-footer" size={36}/></Link>
            </div>
            <div className="logo">
                <Link to="/"><SquarePlay className="logo-icon" size={36}></SquarePlay></Link>
                <Link to="/"><h1 className="title-header">TrailerView</h1></Link>
            </div>
            <div className="back-icon">
                <Link to="/"><CircleArrowLeft style={{color: '#fff'}} size={24}></CircleArrowLeft></Link>         
            </div>                       
         </nav>
    );
}

export default Header;