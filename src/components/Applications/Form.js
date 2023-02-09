import React from 'react'
import Star from './Star'


const Form = () => {
    const [starWarsData, setStarWarsData]= React.useState({})
    const [count, setCount] = React.useState(1)
    const [contact,setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "0755351746",
        email:"andreealuca103@yahoo.com",
        isFavorite: false
    })

    React.useEffect(function() {
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res=> res.json()) //returneaza raspunsul json
        .then(data => setStarWarsData(data)) //actualizeaza state-ul
    }, [count])
    
    function nextCharacter(){
        setCount(prevCharacter=>prevCharacter+1)
    }


    //let starIcon=contact.isFavorite ? "star-full.webp" : "star-empty.webp"
    function toggleFavorite(){ 
        setContact(prevContact =>({
                ...prevContact,      //tot ce este in return va inlocui hook-ul din useState cu noua valoare returnata. de aceea este nevoie sa returnez si tot ce era inainte
                isFavorite: !prevContact.isFavorite
        }))            
    }
  return (
    <div>
        <div className='card'>
            <img src="" className='card--image' />
            <div className='card--info'>
                <Star 
                    isFilled={contact.isFavorite}
                    handleClick={toggleFavorite}
                />

                <h2 className='card--name'>
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className='card--contact'>{contact.phone}</p>
                <p className='card--contact'>{contact.email}</p>
            </div>

        </div>
        <div>
            <h2>The count is {count}</h2>
            <br/> <br/> <br/>
            <button onClick={nextCharacter}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    </div>
  )
}

export default Form