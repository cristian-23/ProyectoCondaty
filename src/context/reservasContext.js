import { createContext, useMemo, useState } from "react";

const ReservasContext = createContext()

export default ReservasContext


export function ReservasContextProvider({ children }) {
    const [lugares, setLugares] = useState([])
    const [reservas, setReservas] = useState([])

    const value = useMemo(
        () => ({
            lugares,
            setLugares,
            reservas,
            setReservas
        }),
        [lugares, setLugares, reservas, setReservas]
        )

        return (
            <ReservasContext.Provider value={ value }>
                {children}
            </ReservasContext.Provider>
        )
}