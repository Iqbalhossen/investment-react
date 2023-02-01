import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const UserPrivateRoute = ({children}) => {

    const location = useLocation();
    let userId = localStorage.getItem("ID");
    const user = JSON.parse(userId);

    if(user === null){
        return <Navigate to='/login' sate={{from:location}} replace ></Navigate>
        
    }else{
        if(user && user._id){
            return children;
        }else{
            <Navigate to='*' ></Navigate>
        }
    }

  
   
}

export default UserPrivateRoute;