import MeetUp from "../components/MeetUp";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { meetUpListService } from "../services/meetUpList.services";
import * as React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function MeetUpList() {
  // 1. crear estado que controle la informacion
  const [allMeetups, setAllMeetups] = useState(null);

  const navigate = useNavigate();

  // 2. el useEffect para buscar la informacion componentDidMount
  useEffect(() => {
    getAllMeetups();
  }, []);

  // 3. la funcion async que haga la llamada a la API y actualice el estado
  const getAllMeetups = async () => {
    try {
      const response = await meetUpListService();
      setAllMeetups(response.data);
    } catch (err) {
      if (err.response.status === 401) {
        navigate("/meet-up-list");
      } else {
        navigate("/error");
      }
    }
  };

  if (!allMeetups) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      {/* Component */}
      <MeetUp />

      <h1>MeetUpList</h1>

      {allMeetups.map((eachMeetup) => {
        return (
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              alignItems: "center",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="" />
              </ListItemAvatar>
              <ListItemText
                primary={eachMeetup.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {eachMeetup.city}: 
                    </Typography>
                    {`  ${eachMeetup.description}`}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        );
      })}

      {allMeetups.map((eachMeetup) => {
        return (
          <div>
            <p>{eachMeetup._id}</p>
            {/* <p>{eachMeetup.user.username}</p> */}
          </div>
        );
      })}
    </div>
  );
}

export default MeetUpList;
