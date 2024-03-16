import React,{useState} from 'react'
import FetchingAllData from './FetchingAllData'
import CreatingPost from './CreatingPost'
import Login from './Login';

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };
  return (
    <div>
    {isLoggedIn ?(
      <div>
    <FetchingAllData/> 
    <CreatingPost/> 
    </div>) :(
      <Login isAuth={handleLogin}/>
    )
  }
    </div>
  )
}

export default Layout