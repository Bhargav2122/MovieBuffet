import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard/SingleCard';
import CustomPagination from './SingleCard/pagination/CustomPagination';
import Select from '../SelectType/Select';

const Movies = () => {
  const API_KEY = '2232d9f6e3741c3a2aaacfea231de3e6';
  const [page, setPage] = useState(1)
  const [movieCard, setMovieCard] = useState([])
  const [genre, setGenre] = useState([])

  const getMovies = () =>{
    const genreParam = genre ? `&with_genres=${genre}`:'';

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}${genreParam}`)
    .then((res) => res.json())
    .then((data) => {
      setMovieCard(data.results)
      console.log(data.results);
      
      })
  }
 
 useEffect(() => {
    getMovies()
 },[page,genre])

  return (
    <>
      <div className='pagetitle'>Movies</div>
      <div style={{ display:'flex', justifyContent:'center', marginTop:'20px'  }}>
      <label style={{ fontSize:'1.3rem', marginRight:'10px' }}>Movie Type</label>
      <Select setGenre={setGenre}  />
      </div>
     
      <div className='container'>
           {movieCard.map((card) => 
             <SingleCard key={card.id} 
             id={card.id} 
             picture={card.poster_path}
             title={card.title || card.name}
             date={card.first_air_date || card.release_date}
             mediatype= 'movie'
             vote={card.vote_average} 
             overview={card.overview} />
           )}
        </div>
        <CustomPagination totalPages={500} setPage={setPage} />
         
    </>
    
  )
}

export default Movies
