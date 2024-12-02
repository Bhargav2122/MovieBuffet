import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SimpleBottomNavigation from './components/SimpleBottomNavigation'

function App() {
  
  return (
    <>
        <Header />
        <div className='app'>hell0</div>   
        <SimpleBottomNavigation />   
    </>
  )
}

export default App
