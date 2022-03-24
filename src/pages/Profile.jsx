import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { myUserProfileService } from "../services/user.services"
import { meetUpListUserIdService } from "../services/meetUpList.services"

function Profile() {
  const [ userInfermation, setUserInformation ] = useState(null)
  const [ meetUpList, setMeetUpList ] = useState(null)

  const { id } = useParams();

  const navigate = useNavigate();
  
  useEffect(() => {
    getInformation();
  }, []);
  
  const getInformation = async () => {
    try {
      const response = await myUserProfileService()
      setUserInformation(response.data)
      const response2 = await meetUpListUserIdService()
      setMeetUpList(response2.data)
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

  if (!userInfermation && !meetUpList) {
    return <h3>...Loading</h3>
  }

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
