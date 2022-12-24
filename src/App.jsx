import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'//
import {Contenedor} from './componentes/Contenedor/Contenedor'
import NavBar from './componentes/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
    <NavBar/>
    <Contenedor/>
    </>
  )
}

export default App
