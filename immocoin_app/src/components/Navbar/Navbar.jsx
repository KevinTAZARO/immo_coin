import "./Navbar.scss";
import { Link } from "react-router-dom";
import { MdSignalWifiStatusbarConnectedNoInternet } from 'react-icons/md'
import { AiFillPushpin } from 'react-icons/ai'
import { useAtomValue, useAtom } from "jotai";
import Cookies from "js-cookie"

import userAtom from "../../stores/userStore";
import { authAPI } from "../../services/fetchData";

const Navbar = () => {

  const auth_token = Cookies.get('auth_token');

  const userInfo = useAtomValue(userAtom)
  console.log(userInfo);

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
      </div>
      { userInfo.logged === true ? 
        
        <div className="userInfo">
          
          <Link to="/annonces">
            Annonces
          </Link>
          <Link to="/profile/:id">
            Profile
          </Link>

          <button onClick={handleClick}>
            Déconnection
          </button> 
        </div>
        :
        <div className='authentication'>
          <MdSignalWifiStatusbarConnectedNoInternet />
          <Link to="/sign_in">
            Connexion
          </Link>
          <AiFillPushpin />
          <Link to="/register">
            S'inscrire
          </Link>
        </div>        
      }
    </div>
  )

}

export default Navbar;