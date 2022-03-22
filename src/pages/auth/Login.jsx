import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth.services";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// import { loginService } from "../auth/Login";
// import { ThemeContext } from "../context/theme.context";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const { switchBtnTheme } = useContext(ThemeContext)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password };

    try {
      const response = await loginService(user);
      const { authToken } = response.data;

      localStorage.setItem("authToken", authToken);

      // Redirect Home
      props.setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setErrorMessage(err.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div>
      <h3>Log In</h3>

      {/* <form onSubmit={handleSubmit}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      > 
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
    </Box> */}

      <form onSubmit={handleSubmit}>
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

        {/* <button style={{...btnStyles, ...switchBtnTheme()}}>Submit</button> */}
        <button>Submit</button>
        {/* style={switchBtnTheme()} */}
      </form>
      <p>{errorMessage}</p>
    </div>
  );
}

export default Login;
