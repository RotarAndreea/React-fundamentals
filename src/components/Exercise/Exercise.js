import React from 'react'
import boxesDatas from '../Home/Datas/boxesDatas'
import "./style.css"
import Box from './Box'

const Exercise = (props) => {
const[boxData,setBoxData]=React.useState(boxesDatas);
const [isShown, setIsShown]=React.useState(false);
const [messages,setMessages] = React.useState(["a","b"]);
const [formData, setFormData]=React.useState(
      {
        firstName:"", 
        lastName:"", 
        email:"", 
        comment:"",
        isFriendly:true,
        employment: "",
        favColor:""
    
    });


const datas=boxData.map(data=>(
    <Box 
        key={data.id}
        id={data.id}
        on={data.on} 
        handleClick={toggle} 
    />
))

function toggle(id){ //cu id voi vedea ce cutie va fi apasata
  setBoxData(prevSquares =>{
    return prevSquares.map((square) =>{
       return square.id === id ? {...square, on:!square.on} : square
    })
  })
}

function toggleParagraph(){
  setIsShown(prevButton=>!prevButton)
}


function handleChange(event){
  const {name,value, type, checked}=event.target
  setFormData(prevFormData=>{
    return {
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value  //event.target.name:event.target.checked : event.target.value ; daca e text pun in setUseState valoarea(textul); altfel pun checked(true sau false)
    }
  })
}

  return (
    <>
      <div>
        {datas}
      </div>
      <>
            {props.setup && <h3>{props.setup}</h3>} 
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleParagraph}>{isShown ? "Hide" : "Show"} Text</button>
            <hr />
      </>
      <>
            {
              !messages.length ? 
              <h1>You're all caught up!</h1> :
              <h1>You have {messages.length} unread {messages.length>1 ? "messages" : "message"}!</h1>}
      </>


      <>
        <form>
          <input
              type="text"
              placeholder='First Name'
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
          />
          <input
              type="text"
              placeholder='Last Name'
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
          />
          <input
              type="email"
              placeholder='Email'
              onChange={handleChange}
              name="email"
              value={formData.email}

          />

          <textarea placeholder='Comment'
                    onChange={handleChange}
                    name="comment"
                    value={formData.comment}
          />
          <br/>

          <input 
              type="checkbox" 
              id="isFriendly"
              checked={formData.isFriendly}  
              onChange={handleChange} 
              name="isFriendly"  //trebuie sa fie acelasi ca in useState 
          />
          <label htmlFor='isFriendly'>Are you friendly?</label>
          <br />

          <fieldset>
              <legend>Current employement status</legend>
              <input 
                  type="radio"
                  id="unemployed"
                  name='employment' //trebuie sa aiba acelasi nume toate butoanele pt a nu putea bifa m multe variante
                  value="unemployed"
                  checked={formData.employment === "unemployed"} //va fi bifat numai daca se respecta condtitia true, adica cele 2 sa fie egale. radiobutton echibalent cu chechbox cand vine vorba de bifat(true si false)
                  onChange={handleChange}
              />
              <label htmlFor="unemployed">Unemployed</label>
              <br/>
              <input 
                  type="radio"
                  id="part-time"
                  name='employment'
                  value="part-time"
                  checked={formData.employment === "part-time"}
                  onChange={handleChange}

              />
              <label htmlFor="part-time">Part-time</label>
              <br/>
              <input 
                  type="radio"
                  id="full-time"
                  name='employment'
                  value="full-time"
                  checked={formData.employment === "full-time"}
                  onChange={handleChange}

              />
              <label htmlFor="full-time">Full-time</label>   

          </fieldset>  

          <br />
          <label htmlFor="favColor">What is your favorite color?</label> 
          <br/>
          <select id="favColor"
                  value={formData.favColor}
                  onChange={handleChange}
                  name="favColor"
          >
            <option value="">-- Choose --</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>
          <br/>
          <br/>

          <button>Submit</button>
        </form>
              
      </>

    </>
    
  )
}

export default Exercise

/*

function toggle(id){ //cu id voi vedea ce cutie va fi apasata
  setBoxData(prevSquare=> {
    const newSquare=[];
    for(let i=0; i<prevSquare.length; i++){
      const currentSquare= prevSquare[i];
      if(currentSquare.id===id){
        const updateSquare={
          ...currentSquare,
          on: !currentSquare.on
        }
        newSquare.push(updateSquare);
      }
      else{newSquare.push(currentSquare)}
      
    }
    return newSquare;
  } )
}

*/
