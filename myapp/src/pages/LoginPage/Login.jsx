import React, { useState } from 'react';
import './Login.css'


const Login = ({isAuth}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://169.155.57.78/v1/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      const { accessToken } = await response.json();

      localStorage.setItem('accessToken', accessToken);
      isAuth(true)
    } catch (error) {
      setError('Authentication failed. Please check your credentials.');
    }
  };

  return (
    <div className='main'>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form className='input-form' onSubmit={handleSubmit} >
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
