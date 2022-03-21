import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar(props) {
  const { isLoggedIn, setIsLoggedIn } = props;

  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsLoggedIn(true);
  };
  const handleSignIn = () => {
    setIsLoggedIn(false);
  };
  const handleLogIn = () => {
    setIsLoggedIn(false);
  };
  const handleMeetUp = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/:id/movie-details">MovieDetails</NavLink>

      <form>
        <label htmlFor="">Search</label>
        <input type="text" />
      </form>
      

      
      <button onClick={handleMeetUp}><NavLink to="/meet-up-list">Meet up</NavLink></button>

      <button onClick={handleSignIn}><NavLink to="/signin">Sign in</NavLink></button>
      <button onClick={handleLogIn}><NavLink to="/login">Log in</NavLink></button>

      <button onClick={handleLogOut}>Log out</button>
      
    </div>
  );
}

export default Navbar;
