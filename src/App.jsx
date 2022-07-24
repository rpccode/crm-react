import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Inicio from './pages/Inicio'
import NuevoCliente from './pages/NuevoCliente'
import VerCliente from './pages/VerCliente'




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
                <Route index  element={<Home/>} />
                <Route path='/clientes'  element={<Inicio/>} />
                <Route path='/clientes/nuevo'  element={<NuevoCliente/>} />
                <Route path='/clientes/:id' element={<VerCliente/>} />

          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
