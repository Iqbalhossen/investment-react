import React, { createContext, useState } from 'react';
const getlocalStorageItem = () =>{

    let userId = localStorage.getItem("ID");
// console.log()
    if(userId){
        return JSON.parse(userId);
    }else{
        return null;
    }

}

export const AuthContext = createContext('');

const AuthProvider = ({children}) => {
    const [authUser, setUser] = useState(getlocalStorageItem());
    const {isLoading, setLoading} = useState(false);


    const LoginWithEmail = (data) =>{
        setUser(data);
        // console.log("context api : ", data);
    }


  

    const authInfo = {authUser, LoginWithEmail, isLoading, setLoading, setUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;