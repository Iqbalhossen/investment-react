import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';


const LoginRoute = ({children}) => {

    let { InviteUserName } = useParams();
    let { id } = useParams();
    
const [showUser, setUser] = useState([]);

useEffect(() => {
if(InviteUserName){
    fetch(`http://localhost:5000/api/user/view/${InviteUserName}/${id}`, {
        method: 'GET',
        headers: {
            'authorization':
                'Beare eyJ1c2VyX25hbWUiOiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM2OWI1OTAiLCJpYXQiOjE2NzkzMzQ3OTUsImV4cCI6MTY3OTMzODM5NX0',
        },
    })
    .then(res => res.json())
    .then(data => {
        setUser(data.data);
        // console.log(data.data)
    });
}
   


}, [])

  

    if( showUser?._id === null  ){
        return <Navigate to='*' ></Navigate>
        
    }
    else if(showUser?._id && showUser.userName){
        return children;

    }
 
   

  
   
}

export default LoginRoute;