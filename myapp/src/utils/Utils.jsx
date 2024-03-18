import React from 'react'
import {Route,Routes} from 'react-router-dom'
import FetchingAllData from '../pages/FetchingAllData/FetchingAllData'
import Login from '../pages/LoginPage/Login'
import NotFound from '../pages/NotFound'
import Details from '../pages/Details/Details'
import './Utils.css'

const Utils = () => {
  return (
        <Routes>
            <Route path='/FetchingAllData' element={<FetchingAllData/>} />
            <Route path='/' element={<Login/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/details/:taskId' element={<Details/>} />
        </Routes>
  )
}

export default Utils