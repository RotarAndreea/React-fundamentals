import React from 'react'
import "./style.css"

const CoursesCard = (props) => {
  return (
    <div className='courses--container'>
        <img src={`../../images/${props.items.image}`} className='course--image'/>
        <div className='course--title'>{props.items.courseName}</div>

    </div>
  ) 
}

export default CoursesCard