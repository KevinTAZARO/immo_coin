import "./Navbar.scss";
import { Link } from "react-router-dom";
import userAtom from "../../stores/userStore";
import { useAtomValue } from "jotai";
import { authAPI } from "../../services/fetchData";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { GoSignIn } from "react-icons/go";
import { BsPersonFillCheck } from "react-icons/bs";

const Navbar = () => {
  // const auth_token = Cookies.get('auth_token');

  const userInfo = useAtomValue(userAtom);

  // const [user, setUser] = useAtom(userAtom);
  // const header = 'Bearer ' + auth_token

  return (
    <div className="navbar">
      <div className="logo">
          <Link to="/">
            <strong>Immo</strong>Coin
          </Link>
      </div>
      <div className="authentication">
        <div className="signin">
          <BsPersonFillCheck />
          <Link to="/sign_in">Connexion</Link>
        </div>
        <div className="reg">
          <GoSignIn />
          <Link to="/register">S'inscrire</Link>
        </div>
        {/* <button onClick={authAPI.logout(header, setUser)}>Se déconnecter</button> */}
      </div>
    </div>
  );
};

export default Navbar;
