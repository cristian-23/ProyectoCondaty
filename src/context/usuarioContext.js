import { createContext, useMemo, useState } from "react";
import ReservasContext from "./reservasContext";

const UserContext = createContext()

export default UserContext


export function UserContextProvider({ children }) {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const value = useMemo(
        () => ({
            user,
            setUser,
            password,
            setPassword
        }),
        [user, setUser, password, setPassword]
        )

        return (
            <UserContext.Provider value={ value }>
                {children}
            </UserContext.Provider>
        )
}