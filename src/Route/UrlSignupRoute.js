import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';


const LoginRoute = ({children}) => {

    let { InviteUserName } = useParams();
    let { id } = useParams();
    
const [showUser, setUser] = useState([]);

useEffect(() => {
    fetch(`https://crypto-iqbalhossen.vercel.app/api/user/view/${InviteUserName}/${id}`)
    .then(res => res.json())
    .then(data => {
        setUser(data.data);
        console.log(data.data)
    });

}, [])

    const location = useLocation();

    if( showUser?._id === null  ){
        return <Navigate to='*' ></Navigate>
        
    }
    else if(showUser._id && showUser.userName){
        return children;

    }
 
   

  
   
}

export default LoginRoute;