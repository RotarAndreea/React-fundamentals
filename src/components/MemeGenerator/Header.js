import React from 'react'
import "./style.css"
import img from "../../images/troll-face.png"

const Header = () => {
  return (
    <div className='headerContainer'>
            <img className='troll-image' src={img} />
            <div className='logo'>Let's Create Some Memes</div>
          <div className='col2-header'>Meme Generator</div>
    </div>
  )
}

export default Header