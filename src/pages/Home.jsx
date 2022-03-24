import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getNowPlayingMovieService } from "../services/movie.services";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Home() {
  const navigate = useNavigate();

  const imageBaseURL = "https://image.tmdb.org/t/p/w300";

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
      const response = await getNowPlayingMovieService();
      console.log(response.data);

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
            <div class="homeMovieDetails">
              <div class= "">
                <Card sx={{ maxWidth: 200 }}>
                  <CardMedia
                    component="img"
                    // height="140"
                    image={`${imageBaseURL}${eachMovie.poster_path}`}
                    alt={eachMovie.original_title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {eachMovie.original_title}
                      <br />
                      <h5>
                        <Link to={`/${eachMovie.id}/movie-details`}>
                          More details
                        </Link>
                      </h5>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"></Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
