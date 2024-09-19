import React from 'react'
import MainMenu from './Screen/MainMenu'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import About from './Screen/About'
import Iphone from './components/Iphone'
import MyWork from './Screen/MyWork'
import ContactMe from './Screen/ContactMe'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
          <Route path='/' element={<MainMenu/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Mywork' element={<MyWork/>}/>
          <Route path='/ContactMe' element={<ContactMe/>}/>
      </Routes>
    </div>
  )
}

export default App
