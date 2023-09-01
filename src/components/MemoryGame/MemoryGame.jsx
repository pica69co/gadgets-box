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
     <p>Under Construction...</p>
    <img src="https://cdn.pixabay.com/photo/2016/03/26/09/42/road-sign-1280257_960_720.jpg" alt="icon"  />
    </div>
  )
}

export default MemoryGame