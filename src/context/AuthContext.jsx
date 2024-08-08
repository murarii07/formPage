// src/context/AuthContext.js
import { createContext, useState, useContext } from 'react';


export const AuthContext = createContext();
export const  AuthProvider=({ children })=>{
    const [resultFlag, setResultFlag] = useState(false);

    const login = async (obj) => {
        const res = await fetch("http://localhost:5000/admin", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj),
        });
        const result = await res.json();
        setResultFlag(result.success);
        return result.success;
    };

    return (
        <AuthContext.Provider value={{ resultFlag, login }}>
            {children}
        </AuthContext.Provider>
    );
}

export const UseAuth = () => useContext(AuthContext);
