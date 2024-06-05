import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import Dashboard from '../Components/Dashboard'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default AllRoutes