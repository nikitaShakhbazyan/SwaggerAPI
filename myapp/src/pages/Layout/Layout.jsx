import React,{useState} from 'react'
import Login from '../LoginPage/Login';
import Main from '../Main/Main';
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