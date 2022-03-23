import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/meetup`
})
// Needed for check
service.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem("authToken")
  config.headers = storedToken && { Authorization: `Bearer ${storedToken}` }
 
  return config;
})


const meetUpListService = () => {
  return service.get("/allMeetUp")
}

const meetUpFormService = () => {
  return service.post("/newMeetUp")
}



export {
  meetUpListService,
  meetUpFormService,
  
}