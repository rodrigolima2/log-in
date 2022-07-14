import { useState } from "react";

function useUsuarioProvider() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    return {
        nome,
        setNome,
        sobrenome,
        setSobrenome,
        email,
        setEmail,
        senha,
        setSenha,
        confSenha,
        setConfSenha,
    };
}

export default useUsuarioProvider;