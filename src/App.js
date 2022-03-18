
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar"
import AddMeetUp from './pages/AddMeetUp';
import MovieMeetUp from './pages/MovieMeetUp';
import SearchMovie from './pages/SearchMovie';

import Login from './pages/auth/Login';
import Signin from './pages/auth/Signin';

import Home from './pages/Home';
import MeetUpList from './pages/MeetUpList';
import MovieDetails from './pages/MovieDetails';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Error from './pages/Error';
import NotFound from './pages/NotFound';

import { useEffect, useState, useContext } from 'react';
import { verifyService } from './services/auth.services';

import { ThemeContext } from "./context/theme.context"

function App() {

 
  return (
    <div className="App" >
     
      <Navbar />

      <Routes>

        <Route path="/" element={ <Home /> }/>
        <Route path="/:id/movie-details" element={ <MovieDetails /> } />
        <Route path="/profile/" element={ <Profile /> } />
        <Route path="/profile/:id/edit" element={ <ProfileEdit /> } />
        <Route path="/meet-up-list" element={ <MeetUpList /> }/>

        <Route path="/signin" element={ <Signin /> } />
        <Route path="/login" element={ <Login /> } />

        <Route path="/error" element={ <Error /> } />
        <Route path="*" element={ <NotFound /> } /> 

      </Routes>


    </div>
  );
}

export default App;
