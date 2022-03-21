import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'


function Profile(props) {
  const { id } = useParams()
  const hola = 'hola';

  return (
    <div>

    <h1>Profile</h1>
    <button>Edit</button>
    <h3>Event create List</h3>
    <h3>Event Assist List</h3>



    </div>
  )
}

export default Profile