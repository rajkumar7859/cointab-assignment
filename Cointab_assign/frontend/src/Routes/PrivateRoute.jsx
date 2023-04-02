import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const accessToken = localStorage.getItem('userData');
  const isAuthenticated = accessToken && !accessToken.token;
  console.log("token", isAuthenticated );
  return (
    isAuthenticated ? children : <Navigate to="/register" />
  );
};

export default PrivateRoute;