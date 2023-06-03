import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const UserPrivateRoute = ({children}) => {

   
      
      function getCookie(name) {
        const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
        return cookieValue ? cookieValue.pop() : '';
      }

      
    const location = useLocation();
    let token = getCookie('token');
    if(!token ){
        return <Navigate to='/login' sate={{from:location}} replace ></Navigate>
        
    }else{
        if(token){
            return children;
        }else{
            <Navigate to='*' sate={{from:location}} replace></Navigate>
        }
    }

  
    
}

export default UserPrivateRoute;