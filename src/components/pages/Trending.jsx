import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard/SingleCard';
import CustomPagination from './SingleCard/pagination/CustomPagination';

const Trending = () => {
 
     const API_KEY = '2232d9f6e3741c3a2aaacfea231de3e6';
     
     const [cards, setCards]  = useState([])
     const [page, setPage] = useState(1)
      
     const getData =  () => {
         fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`)
         .then((res) => res.json())
         .then((data) => { 
            setCards(data.results)
            console.log(data.results)
     })
     }
     useEffect(() => {
         getData();
     },[page])

  return (
    <>
        <div className='pagetitle'>Trending</div>
        <div className='container'>
           {cards.map((card) => 
             <SingleCard key={card.id} 
             id={card.id} 
             picture={card.poster_path}
             title={card.title || card.name}
             date={card.first_air_date || card.release_date}
             mediatype={card.media_type}
             vote={card.vote_average} 
             overview={card.overview} />
           )}
        </div>
        <CustomPagination  setPage={setPage} />
    </>

  )
}

export default Trending