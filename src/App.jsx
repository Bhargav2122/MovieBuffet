import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SimpleBottomNavigation from './components/SimpleBottomNavigation'
import CircularProgress from '@mui/material/CircularProgress';
const Trending = lazy(() => import('./components/pages/Trending'))
const Movies = lazy(() => import('./components/pages/Movies'))
const SearchPage = lazy(() => import('./components/pages/SearchPage'))



function App() {
  

  return (
     <BrowserRouter>
        <Header />
        <div className='app'>
           <Suspense fallback={<CircularProgress style={{ color: 'red', marginTop: '200px' }} />}>
           <Routes>
            <Route path='/' element = {<Trending />} />
            <Route path='/Movies' element = {<Movies />} />
            <Route path='/SearchPage' element = {<SearchPage />} />
           </Routes>
          </Suspense>
          <SimpleBottomNavigation /> 
        </div>   
     </BrowserRouter>
         
    
  )
}

export default App
