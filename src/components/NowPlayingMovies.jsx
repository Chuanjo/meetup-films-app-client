import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getNowPlayingMovieService } from "../services/movie.services";
import * as React from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function NowPlayingMovies() {
  const navigate = useNavigate();

  const imageBaseURL = "https://image.tmdb.org/t/p/w300";

  //1. create -- Information state controller
  const [nowPlayingMovies, setNowPlayingMovies] = useState(null);

  //2. useEffect to find info thoughts componentDidmounted
  useEffect(() => {
    getNowPlayingMovies();
  }, []);


  //3. Async function. calls service function

  const getNowPlayingMovies = async () => {
    try {
      const response = await getNowPlayingMovieService();
      const shuffledArr = shuffle(response.data)

      setNowPlayingMovies(shuffledArr);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  //4. Loading system
  if (!nowPlayingMovies) {
    return <h3>...Loading!!</h3>;
  }

  return (
    <ImageList sx={{ width: 500, height: 800 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" className="homeTitleBoxes">Movie premiere</ListSubheader>
      </ImageListItem>
      {nowPlayingMovies.map((eachMovie) => (
        <ImageListItem key={eachMovie.id}>
          <img
            src={`${`${imageBaseURL}${eachMovie.poster_path}`}?w=248&fit=crop&auto=format`}
            // srcSet={`${`${imageBaseURL}${eachMovie.poster_path}`}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={eachMovie.original_title}
            loading="lazy"
          />
          <ImageListItemBar
            title={eachMovie.original_title.slice(0, 20)}
            subtitle={
              <span>
                <Link to={`/${eachMovie.id}/movie-details`}>More details</Link>
              </span>
            }
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );

  // return (
  //   <div>
  //     <h1>Movie List</h1>

  //     {nowPlayingMovies.map((eachMovie) => {
  //       return (
  //         <div key={eachMovie.id}>
  //           <div class="homeMovieDetails">
  //             <div class= "">
  //               <Card sx={{ maxWidth: 200 }}>
  //                 <CardMedia
  //                   component="img"
  //                   // height="140"
  //                   image={`${imageBaseURL}${eachMovie.poster_path}`}
  //                   alt={eachMovie.original_title}
  //                 />
  //                 <CardContent>
  //                   <Typography gutterBottom variant="h5" component="div">
  //                     {eachMovie.original_title}
  //                     <br />
  //                     <h5>
  //                       <Link to={`/${eachMovie.id}/movie-details`}>
  //                         More details
  //                       </Link>
  //                     </h5>
  //                   </Typography>
  //                 </CardContent>
  //                 <CardActions>
  //                   <Button size="small"></Button>
  //                 </CardActions>
  //               </Card>
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}

export default NowPlayingMovies;
