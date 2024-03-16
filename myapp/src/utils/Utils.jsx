import React from 'react'
import {Route,Router,Routes} from 'react-router-dom'
import FetchingAllData from '../pages/FetchingAllData'
import Login from '../pages/Login'
import Details from '../pages/Details'


const Utils = () => {
  return (
    <Router>
        <Routes>
            <Route path='/FetchingAllData' element={<FetchingAllData/>} />
            <Route path='/' element={<Login/>} />
            <Route path='/Details' element={<Details/>} />
        </Routes>
    </Router>
  )
}

export default Utils