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