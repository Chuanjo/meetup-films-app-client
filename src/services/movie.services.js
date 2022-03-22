import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/todos`
})

// esta configuracion nos permite enviar el Token en cada request que se haga
service.interceptors.request.use((config) => {
  // aqui buscamos el token en localstorage
  const storedToken = localStorage.getItem("authToken")
  // si el toke existe lo agregamos a los headers del request
  config.headers = storedToken && { Authorization: `Bearer ${storedToken}` }
  // el condicional abajo hace lo mismo que arriba
  // if (storedToken) {
  //   config.headers = { Authorization: `Bearer ${storedToken}` }
  // }
  return config;
})

const getAllTodosService = () => {
  return service.get("/")
}

const addNewTodoService = (newTodo) => {
  return service.post("/", newTodo)
}

const getTodoDetailsService = (id) => {
  return service.get(`/${id}`)
}

const deleteTodoService = (id) => {
  return service.delete(`/${id}`)
}

const updateTodoService = (id, updatedTodo) => {
  return service.patch(`/${id}`, updatedTodo)
}

export {
  getAllTodosService,
  addNewTodoService,
  getTodoDetailsService,
  deleteTodoService,
  updateTodoService
} 