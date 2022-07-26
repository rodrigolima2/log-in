import { useState } from "react";

function useLogadoProvider() {
    const [nomeHeader, setNomeHeader] = useState('');
    const [sobrenomeHeader, setSobrenomeHeader] = useState('');
    const [emailHeader, setEmailHeader] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    return {
        nomeHeader, setNomeHeader,
        sobrenomeHeader, setSobrenomeHeader,
        emailHeader, setEmailHeader,
        nome, setNome,
        sobrenome, setSobrenome,
        email, setEmail,
        senha, setSenha,
        confSenha, setConfSenha
    };
}

export default useLogadoProvider;