import React from 'react'
import "./style.css"


const Main = (props) => {

  const style1={
    backgroundColor: props.mode ? 'transparent' : '#222222',
    color: props.mode ? 'black' : 'white'
}
 

  return (
    <div className='containerInfo'  style={style1}>
        <h1>Fun facts about React</h1>
        <ul >
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintined by Facebook</li>
        </ul>
    </div>
  )
}

export default Main