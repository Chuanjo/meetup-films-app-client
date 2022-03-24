import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { myUserProfileService } from "../services/user.services";
import { meetUpListUserIdService } from "../services/meetUpList.services";

function Profile() {
  const [userInfo, setUserInformation] = useState(null);
  const [meetUpList, setMeetUpList] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getInformation();
  }, []);

  const getInformation = async () => {
    try {
      const response = await myUserProfileService();
      setUserInformation(response.data);
      const response2 = await meetUpListUserIdService();
      setMeetUpList(response2.data);
     // console.log(response2.data)
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  if (!userInfo || !meetUpList) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <h3>Username:</h3>
      <p>{userInfo.username}</p>
      <h3>E-Mail:</h3>
      <p>{userInfo.email}</p>
      <h3>Nick:</h3>
      <p>{userInfo.nickName}</p>
      <h3>City:</h3>
      <p>{userInfo.city}</p>

      <button>Edit</button>

      <h2>Event create List</h2>
      {/* {console.log(meetUpList)} */}
      {meetUpList.map((eachMeetUp) => {
        return (

          <div>
            <div>
              <h4>Title: </h4>
              <p>{eachMeetUp.title}</p>
            </div>
            <div>
              <h4>City: </h4>
              <p>{eachMeetUp.city}</p>
            </div>
            <div>
              <h4>Description: </h4>
              <p>{eachMeetUp.description}</p>
            </div>
          </div>
        );
      })} 
    </div>
  );
}

export default Profile;
