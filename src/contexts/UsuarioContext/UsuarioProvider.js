import UsuarioContext from "./index"; // importa o contexto criado
import useUsuarioProvider from "../../hooks/useUsuarioProvider"; // importa a funcao que contem os estados que serao usados como contexto

export function UsuarioProvider({ children }) {
    const usuarioProvider = useUsuarioProvider(); // cria uma const que recebe a funcao que contem os estados

    return (
        <UsuarioContext.Provider value={usuarioProvider}>
            {children}
        </UsuarioContext.Provider>
    );
} // retorna o contexto com o valor do provider (estados criados na funcao) 

