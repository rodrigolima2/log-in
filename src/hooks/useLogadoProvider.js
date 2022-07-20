import { useState } from "react";

function useLogadoProvider() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return {
        nome, setNome,
        sobrenome, setSobrenome,
        email, setEmail,
        senha, setSenha,
    };
}

export default useLogadoProvider;