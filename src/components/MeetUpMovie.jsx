import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { meetUpFormService, meetUpListService, } from "../services/meetUpList.services";

function MeetUpMovie(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  // const [movie, setMovie] = useState("");
  const [type, setType] = useState("");
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  // const handleMovie = (e) => setMovie(e.target.value);
  const handleType = (e) => setType(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMeetUp = { title, description, city, movie: props.id, type };

    try {
      await meetUpFormService(newMeetUp);

      meetUpListService();
      setTitle("");
      setDescription("");
      setCity("");
      // setMovie("");
      setType("");
      navigate("/meet-up-list");
    } catch (error) {
      navigate("/error");
    }
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div>
        <button onClick={handleShowForm}>New MeetUp</button>

        {showForm && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitle}
            />

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
            <input type="text" name="city" value={city} onChange={handleCity} />

            <br />

            <label htmlFor="type">Type:</label>
            <input type="enum" name="type" value={type} onChange={handleType} />

            <br />

            <button>Add</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default MeetUpMovie;
