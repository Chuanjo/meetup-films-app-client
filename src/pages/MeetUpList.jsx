import MeetUp from "../components/MeetUp";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { meetUpListService } from "../services/meetUpList.services";

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
      <h1>AddMeetUp Component</h1>
      <MeetUp />

      <h1>MeetUpList</h1>

      {allMeetups.map((eachMeetup) => {
        return (
          <div>
            <p>{eachMeetup.title}</p>
          </div>
        );
      })}

      <h1>All Meet up List</h1>
    </div>
  );
}

export default MeetUpList;
