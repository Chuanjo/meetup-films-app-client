import React, { useEffect, useState } from 'react'

function MeetupList(props) {
    const [theList, setTheList] = useState("")
    
    useEffect(()=>{
        setTheList(props.meetUpList)
        console.log(props)
    },[props])
    
    
    if (!theList){
        return <h3>Esperando</h3>
    }
    
    console.log(theList)

  return (
    <div>
        <p>buy</p>
    </div>
  )
}

export default MeetupList