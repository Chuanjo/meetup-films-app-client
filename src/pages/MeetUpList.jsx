import React, { useEffect, useState } from 'react'

function MeetUpList(props) {
 
  const[allComments, setAllComments] = useState([]);
  const { id } =props.params
  
  useEffect (() => {

  }, [])


  return (
    <div>

    <h1>MeetUpList</h1>
    
   
    <h1>AddMeetUp Component</h1>
    <h1>All Meet up List</h1>


    </div>
  )
}

export default MeetUpList