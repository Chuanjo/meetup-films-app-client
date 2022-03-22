import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/user`
})


const userProfileService = (id) => {
  return service.post("/:id", id)
}

const userProfileEditService = (id) => {
  return service.post("/:id/edit", id)
}




export {
  userProfileService,
  userProfileEditService,
  
}