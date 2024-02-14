
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from '../../axios'
import './RowPost.css'
import { imageUrl } from '../../constants/constants'
import { API_KEY } from '../../constants/constants'
function RowPost({ title, isSmall, url }) {

  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState()
 
  useEffect(() => {
    axios.get(url).then(Response => {
      setMovies(Response.data.results)
    })
  },[urlId,url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) =>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response =>{
      console.log(Response.data)
      if(Response.data.results.length !== 0){
        setUrlId(Response.data.results[0])
      }else{
        console.log("Array is null")
      }
    })
  }
 
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='posters'>
        {movies &&
          movies.map((obj, index) => (
            <img onClick={()=>handleMovie(obj.id)} className={isSmall ? "small-poster" : "poster"} key={index} src={`${ imageUrl + obj.backdrop_path }`} alt='poster' />
          ))}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />
      }

    </div>
  );
}


export default RowPost