import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import xIcon from "../assets/images/twitter-x-icon.png";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [copied, setCopied] = useState("");
  const api_url = "https://api.quotable.io/random";

  const fetchQuotes = async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);

    console.log(data);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handlerQuote = () => {
    fetchQuotes();
  };

  const handleClickTweet = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote} --- by ${author}`,
      "Tweet Window",
      "width=800, height=500"
    );
  };

  const handlerSound = () => {
    const utterance = new SpeechSynthesisUtterance(`${quote},  ${author}`);
    const voices = speechSynthesis?.getVoices();

    utterance.voice = voices[3] || voices[2];

    let voiceName = utterance.voice?.name;
    console.log("voz", voiceName);
    //   // utterance.rate = 0.9
    speechSynthesis.speak(utterance);
  };

  const handlerCopy = (e) => {
    e.preventDefault();
    setCopied(`${quote} -- ${author}`);

    navigator.clipboard.writeText(`${quote} -- ${author}`);

    setTimeout(() => setCopied(false), 5000);
  };
  // console.log("copy:", copied);
  return (
    <motion.div
      className="quote-box"
      initial={{ width: 0 }}
      animate={{ width: "60%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h2>Quote of the day</h2>
      <blockquote>{quote}</blockquote>
      <span>{author}</span>
      <div>
        <button onClick={handlerQuote}>
          {quote ? "New Quote" : "Loading..."}
        </button>
        <button onClick={handleClickTweet}>
          <img src={xIcon} alt="tweeter-icon" />
          Tweet
        </button>
        <button onClick={handlerCopy} className="copy">
          {" "}
          <i
            className={
              copied === `${quote} -- ${author}`
                ? "fa-solid fa-check-double copy"
                : "fas fa-copy"
            }
          ></i>
        </button>
        <button onClick={handlerSound} className="sound">
          <i className="fas fa-volume-up sound"></i>
        </button>
      </div>
    </motion.div>
  );
};

export default Quotes;
