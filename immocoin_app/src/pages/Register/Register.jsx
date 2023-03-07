import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { authAPI } from '../../services/fetchData'
import { useAtom } from 'jotai';
import userAtom from '../../stores/userStore';
import './Register.scss'

const Register = () => {

  const [user, setUser] = useAtom(userAtom);

  const [formData, setFormData] = useState(
    {
      username: "",
      email: "",
      emailConfirmation: "",
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
    if (formData.email === formData.emailConfirmation) {
      const { emailConfirmation, ...formDataWithoutEmailConfirmation } = formData
      const formDataToSent = {"user": formDataWithoutEmailConfirmation}
      try {
        const response = await authAPI.register(formDataToSent, setUser);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Les mots de passe ne correspondent pas.");
    }  
    
  }

  return (
    <div className='register'>
      <Navbar />
      <div className='register-title'>
        <h1>
          Register
        </h1>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder="Nom d'utilisateur" value={formData.username} onChange={handleChange}/>
        <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
        <input type="email" name='emailConfirmation' placeholder='Confirmer votre email' value={formData.emailConfirmation} onChange={handleChange}/>
        <input type="password" name='password' placeholder='Mot de passe' value={formData.password} onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>S'inscrire</button>
      </form>
      <Footer />
    </div>
  )

}

export default Register;
