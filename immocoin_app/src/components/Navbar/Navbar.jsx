import "./Navbar.scss";
import { Link } from "react-router-dom";
import userAtom from "../../stores/userStore";
import { useAtomValue } from "jotai";
import { authAPI } from "../../services/fetchData";
import { useAtom } from "jotai";
import Cookies from "js-cookie"

const Navbar = () => {

  const auth_token = Cookies.get('auth_token');

  const userInfo = useAtomValue(userAtom)

  const [user, setUser] = useAtom(userAtom);
  const header = 'Bearer ' + auth_token

  const handleClick = (e) => {
    e.preventDefault();
    authAPI.logout(header);
    Cookies.remove('auth_token');
    setUser({
      auth_token: null,
      user: {
        id: null,
        username: null,
        email: null
      },
      loading: false,
      hasErrors: false,
      authenticated: false,
      logged: false
    })
  }

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to="/"> 
          ImmoCoin
        </Link>
        <p>{userInfo.user.username}</p>
        <p>{userInfo.user.email}</p>
      </div>
      <div className='authentication'>
        <Link to="/sign_in">
          Connexion
        </Link>
        <Link to="/register">
          S'inscrire
        </Link>
        <button onClick={handleClick}>
          Déconnection
        </button>        
    
        
      </div>
    </div>
  )

}

export default Navbar;