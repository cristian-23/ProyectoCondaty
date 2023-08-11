import { useContext } from "react";
import userContext from "../context/usuarioContext";

export default function useUser() {

    return useContext(userContext)
    
}