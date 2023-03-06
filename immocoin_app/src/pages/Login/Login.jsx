import React, { useState } from 'react'
import { authAPI } from '../../services/fetchData'

const Login = () => {

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSent = { "user": formData }
    console.log(formDataToSent)
    authAPI.login(formData)

  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
        <input type="password" name='password' placeholder='Mot de passe' value={formData.password} onChange={handleChange}/>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  )

}

export default Login
