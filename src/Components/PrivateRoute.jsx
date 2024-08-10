import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// PrivateRoute component to protect routes
function PrivateRoute({ element }) {
    const isAuthenticated = useSelector((state) => state.resultFlag.value);

    return isAuthenticated ? element : <Navigate to="/login" />;
}

export default PrivateRoute;
