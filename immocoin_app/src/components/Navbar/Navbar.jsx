import "./Navbar.scss";
import { Link } from "react-router-dom";
import { MdSignalWifiStatusbarConnectedNoInternet } from 'react-icons/md'
import { AiFillPushpin } from 'react-icons/ai'
import { useAtomValue, useAtom } from "jotai";
import Cookies from "js-cookie"

import userAtom from "../../stores/userStore";
import { authAPI } from "../../services/fetchData";

const Navbar = () => {

  // const auth_token = Cookies.get('auth_token');

  const userInfo = useAtomValue(userAtom)
  console.log(userInfo);

  // const [user, setUser] = useAtom(userAtom);
  // const header = 'Bearer ' + auth_token

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
            <MdSignalWifiStatusbarConnectedNoInternet />
            Connexion
          </Link>
          <Link to="/register">
            <AiFillPushpin />
            S'inscrire
          </Link>
          {/* <button onClick={authAPI.logout(header, setUser)}>Se déconnecter</button> */}
          
        </div>
    </div>
  )

}

export default Navbar;