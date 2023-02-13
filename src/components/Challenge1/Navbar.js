import React from 'react'
import "./style.css"

const Navbar = (props) => {

  return (

    <div className={props.mode ? "" : "dark-theme"}  >
      <div className='container'>
        <h3 className='title'>React Facts</h3>
        <div  className='toggler'>
            <p className='toggler--light' >Light</p>
            <div onClick={props.handleToggle} className='toggler--slider'>
                <div  className='toggler--slider--circle'></div>
            </div>
            <p className='toggler--dark'>Dark</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar