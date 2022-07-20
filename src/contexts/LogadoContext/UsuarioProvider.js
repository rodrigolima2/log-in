import LogadoContext from "./index";
import useLogadoProvider from "../../hooks/useLogadoProvider";

export function LogadoProvider({ children }) {
    const logadoProvider = useLogadoProvider();

    return (
        <LogadoContext.Provider value={logadoProvider}>
            {children}
        </LogadoContext.Provider>
    );
}