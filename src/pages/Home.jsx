import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios"
import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";

function Home() {
  //1. crear el estado que controle la información del

  // const [nowPlayingMovies, setNowPlayingMovies] = useEffect(null)
  // const [nowDiscoverMovies, setDiscoverMovies] = useEffect(null)

  //2. useEffect to find info thoughts componentDidmounted
  useEffect (() => {
    getNowPlayingMovies()
  }, [])

  //3. funcion async que haga la llamada a la api

  const getNowPlayingMovies = async () => {
    
    try {
      // const response = axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=ef089baa2cdc4146ef1590cfa9cc45b1")
      const response = axios.get("http://localhost:5005/api/service/movie/now_playing")
    
      console.log(response); 
    } 
    catch (error) {
      
    }

  }


  //4. el sistema de loading
  



  
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.xtrafondos.com/descargar.php?id=4005&resolucion=3840x2160"
            className="d-block w-100"
            alt="..."
            width="300px"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Elden Ring</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://www.whatspaper.com/wp-content/uploads/2021/10/hollow-knight-wallpaper-whatspaper-5.jpg"
            className="d-block w-100"
            alt="..."
            width="300px"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;
