import { useContext } from "react";
import ReservasContext from "../context/reservasContext";

export default function useReservas() {

    return useContext(ReservasContext)
    
}