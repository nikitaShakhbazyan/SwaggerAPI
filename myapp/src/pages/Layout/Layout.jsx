import React,{useState} from 'react'
import FetchingAllData from '../FetchingAllData/FetchingAllData'
import CreatingPost from '../../components/CreatingPost/CreatingPost'
import Login from '../LoginPage/Login';
import './Layout.css'

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };
  return (
    <div className='mainDiv'>
    {isLoggedIn ?(
      <div className='dataDiv'>
        <div className='creatingPostDiv'>
        <CreatingPost/> 
        </div>
        <div className="fetchingDataDiv">
        <FetchingAllData/> 
        </div>
    </div>) :(
      <div className='authDiv'>
      <Login isAuth={handleLogin}/>
      </div>
    )
  }
    </div>
  )
}

export default Layout