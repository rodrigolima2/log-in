import { useContext } from "react";
import LogadoContext from "../contexts/LogadoContext";

function useLogado() {
    return useContext(LogadoContext);
}

export default useLogado;