import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <div>
        <Link to="/register">S'inscrire</Link>
        <Link to="/sign_in">Se connecter</Link>
      </div>
    </div>
  )

}

export default Navbar
