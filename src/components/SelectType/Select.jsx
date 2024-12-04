import React, { useEffect, useState } from 'react'

const Select = ({ setGenre }) => {
   
   const [type, setType] = useState([]) 
  const getGenre = () => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=2232d9f6e3741c3a2aaacfea231de3e6")
    .then((res) => res.json())
    .then((data) => {
        setType(data.genres)
    }
    )
  } 
   
   useEffect(() => {
     getGenre()
   },[])
 

   const handleChange = (e) => {
     setGenre(e.target.value)
   }
  return (
    <>
     <select className='select' onChange={handleChange}>
      {type.map((t) => (
        <option key={t.id} value={t.id}>
          {t.name}
        </option>
      ))}
    </select>
    </>
  )
}

export default Select