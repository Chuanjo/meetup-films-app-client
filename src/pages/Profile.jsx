import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { meetUpListUserIdService } from "../services/meetUpList.services"

function Profile() {
  const [ meetUpListUserId, setMeetUpListUserId ] = useState(null)

  const { id } = useParams();

  const navigate = useNavigate();
  
  // useEffect(() => {
  //   getMeetUpLisUserId();
  // }, []);
  
  // const getMeetUpLisUserId = async () => {
  //   try {
  //     const response = await meetUpListUserIdService()
  //     setMeetUpListUserId(response.data)
      
  //   } 
  //   catch(error) 
  //   {
  //     if (error.response.status === 401) {
  //       navigate("/login");
  //     } else {
  //       navigate("/error");
  //     }
  //   }
  // }

  // if (!meetUpListUserId) {
  //   return <h3>...Loading</h3>
  // }

  return (
    <div>
      <h1>Profile</h1>
      <button>Edit</button>
      <h3>Event create List</h3>
      <h3>Event Assist List</h3>
    </div>
  );
}

export default Profile;
