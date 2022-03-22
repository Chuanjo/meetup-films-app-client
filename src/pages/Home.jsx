import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getNowPlayingMovieService } from "../services/movie.services";

function Home() {
  const navigate = useNavigate();

  //1. create -- Information state controller
  const [nowPlayingMovies, setNowPlayingMovies] = useState(null);
  // const [popularMovieList, setPopularMovieList] = useEffect(null)

  //2. useEffect to find info thoughts componentDidmounted
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  // useEffect (() => {
  //   getMoviesGenreList()
  // }, [])

  //3. Async function. calls service function

  const getNowPlayingMovies = async () => {
    try {
      const response = await getNowPlayingMovieService()
      console.log(response.data);
      console.log("hola");
      setNowPlayingMovies(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  
  // const getMoviesGenreList = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5005/api/movie")
  //     console.log(response);
  //   }
  //   catch (error) {
  //     navigate()
  //   }
  // }

  //4. Loading system
  if (!nowPlayingMovies) {
    return <h3>...Loading!!</h3>;
  }

  return (
    <div>
      <h1>Movie List</h1>

      {nowPlayingMovies.map((eachMovie) => {
        return (
          <div key={eachMovie.id}>
            
            <Link to={`/${eachMovie.id}/movie-details`}>{eachMovie.original_title}</Link>
            
          </div>
        );
      })}
    </div>
  );
}

export default Home;
