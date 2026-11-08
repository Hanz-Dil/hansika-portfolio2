
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#home" className="logo">
                Hanz<span>Dil</span>
            </a>

            <div className="nav-links">
                <Link to="/journey">My Journey</Link>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

            <a href="#contact" className="nav-contact">
                Let's Talk <span>↗</span>
            </a>
        </nav>
    );
}

export default Navbar;
