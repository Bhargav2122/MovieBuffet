import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (value == 0){ navigate('/') }
    if(value==1) {navigate('/Movies')}
    if (value==2){navigate('/SearchPage')}
  }
  return (
    <Box sx={{ width: '100%',position: 'fixed',bottom:0,zIndex:1000, }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        sx = {{ backgroundColor: '#000', }}
      >
        <BottomNavigationAction label="Trending"
          sx={{ 
           '& .MuiSvgIcon-root': {
              color: 'red', 
              fontSize:'1.85rem' // Default icon color
            }, 
            '& .MuiBottomNavigationAction-label': {
            color: 'white', 
            fontSize:'1rem', 
            },
        
        }} icon={<WhatshotSharpIcon />} />

        <BottomNavigationAction label="Movies" 
        sx={{ 
            '& .MuiSvgIcon-root': {
              color: 'red',
              fontSize:'1.75rem' // Default icon color
            }, 
            '& .MuiBottomNavigationAction-label': {
          color: 'white',  
          fontSize:'1rem',
        },
          
         }}  icon={<LocalMoviesIcon />} />
        <BottomNavigationAction label="Search" 
          sx={{ 
            '& .MuiSvgIcon-root': {
              color: 'red',
              fontSize:'1.75rem'  // Default icon color
            }, 
            '& .MuiBottomNavigationAction-label': {
          color: 'white', 
          fontSize:'1rem',
        },
           
         }}    icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}