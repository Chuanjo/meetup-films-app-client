import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  meetUpFormService,
  meetUpListService,
} from "../services/meetUpList.services";

import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

function MeetUp(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [movie, setMovie] = useState("");
  // const [creator, setCreator] = useState("");
  const [type, setType] = useState("");
  const [showForm, setShowForm] = useState(false);
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
    const newMeetUp = { title, description, city, movie, type };

    try {
      await meetUpFormService(newMeetUp);
      // props.MeetUpList()
      meetUpListService();
      setTitle("");
      setDescription("");
      setCity("");
      setMovie("");
      // setCreator("")
      setType("");
      // setAttendees("")
    } catch (error) {
      navigate("/error");
    }
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Button
        id="buttonMeetUp"
        onClick={handleShowForm}
        variant="contained"
        disableElevation
      >
        New MeetUp
      </Button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <br />
          <TextField
            id="filled-password-input"
            variant="filled"
            label="Title"
            type="text"
            value={title}
            autoComplete="disable"
            size="small"
            onChange={handleTitle}
          />

          <br />
          <br />

          <TextField
            id="filled-password-input"
            variant="filled"
            label="Description"
            type="text"
            value={description}
            autoComplete="current-description"
            size="small"
            onChange={handleDescription}
          />

          <br />
          <br />

          <TextField
            id="filled-password-input"
            variant="filled"
            label="City"
            type="text"
            value={city}
            autoComplete="current-description"
            size="small"
            onChange={handleCity}
          />
          <br />
          <br />

          <TextField
            id="filled-password-input"
            variant="filled"
            label="Movie"
            type="text"
            value={movie}
            autoComplete="current-description"
            size="small"
            onChange={handleMovie}
          />
          <br />
          <br />
        
          <TextField
            id="filled-password-input"
            variant="filled"
            label="Type"
            type="text"
            value={type}
            autoComplete="current-description"
            size="small"
            onChange={handleType}
          /> 

          <br />
          <br />

          <button>Add Meet Up</button>
        </form>
      )}
    </div>
  );
}

export default MeetUp;

// {/* {showForm && (

//         <form onSubmit={handleSubmit}>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={title}
//             onChange={handleTitle}
//           />

//           <br />

//           <label htmlFor="description">Description:</label>
//           <input
//             type="text"
//             name="description"
//             value={description}
//             onChange={handleDescription}
//           />

//           <br />

//           <label htmlFor="city">City:</label>
//           <input type="text" name="city" value={city} onChange={handleCity} />

//           <br />

//           <label htmlFor="movie">Movie:</label>
//           <input
//             type="text"
//             name="movie"
//             value={movie}
//             onChange={handleMovie}
//           />

//           {/* <label htmlFor="creator">Creator:</label>
//         <input
//           type="text"
//           name="creator"
//           value={creator}
//           onChange={handleCreator}
//         /> */}

//           <br />

//           <label htmlFor="type">Type:</label>
//           <input type="enum" name="type" value={type} onChange={handleType} />

//           <br />

//           {/* <label htmlFor="attendees">Attendees:</label>
//         <input
//           type="text"
//           name="attendees"
//           value={attendees}
//           onChange={handleAttendees}
//         /> */}
//           <button>Add</button>
//         </form>
