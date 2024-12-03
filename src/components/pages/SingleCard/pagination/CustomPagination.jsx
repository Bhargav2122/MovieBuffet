import React from 'react'
import Pagination from '@mui/material/Pagination';



const CustomPagination = ({ setPage , totalPages = 20}) => {
   const handleChange = (page) => {
       setPage(page);
       window.scroll(0,0)
   }

  return (
    <div style={{paddingBottom:'70px', width:'100%', display:'flex', justifyContent:'center'}}>
       
        <Pagination 
        count={totalPages} 
        variant='outlined' 
        shape='rounded' 
        onChange={(e) => handleChange(e.target.textContent)}
        hidePrevButton
        hideNextButton
        />
        
        
    </div>
  )
}

export default CustomPagination