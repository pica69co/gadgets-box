import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const STEP = 2;

const Counter = ({ cardsCount, onClick }) => {
    
    const decrement = (e) => {
        e.preventDefault()
        const number = cardsCount - STEP 
        if(number >= 2)  onClick(number) 
    }
    const increment = (e) => {
        e.preventDefault()
        const number = cardsCount + STEP 
        if(number <= 160)  onClick(number) 
    }
    
    return ( 
      <div className='quantity'>
        <button className="minus" onClick={decrement}>-</button>
        <span className="quantity">{cardsCount}</span>
        <button className="plus" onClick={increment}>+</button>
      </div>
    )
};

export default Counter;

Counter.prototypes = {
    cardsCount: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}