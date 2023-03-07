import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from 'js-cookie'
import { authAPI } from './services/fetchData';
import { useAtom } from 'jotai';
import userAtom from './stores/userStore';
import './styles/style.scss';

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Adverts from "./pages/Adverts/Adverts";
import './styles/style.scss'

function App() {

  const [user, setUser] = useAtom(userAtom);

  let auth_token = Cookies.get('auth_token');
  let cookieExist = auth_token !== undefined && auth_token !== null;
  if (cookieExist && user.logged === false) {
    let data = " Bearer " + auth_token
    authAPI.loginWithToken(data, setUser);
  }
  
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign_in" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/sign_out" />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/annonces" element={<Adverts />}/>
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
