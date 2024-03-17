import React from 'react'
import {Route,Router,Routes} from 'react-router-dom'
import FetchingAllData from '../pages/FetchingAllData'
import Login from '../pages/LoginPage/Login'
import NotFound from '../pages/NotFound'


const Utils = () => {
  return (
    <Router>
        <Routes>
            <Route path='/FetchingAllData' element={<FetchingAllData/>} />
            <Route path='/' element={<Login/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </Router>
  )
}

export default Utils