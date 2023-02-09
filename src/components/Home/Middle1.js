import React from 'react'
import Card from "./Card"
import cardDatas from "./Datas/cardDatas"

const Middle1 = () => {
  const cardElements = cardDatas.map(data=>{
    return <Card
                  key={data.id}
                  data={data} 
                />
  })
  return ( 
    <>
            
            <div className='cards-list'>
                {cardElements}
            </div>
    </>
  )
}

export default Middle1

/*

const Middle1 = () => {
  const cardElements = cardDatas.map(data=>{
    return <Card
                  key={data.id}
                  img={data.image}
                  rate={data.rate}
                  number={data.number}
                  state={data.state}
                />
  })
  return (
    <>
            
            <div className='cards-list'>
                {cardElements}
            </div>
    </>
  )
}

*/

/*

const Middle1 = () => {
  const cardElements = cardDatas.map(data=>{
    return <Card
                  key={data.id}
                  {...data} //props.number
                />
  })
  return (
    <>
            
            <div className='cards-list'>
                {cardElements}
            </div>
    </>
  )
}

*/