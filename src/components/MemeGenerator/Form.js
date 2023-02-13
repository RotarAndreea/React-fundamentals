import React from 'react'
import Count from './Count';

const Form = () => {
    const [counter, setCounter] = React.useState(0);
    const [isGoingOut, setIsGoingOut]= React.useState("true")
    const [thingsArray, setThingsArray]=React.useState(["Thing 1", "Thing 2"]);
    const [meme, setMeme]=React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMeme, setAllMeme]=React.useState([])


    function decrease(){
        setCounter(oldValue => oldValue -1); 
    }
    function increase(){
        setCounter(function(oldValue){
            return oldValue+1;
        });
    }

    
    function handleChange(event){
        setMeme(prevText => ({
            ...prevText,
            [event.target.name] : event.target.value
        }))
    }
    function flip(){
        setIsGoingOut(prevValue => !prevValue)
    }

    function getMemeImage(){
        const randomNumber= Math.floor(Math.random() * allMeme.length)
        const url=allMeme[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage: url 
        }))
    }

    function addItem(){
        setThingsArray(prevThingsArray =>
             [...prevThingsArray, ` Thing ${prevThingsArray.length+1}`] )
    }

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(datas=> setAllMeme(datas.data.memes))
    }, [])

  return (
    <>
        <div className='main'>
        <div className='meme-form'>
            <input
                className='form-input' 
                type="text"
                placeholder='Text Header'
                value={meme.topText}
                onChange={handleChange}
                name="topText"
            />
            <input 
                className='form-input' 
                type="text"
                placeholder='text Bottom'
                value={meme.bottomText}
                onChange={handleChange}
                name="bottomText"
            />
            <button
                className='form-button'
                onClick={getMemeImage}>Get a new meme image</button>
        </div>

        <div className='meme'>
            {meme.randomImage && <img src={meme.randomImage}
                            alt='memeImage' 
                            className='meme--image'/>}
            <h2 className='meme--text top'>{meme.topText}</h2>
            <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        </div>


        

        <div>
            <button onClick={decrease}>-</button>
            <div>
                <Count number={counter}/>
            </div>
            <button onClick={increase}>+</button>
        </div>
        <div onClick={flip}>
            {isGoingOut ? "Yes": "No"}
        </div>
        <div>
            <button onClick={addItem}>Add item</button>
            {thingsArray}
        </div>

        </div>
    </>
  ) 
}

export default Form



    
/*
    const [things, setThings] =React.useState( ["Thing 1", "Thing 2"]);

    const thingsArrayDatas=things.map(data =>{
        return data;
    })

    function hoverImage(){
        const newThingText='Thing '+ (things.length + 1);
        setThings(prevState => [...prevState,newThingText])
    }
*/


/*

 let url;
 function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber= Math.floor(Math.random() * memesArray.length)
        url=memesArray[randomNumber].url;
        setMemeImage(url);  
    }

*/

/*
function getMemeImage(){
        const memesArray=allMeme.data.memes 
        const randomNumber= Math.floor(Math.random() * memesArray.length)
        const url=memesArray[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage: url 
        }))
    }

*/