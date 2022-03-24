import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/meetup`,
});

// Needed for checking Authorization
service.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem("authToken");
  config.headers = storedToken && { Authorization: `Bearer ${storedToken}` };

  return config;
});

const meetUpListService = () => {
  return service.get("/allMeetUp");
};

export const getMeetUpById = (id) =>{
  return service.get(`/getmeetupbyid/${id}`)
}

const meetUpListUserIdService = () =>{
  return service.get("/")
}

const meetUpFormService = (newMeetUp) => {
  return service.post("/newMeetUp", newMeetUp);
};

const meetUpEditService = (_id, updatedMeetUp) => {
  return service.patch(`/meetUpList/${_id}/edit`, updatedMeetUp);
};

const meetUpDeleteService = (_id) => {
  return service.post(`/meetUpList/${_id}/delete`);
};

export {
  meetUpListService,
  meetUpFormService,
  meetUpEditService,
  meetUpDeleteService,
  meetUpListUserIdService
};
