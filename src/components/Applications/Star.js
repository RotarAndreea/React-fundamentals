import React from 'react'

const Star = (props) => {
    const starIcon=props.isFilled ? "star-full.webp" : "star-empty.webp"
  return (
    <img
        src={require(`../../images/${starIcon}`)}      
        className="card--favorite"    
        onClick={props.handleClick}          
    />
  )
}

export default Star