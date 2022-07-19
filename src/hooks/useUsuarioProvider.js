import { useState } from "react";
import { useLocalStorage } from "react-use";

function useUsuarioProvider() {
    const [token, setToken, removeToken] = useLocalStorage("token", "");
    const [validToken, setValidToken] = useState(false);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    return {
        token, setToken, removeToken,
        validToken, setValidToken,
        nome, setNome,
        sobrenome, setSobrenome,
        email, setEmail,
        senha, setSenha,
        confSenha, setConfSenha,
    };
}

export default useUsuarioProvider;