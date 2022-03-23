
import { useEffect, useState } from "react"
import { useNavigate, Link, useParams } from "react-router-dom"
import MeetUpMovie from "../components/MeetUpMovie"
import { movieDetailsService } from "../services/movie.services"


function MovieDetails() {
  const [ movieDetails, setMovieDetails ] = useState(null)
  
  const { id } = useParams()
  const navigate = useNavigate()

  
  const getMovieDetails = async () => {
    try {
      const response = await movieDetailsService(id)
      setMovieDetails(response.data);
    } 
    catch(error) 
    {
      if (error.response.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  }
  useEffect(() => {
    getMovieDetails()
  }, [])
  
  if (!movieDetails) {
    return <h3>...Loading</h3>
  }
  
  
  return (
    
    <div>
    
    <h1>Movie Details</h1>

    <h3>Poster:2
      <p>
      
      </p>
    </h3>
    <h2>Title: {movieDetails.original_title}</h2>
    <h3>Director: {movieDetails.original_title}</h3>
    <h3>Year: {movieDetails.release_date}</h3>
    <h3>Duration: {movieDetails.original_title}</h3>
    <h3>Cast: {movieDetails.original_title}</h3>
    <h3>Genre: {movieDetails.original_title}</h3>
    <h3>Synopsis: {movieDetails.overview}</h3>
    
    <h3>MovieMeetUp Component</h3>
    <MeetUpMovie />

    <h3>Trailer:</h3>
    



    </div>
  )
}

export default MovieDetails