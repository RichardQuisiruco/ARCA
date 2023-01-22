import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
//import './App.css'//
import { Contenedor } from './componentes/Contenedor/Contenedor'
import ItemDetailContainer from './componentes/Contenedor/itemDetailContainer/itemDetailContainer'
import CardContainer from './componentes/Contenedor/CardContainer/CardContainer'
import NavBar from './componentes/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap'
function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Contenedor saludo={'Aun no estamos listos...'} />} />
        <Route path='/categoria/:categoryId' element={<Contenedor saludo={'Aun no estamos listos...'} />} />
        <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
        <Route path='/card' element={<CardContainer />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
