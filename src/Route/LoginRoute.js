import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';

const LoginRoute = ({children}) => {
    const {  authUser, loading} = useContext(AuthContext);

    const location = useLocation();

    if(authUser === null){
        return children;
        
    }
    else if(authUser._id && authUser.userName){
        return <Navigate to='/account' state={{from:location}} replace ></Navigate>

    }
 
   

  
   
}

export default LoginRoute;