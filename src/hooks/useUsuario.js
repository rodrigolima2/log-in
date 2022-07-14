import { useContext } from "react";
import UsuarioContext from "../contexts/UsuarioContext";

function useUsuario() {
    return useContext(UsuarioContext);
}

export default useUsuario;