import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { authAPI } from '../../services/fetchData'
import { useAtom } from 'jotai';
import userAtom from '../../stores/userStore';
import './Login.scss'

const Login = () => {

  const [user, setUser] = useAtom(userAtom);

  const [formData, setFormData] = useState(
    {
      email: "",
      password: ""
    }
  )

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSent = { "user": formData }
    try {
      const response = await authAPI.login(formDataToSent, setUser);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='login'>
      <Navbar />
      <div className='login-title'>
        <h1>
          Login
        </h1>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
        <input type="password" name='password' placeholder='Mot de passe' value={formData.password} onChange={handleChange}/>
        <button type="submit">Se connecter</button>
      </form>
      <Footer />
    </div>
  )

}

export default Login;
