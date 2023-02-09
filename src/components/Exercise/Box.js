import React from 'react'

const Box = (props) => {

  const styles={
    backgroundColor: props.on ? '#222222' : 'transparent'
}

  return (
    <div onClick={()=>props.handleClick(props.id)} //am creat o functie care apeleaza functia noastra pentru a putea folosi parametrul id care ne ajuta la identificarea cutiilor apasate
         style={styles} className='box'>
        
    </div>
  )
}

export default Box