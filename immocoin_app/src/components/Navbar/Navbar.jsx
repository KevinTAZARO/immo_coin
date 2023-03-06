import "./Navbar.scss";
import { Link } from "react-router-dom";
import userAtom from "../../stores/userStore";
import { useAtomValue } from "jotai";
import { authAPI } from "../../services/fetchData";
import { useAtom } from "jotai";
import Cookies from "js-cookie"

const Navbar = () => {

  // const auth_token = Cookies.get('auth_token');

  const userInfo = useAtomValue(userAtom)

  // const [user, setUser] = useAtom(userAtom);
  // const header = 'Bearer ' + auth_token

  return (
    <div className='navbar'>
      <div>
        <Link to="/register">S'inscrire</Link>
        <Link to="/sign_in">Se connecter</Link>
        {/* <button onClick={authAPI.logout(header, setUser)}>Se déconnecter</button> */}
      </div>
      <div>
        <p>{userInfo.user.username}</p>
        <p>{userInfo.user.email}</p>
      </div>
    </div>
  )

}

export default Navbar;