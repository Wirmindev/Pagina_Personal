import React, { useState } from "react";

interface User {
    name: string;
    email: string;
    role: string;
    status: boolean;
    google: boolean;
    uid: string;
}

interface AppContextI {
    token: string,
    user: User | null,
    setToken: (value: string) => void
    setUser: (value: User) => void
}

export const AppCotext = React.createContext({} as AppContextI);

export const Provider = ({ children }: any) => {
    const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
    const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('user') || '{}'));

    const values = {
        token,
        setToken,
        user,
        setUser
    }

    return (<AppCotext.Provider value={values}>{children}</AppCotext.Provider>)

}
