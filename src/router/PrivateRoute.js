import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../component/Spinner/Spinner';
import { AuthContext } from '../userContext/UserContext';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>
    }

    if (user){
        return children;
    }
    else{
        return <Navigate to="/join" state={{from: location}} replace></Navigate>;
    }
};

export default PrivateRoute;