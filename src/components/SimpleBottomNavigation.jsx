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

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: '100%',position: 'fixed',bottom:0,zIndex:1000, }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx = {{ backgroundColor: '#1976d2', }}
      >
        <BottomNavigationAction label="Trending"
          sx={{ 
            color:'white', 
            '& .MuiBottomNavigationAction-label': {
            color: 'white',  
            },
         '&.Mui-selected': {
            color: 'white', 
          },
        
        }} icon={<WhatshotSharpIcon />} />

        <BottomNavigationAction label="Movies" 
        sx={{ 
            color:'white', 
            '& .MuiBottomNavigationAction-label': {
          color: 'white',  
        },
          '&.Mui-selected': {
            color: 'white', 
          },
         }}  icon={<LocalMoviesIcon />} />
        <BottomNavigationAction label="Search" 
          sx={{ 
            color:'white', 
            '& .MuiBottomNavigationAction-label': {
          color: 'white', },
           '&.Mui-selected': {
            color: 'white',
          },
         }}    icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}