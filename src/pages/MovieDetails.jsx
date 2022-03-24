
import { useEffect, useState } from "react"
import { useNavigate, Link, useParams } from "react-router-dom"
import MeetUpMovie from "../components/MeetUpMovie"
import { movieDetailsService } from "../services/movie.services"
import { getMeetUpById } from "../services/meetUpList.services.js"
import MeetupListComponet from "../components/MeetupListComponent"
import { SmartButtonOutlined } from "@mui/icons-material"


function MovieDetails() {
  const [ movieDetails, setMovieDetails ] = useState(null)
  // const [ meetUpListMovie, setMeetUpListMovie ] = useState(null)
  const [ meetUpList, setMeetupList] = useState([])
  const imageBaseURL = "https://image.tmdb.org/t/p/w300"
  
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

  const getMeetUpMovieId = async () => {
    try {
      const response = await getMeetUpById(id)
      setMeetupList(response.data)
      
    } 
    catch(error) 
    {
      if (error.response.status === 401 || error.response.status === 500) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  }

  useEffect(() => {
    getMovieDetails()
    getMeetUpMovieId()
    
  }, [])
  
  if (!movieDetails) {
    return <h3>...Loading</h3>
  }
  
  

  return (
    
    <div>
    
    <h1>Movie Details</h1>
        <img src={`${imageBaseURL}${movieDetails.poster_path}`} alt="movie_image" />
    <h2>Title:</h2>
    <p>{movieDetails.original_title}</p>

    <h3>Release date: </h3>
    <p>{movieDetails.release_date}</p>

    <h3>Synopsis:</h3>
    <p>{movieDetails.overview}</p>
    
    <MeetUpMovie id={id}/>

    <h3>MeetUps from this movie</h3>

  
    {meetUpList.map((eachList)=>{
      return <p>{eachList.title}</p>
    })}

    <h3>Trailer:</h3>

    </div>
  )
}

export default MovieDetails