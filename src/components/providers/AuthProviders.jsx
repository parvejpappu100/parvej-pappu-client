import React, {  createContext, useState } from 'react';

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {

    const [themeBlack, setThemeBlack] = useState(false);
    console.log(themeBlack)

    const authInfo = {themeBlack , setThemeBlack}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;