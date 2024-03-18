import React,{useState} from 'react'
import FetchingAllData from '../FetchingAllData/FetchingAllData'
import CreatingPost from '../../components/CreatingPost/CreatingPost/CreatingPost'
import Login from '../LoginPage/Login';
import './Layout.css'
import Main from '../Main/Main';

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };
  return (
    <div className='mainDiv'>
    {isLoggedIn ?(
      <div className='dataDiv'>
        <Main/>
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