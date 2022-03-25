import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import MeetUpMovie from "../components/MeetUpMovie";
import { movieDetailsService } from "../services/movie.services";
import { getMeetUpById } from "../services/meetUpList.services.js";
import MeetupListComponet from "../components/MeetupListComponent";
import { SmartButtonOutlined } from "@mui/icons-material";
import { Carousel } from "bootstrap";
// import { Card } from "react-bootstrap";
import { Button } from "bootstrap";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  // const [ meetUpListMovie, setMeetUpListMovie ] = useState(null)
  const [meetUpList, setMeetupList] = useState([]);
  const imageBaseURL = "https://image.tmdb.org/t/p/w300";

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails();
    getMeetUpMovieId();
  }, []);

  const getMovieDetails = async () => {
    try {
      const response = await movieDetailsService(id);
      setMovieDetails(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  const getMeetUpMovieId = async () => {
    try {
      const response = await getMeetUpById(id);
      setMeetupList(response.data);
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 500) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  if (!movieDetails) {
    return <h3>...Loading</h3>;
  }



  return (
    <div >
      <div className="movieDetailsBox" width="100%">
        <img
          
          class="card-img-top"
          src={`${imageBaseURL}${movieDetails.poster_path}`}
          alt={movieDetails.original_title}
          marginTop="200px"
        />
        <div class="card-body">
          <h2 class="card-title">{movieDetails.original_title}</h2>
          <h3>Release date: </h3>
          <p class="card-text">{movieDetails.release_date}</p>
          <h3>Overview: </h3>
          <p class="card-text">{movieDetails.overview}</p>
        </div>
      </div>
      <div>
        <div>
          <MeetUpMovie id={id} />
        </div>

        <div>
          <h3>Meet Up's</h3>

          {meetUpList.map((eachList) => {
            return <p>{eachList.title}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

{
  /* <div>
  <div className="movieDetailsBox">
    <img src={`${imageBaseURL}${movieDetails.poster_path}`} alt="movie_image" />
  </div>
  <div>
    <h2>Title:</h2>
    <p>{movieDetails.original_title}</p>
    <h3>Release date: </h3>
    <p>{movieDetails.release_date}</p>
    <h3>Synopsis:</h3>
    <p>{movieDetails.overview}</p>
  </div>
</div>; */
}
