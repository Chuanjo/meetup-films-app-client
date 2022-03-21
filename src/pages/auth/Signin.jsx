import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signinService } from '../../services/auth.services'

function Signin() {

  const [ username, setUsername ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ errorMessage, setErrorMessage ] = useState("")
  const [ nickName, setNickName ] = useState("")
  const [ city, setCity ] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = { username, email, password, nickName, city }
    // enviar usuario al backend para crear el registro
    try {
      await signinService(user)
      navigate("/login")
    } catch(err) {
      // if (err?.response?.status === 400) {
      if (err.response && err.response.status === 400) {
        setErrorMessage(err.response.data.errorMessage)
      } else {
        navigate("/error")
      }
    }

  }

  return (
    <div>
    
      <h3>Sign In</h3>

      <form onSubmit={handleSubmit}>

        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          name="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />

        <label htmlFor="email">Email:</label>
        <input 
          type="text" 
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <label htmlFor="password">Password:</label>
        <input 
          type="text" 
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <label htmlFor="nickName">Nick:</label>
        <input 
          type="text" 
          name="nickName" 
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />

        <br />

        <label htmlFor="city">City:</label>
        <input 
          type="text" 
          name="city" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <br />

        <button>Submit</button>

      </form>

      <p>{errorMessage}</p>
    
    </div>
  )
}

export default Signin