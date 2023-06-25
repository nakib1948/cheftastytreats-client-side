import React, { useContext } from 'react';
import { AuthContext } from './src/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    let location = useLocation();
    if(loading)
    return <progress className="progress w-56" value={0} max="100"></progress>
    if(user?.email)
      return children
    return (
      <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;