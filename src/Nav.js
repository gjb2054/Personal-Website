import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
    return (  
      <>
        <div className="navbar">
          <nav>
                <Link to="/">Home</Link>

                <Link to="/Experiences">Experiences</Link>

                <Link to="/Projects">Projects</Link>

                <Link to="/Resume">Resume</Link>

                <Link to="/Contact">Contact</Link>

          </nav>
          <div className="line-divider" />
        </div>
        
      </>
    )
}

export default Nav;