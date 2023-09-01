import React from 'react'
import Background from './Background/'
import Settings from './Settings/'
import useGetImages from './hooks/useGetImages'



const MemoryGame = () => {
  const images = useGetImages()
  console.log(images)
  
  return (
    <div >
    <h1>Play MemoryGame</h1>
     <Background />
     <Settings />
    </div>
  )
}

export default MemoryGame