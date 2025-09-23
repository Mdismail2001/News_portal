import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Pages/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    // console.log(location);

    // for loading check
    if(loading){
        return <Loading></Loading>
    }

    // for user validation
    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRoute;