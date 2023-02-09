import React from 'react'
import CoursesCard from './CoursesCard'
import courses from "./Datas/coursesDatas"

const Middle3 = () => {
    const coursesElements=courses.map(items =>{
        return <CoursesCard
            key={items.id}
            items={items}

        />
    })
  return (
    <>
        <div className='courses--line'>
            {coursesElements}
        </div>
    </>
   
  )
}

export default Middle3