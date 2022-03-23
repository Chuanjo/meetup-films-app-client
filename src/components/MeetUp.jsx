import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { meetUpFormService } from "../services/meetUpList.services";


function MeetUp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [movie, setMovie] = useState("");
  // const [creator, setCreator] = useState("");
  const [type, setType] = useState("");
  // const [attendees, setAttendees] = useState([]);
  
  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleMovie = (e) => setMovie(e.target.value);
  // const handleCreator = (e) => setCreator(e.target.value);
  const handleType = (e) => setType(e.target.value);
  // const handleAttendees = (e) => setAttendees(e.target.value);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newMeetUp = { title, description, city, movie, type };
      await meetUpFormService(newMeetUp);
      
      setTitle("");
      setDescription("");
      setCity("")
      setMovie("")
      // setCreator("")
      setType("")
      // setAttendees("")

    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <h3>Add new MeetUp</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          name="title" 
          value={title} 
          onChange={handleTitle} />

        <br />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <br />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={handleCity}
        />

         <br />

        <label htmlFor="movie">Movie:</label>
        <input
          type="text"
          name="movie"
          value={movie}
          onChange={handleMovie}
        />

         <br />

        {/* <label htmlFor="creator">Creator:</label>
        <input
          type="text"
          name="creator"
          value={creator}
          onChange={handleCreator}
        /> */}
        
        <br />

        <label htmlFor="type">Type:</label>
        <input
          type="enum"
          name="type"
          value={type}
          onChange={handleType}
        />

        <br />

        {/* <label htmlFor="attendees">Attendees:</label>
        <input
          type="text"
          name="attendees"
          value={attendees}
          onChange={handleAttendees}
        /> */}

        <button>Add</button>
      </form>
    </div>
  );
}

export default MeetUp;
