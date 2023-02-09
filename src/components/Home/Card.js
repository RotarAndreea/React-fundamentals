import React from 'react'
import "./style.css" 

const Card = (props) => {
    let badgeText
    if (props.data.number === '1') {  
        badgeText="Number 1"
    } else if (props.data.number === '3' )
        badgeText="Number 3"
  return (
    <div className='card'>
        {props.data.number === '2' && <div className='card--badge'>SOLD OUT</div>}
        {badgeText && <div className="card--badge"> {badgeText} </div>}
        <img src={`../../images/${props.data.image}`} alt="card" className='card--image'/>
        <div className='card--stats'>
            {props.data.rate && <span>{props.data.rate}</span>}
            <span className='gray'>({props.data.number}) </span>
            <span className='gray'>{props.data.state}</span>
        </div>
        <p>Life Lesson with Katie Zaferes</p>
        <p>From $136 / person</p>
    </div>
  )
}

export default Card

//{props.rate && <span>{props.rate}</span>} daca props.rate nu are valoare,atunci nu se afiseaza span-ul
//{props.number == 2 && <div className='card--badge'>SOLD OUT</div>} daca props.number egal cu 2, atunci se afiseaza divul care urmeaza dupa &&
//<h3 style={{display: props.setup ? "block" : "none"}}> HI </h3>
// <img src={`../images/${props.img}`} /> minutul3:44:00