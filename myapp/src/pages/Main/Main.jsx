import React from 'react';
import CreatingPost from '../../components/CreatingPost/CreatingPost/CreatingPost'
import FetchingAllData from '../FetchingAllData/FetchingAllData'
import './main.css'

const Main = () => {
  return (
    <div className='main'>
        <CreatingPost/>
        <FetchingAllData/>
    </div>
  )
}

export default Main