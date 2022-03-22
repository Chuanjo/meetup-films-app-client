
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"


function MovieDetails(props) {
  const [ movieDetails, setMovieDetails ] = useState(null)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getMovieDetails()
  }, [])

  const getMovieDetails = async () => {
    try {
      // const response = await axios.get()
      // setMovieDetails(response.data)
    } catch(err) {
      // navigate error
    }
  }

  if (!movieDetails) {
    return <h3>...Loading</h3>
  }
  
  
  return (
    
    <div>
    
    <h1>Movie Details</h1>

    <h3>Poster:
      <p>
      {/* {eachMovie.original_title} */}
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