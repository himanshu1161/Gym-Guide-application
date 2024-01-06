import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@material-ui/core'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import './App.css'
import Footer from './Components/Footer'



const App = () => {
  return (
  
    
    <Box width='400px' sx={{width: {xl: '1488px'}}} m='auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element = {<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
      
    </Box>
    
    
    
  )
}

export default App
