import React from 'react'
import WindowTracker from './WindowTracker'

const Index = () => {
    const [show, setShow] = React.useState(true);

    function toggle() {
        setShow(prevValue=>!prevValue)
    }
  return (
    <div>
        <button onClick={toggle}>
            Toggle WindowTracker
        </button>
       {show && <WindowTracker /> }
    </div>
  )
}
export default Index
