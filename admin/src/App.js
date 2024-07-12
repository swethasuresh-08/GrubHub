import React from 'react'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
   const url="http://localhost:5000"
  return (
    <div>
      <ToastContainer/>
      <NavBar/>
      <hr/>
      <div className='app-content'>
        <SideBar/>
        <Routes>
           <Route path='/add' element={<Add url={url}/>}/>
           <Route path='/list' element={<List url={url}/>}/>
           <Route path='/order' element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App