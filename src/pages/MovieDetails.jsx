
import { useEffect, useState } from "react"
import { useNavigate, Link, useParams } from "react-router-dom"
import MeetUpMovie from "../components/MeetUpMovie"
import { movieDetailsService } from "../services/movie.services"
import { meetUpListService } from "../services/meetUpList.services.js"
import MeetupList from "../components/MeetupList"
import { SmartButtonOutlined } from "@mui/icons-material"


function MovieDetails() {
  const [ movieDetails, setMovieDetails ] = useState(null)
  const [ meetUpListMovie, setMeetUpListMovie ] = useState(null)
  const [ meetUpList, setMeetupList] = useState("")
  
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
      const response = await meetUpListService()
      setMeetUpListMovie(response.data);
      const sm = meetUpListMovie.filter((eachMeetup)=>{
        return eachMeetup.movie.includes(id)
      })
      setMeetupList(sm)
      
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
    getMeetUpMovieId()
    
  }, [])
  
  if (!movieDetails && !meetUpList) {
    return <h3>...Loading</h3>
  }
  
  console.log(meetUpList)

  return (
    
    <div>
    
    <h1>Movie Details</h1>

    <h3>Poster:
      <p>
      
      </p>
    </h3>
    <h2>Title:</h2>
    <p>{movieDetails.original_title}</p>

    <h3>Release date: </h3>
    <p>{movieDetails.release_date}</p>

    <h3>Synopsis:</h3>
    <p>{movieDetails.overview}</p>
    
    <MeetUpMovie id={id}/>

    <h3>MeetUps from this movie</h3>

    {/* {meetUpListMovie.map((eachMeetup) => {
        return (
          <div>
            <p>{eachMeetup.includes(id)} ? {eachMeetup} </p>
          </div>
        );
      })} */}
    {/* <MeetupList meetUpList={meetUpList}/> */}
    {meetUpList.map((eachList)=>{
      return <p>{eachList.title}</p>
    })}

    <h3>Trailer:</h3>

    </div>
  )
}

export default MovieDetails