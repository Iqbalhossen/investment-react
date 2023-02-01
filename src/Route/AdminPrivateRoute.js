import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminPrivateRoute = ({children}) => {

    let userId = localStorage.getItem("ID");

    const admin = JSON.parse(userId);
   

    if(admin !== null){
       
        
        if(admin && admin._id && admin.role === "admin"){
            return children;
        }
        else{
            return <Navigate to='*' ></Navigate>
        }
    }

    return <Navigate to='*' ></Navigate>
  
   
}

export default AdminPrivateRoute;