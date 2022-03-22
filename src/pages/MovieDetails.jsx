
import { useEffect, useState } from "react"
import { useNavigate, Link, useParams } from "react-router-dom"
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

    <h3>Poster:
      <p>
      {movieDetails.original_title}
      </p>
    </h3>
    <h2>Title:</h2>
    <h3>Director:</h3>
    <h3>Year:</h3>
    <h3>Duration:</h3>
    <h3>Cast:</h3>
    <h3>Genre:</h3>
    <h3>Synopsis:</h3>
    
    <h3>MovieMeetUp Component</h3>

    <h3>Trailer:</h3>
    



    </div>
  )
}

export default MovieDetails