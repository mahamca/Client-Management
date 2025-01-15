import React, { useState } from 'react'
import { BrowserRouter , Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import DashBoard from './Components/DashBoard'
import Wrapper from './Components/Wrapper'
import UpdateClient from './Components/UpdateClient'
import DarkMode from './Components/DarkMode'
import Test from './Components/Test'
import Avatar from './Components/Avatar'
import AddClient from './Components/AddClient'
import ClientView from './Components/ClientView'
import ViewallClients from './Components/ViewallClients'
import Navbar from './Components/Navbar'







const App = () => {
  
  return (
    <div>
      
        <Navbar></Navbar>
        
<Routes>
<Route path="/" element={<Home/>}/>
<Route path='/login/' element={<Login/>}/>
<Route path="/register/" element={<Register/>}/>
<Route path="/avatar/" element={<Avatar/>}/>
<Route path="/darkmode/" element={<DarkMode/>}/>
<Route path="/test" element={<Test/>}/>
<Route path="/clientview/:id" element={<ClientView/>}/>
<Route path='/addclient/' element={<AddClient/>}/>
<Route path='/allclients/' element={<ViewallClients/>}/>
<Route path='/dashboard/' element={
    
    <Wrapper>
    <DashBoard/>
    </Wrapper>
    
    }/>


<Route path='/update/:id' element={<UpdateClient/>}/>
</Routes>

</div>

  )
}

export default App