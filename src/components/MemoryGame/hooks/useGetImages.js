import { useEffect, useState } from 'react'

const BASE_URL = 'https://api.pexels.com/v1/search';
const getRandomPage = () => Math.round(Math.random()*(10-1)+1)

const useGetImages = () => {
    const [images, setImages] = useState([])
        
    const buildUrl = () => {
        let url = new URL(BASE_URL)
        
        url.search = new URLSearchParams({
          query: 'nature',
          orientation: 'square',
          size: 'small',
          per_page: 2,
          page: getRandomPage(),
        })
        return url;
      }
      const fetchPics = ()=>{

          fetch(buildUrl(), {
            headers: {
              Authorization: process.env.REACT_APP_AUTH_KEY,
            },
          }).then(data=>data.json())
          .then(data=>setImages(data.photos))

      }

      useEffect(()=>{
        fetchPics()
        
      },[])
      
    return images  
};

export default useGetImages;
