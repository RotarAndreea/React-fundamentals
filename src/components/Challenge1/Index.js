import React from 'react'
import Main from './Main'
import Navbar from './Navbar'

const Index = () => {
  const [isLight, setIsLight]=React.useState(true)
    function toggle(){
        setIsLight(prevValue=>!prevValue)
    }
  
  return (
    <div>
        <Navbar handleToggle={toggle} mode={isLight}/>
        <Main mode={isLight}/>
    </div>
  )
}

export default Index