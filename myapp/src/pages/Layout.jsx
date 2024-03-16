import React,{useState} from 'react'
import FetchingAllData from './FetchingAllData'
import CreatingPost from '../components/CreatingPost'
import Login from '../pages/LoginPage/Login';
import '../styles/Layout.css'

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };
  return (
    <div className='mainDiv'>
    {isLoggedIn ?(
      <div>
    <CreatingPost/> 
    <FetchingAllData/> 
    </div>) :(
      <Login isAuth={handleLogin}/>
    )
  }
    </div>
  )
}

export default Layout