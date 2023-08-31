import React from 'react'
import './TicTac.css'

const Cell = ({ id, cell, setCells, cells, go, setGo, winMsg }) => {
  const handleClick = (e) => {
    const taken = e.target.firstChild.classList.contains('circle') || 
        e.target.firstChild.classList.contains('cross')
    
    if(!taken) {
        if(go === 'circle') {
            e.target.firstChild.classList.add('circle')
            handleChange('circle')
            setGo('cross')
        }
        if(go === 'cross') {
            e.target.firstChild.classList.add('cross')
            handleChange('cross')
            setGo('circle')
        }
    }
  }

  const handleChange = (className) => {
    const nextCells = cells.map((cell, index) => {
        if(index === id) {
            return className
        }else {
            return cell
        }
    })
    setCells(nextCells)
  }

  return (
    <div 
      className='square' 
      id={id}
      onClick={!winMsg && handleClick}
      >
        <div className={cell}></div>
    </div>
  )
}

export default Cell