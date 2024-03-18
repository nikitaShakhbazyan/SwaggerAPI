import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../LoginPage/Login';
import { isAuthenticated } from '../../utils/authUtils'; // Функция для проверки аутентификации пользователя

const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/" replace />;
};

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <PrivateRoute path="/main" element={<Main />} />
    </Routes>
  );
};

export default Layout;
