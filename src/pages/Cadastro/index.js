import { useEffect } from 'react';

import useUsuario from '../../hooks/useUsuario';

import InitialPageTitle from '../../components/InitialPageTitle';
import InitialPageInput from '../../components/InitialPageInput';
import InitialPageLink from '../../components/InitialPageLink';
import InitialPageButton from '../../components/InitialPageButton';

import { errorMessage } from '../../helpers/toast';

function Cadastro() {
    const {
        nome, setNome,
        sobrenome, setSobrenome,
        email, setEmail,
        senha, setSenha,
        confSenha, setConfSenha
    } = useUsuario();

    useEffect(() => {
        setNome('');
        setSobrenome('');
        setEmail('');
        setSenha('');
        setConfSenha('');
        // eslint-disable-next-line
    }, []);

    function handleSubimit() {
        if (!nome || !sobrenome || !email || !senha || !confSenha) return errorMessage('Preencha todos os campos!');
        if (senha !== confSenha) return errorMessage('Senha e Confirmar Senha não conferem!');
        if (nome.includes(" ")) return errorMessage('Insira apenas seu primeiro nome');
        if (senha.includes(" ")) return errorMessage('Insira uma senha sem espaços!');

        const re = /\S+@\S+\.\S+/;

        if (!re.test(email)) return errorMessage('Insira um email em formato válido!');

        const body = {
            nome: nome.trim().toUpperCase().charAt() + nome.trim().toLowerCase().substr(1),
            sobrenome: sobrenome.trim().toUpperCase().charAt() + sobrenome.trim().toLowerCase().substr(1),
            email: email.trim().toLowerCase(),
            senha: senha.trim()
        }

        console.log(body)

        return;
    }

    return (
        <div className="initial-page">
            <InitialPageTitle>Cadastrar</InitialPageTitle>
            <InitialPageInput type="text" value={nome} setValue={setNome}>Nome</InitialPageInput>
            <InitialPageInput type="text" value={sobrenome} setValue={setSobrenome}>Sobrenome</InitialPageInput>
            <InitialPageInput type="text" value={email} setValue={setEmail}>Email</InitialPageInput>
            <InitialPageInput type="password" value={senha} setValue={setSenha}>Senha</InitialPageInput>
            <InitialPageInput type="password" value={confSenha} setValue={setConfSenha}>Confirmar Senha</InitialPageInput>
            <InitialPageButton onClick={handleSubimit}>{'>'}</InitialPageButton>
            <div className="initial-page__links">
                <InitialPageLink linkTo="/">Login</InitialPageLink>
                <InitialPageLink linkTo="/alterar-senha">Alterar Senha</InitialPageLink>
            </div>
        </div>
    );
}

export default Cadastro;