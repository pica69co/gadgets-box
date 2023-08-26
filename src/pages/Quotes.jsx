import React, { useEffect, useState } from 'react'
import xIcon from '../assets/images/twitter-x-icon.png'

const Quotes = () => {
  
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    const api_url = 'https://api.quotable.io/random'

    const fetchQuotes = async () => {
        const response = await fetch(api_url)
        const data = await response.json()
        setQuote(data.content)
        setAuthor(data.author)

        console.log(data)
    }
    
    useEffect(() => {
       fetchQuotes()
           
     }, [])
   
    const handlerQuote = () => {
    fetchQuotes()
   }
   const handleClickTweet = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote} --- by ${author}`, "Tweet Window", "width=800, height=500")
   }
  
   return (
    <div className='quote-box'>
      <h2>Quote of the day</h2>
      <blockquote>{quote}</blockquote>
      <span>{author}</span>
      <div>
        <button
        onClick={handlerQuote}
        >New Quote</button>
        <button
         onClick={handleClickTweet}
        > 
            <img src={xIcon} alt="tweeter-icon" />
            Tweet</button>
      </div>
    </div>
  )
}

export default Quotes