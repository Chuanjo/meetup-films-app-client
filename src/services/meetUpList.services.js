import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/user`
})


// const meetUpListService = () => {
//   return service.post("/")
// }

const meetupService = () => {
  return service.post("/meetUpList")
}




export {
  // meetUpListService,
  meetupService,
  
}