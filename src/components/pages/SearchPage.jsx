import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard/SingleCard'
import CustomPagination from './SingleCard/pagination/CustomPagination'

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [type, setType] = useState('movie');
  const [totalPages, setTotalPages] = useState(0); // Added state for total pages
  const API_KEY = '2232d9f6e3741c3a2aaacfea231de3e6';

  const fetchSearch = async () => {
    if (!searchText.trim()) return; // Avoid API call for empty input

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
          searchText
        )}&page=${page}&include_adult=false`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setContent(data.results || []);
      setTotalPages(data.total_pages || 0); // Update total pages
    } catch (error) {
      console.error('Error fetching search results:', error);
      setContent([]); // Reset content on error
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on type or page change
    if (searchText) {
      fetchSearch();
    }
  }, [type, page]); // Dependencies for re-fetching

  return (
    <>
      <div className="pagetitle">Search Movies</div>
      <div className="searchContainer">
        <TextField
          style={{ flex: '1' }}
          className="searchbox"
          label="Search"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') fetchSearch(); // Fetch on Enter key press
          }}
        />
      </div>
      <div className="container">
        {content.length > 0 ? (
          content.map((card) => (
            <SingleCard
              key={card.id}
              id={card.id}
              picture={card.poster_path}
              title={card.title || card.name}
              date={card.first_air_date || card.release_date}
              mediatype="movie"
              vote={card.vote_average}
              overview={card.overview}
            />
          ))
        ) : (
          searchText && <p>No movies found</p> // Message when no results
        )}
      </div>
      {totalPages > 1 && (
        <div className="paginationContainer">
          <CustomPagination totalPages={totalPages} setPage={setPage} />
        </div>
      )}
       
    
    </>
  );
};

export default SearchPage;