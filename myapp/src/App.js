// App.js
import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout'
import Utils from './utils/Utils';
import Login from './pages/LoginPage/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout isLoggedIn={isLoggedIn} handleLogin={handleLogin} />} />
          <Route path="/*" element={<Utils />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
  );
}

export default App;
