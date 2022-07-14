import { useEffect } from 'react';

import useUsuario from '../../hooks/useUsuario';

import InitialPageTitle from '../../components/InitialPageTitle';
import InitialPageInput from '../../components/InitialPageInput';
import InitialPageLink from '../../components/InitialPageLink';
import InitialPageButton from '../../components/InitialPageButton';

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

    return (
        <div className="initial-page">
            <InitialPageTitle>Cadastrar</InitialPageTitle>
            <InitialPageInput type="text" value={nome} setValue={setNome}>Nome</InitialPageInput>
            <InitialPageInput type="text" value={sobrenome} setValue={setSobrenome}>Sobrenome</InitialPageInput>
            <InitialPageInput type="text" value={email} setValue={setEmail}>Email</InitialPageInput>
            <InitialPageInput type="password" value={senha} setValue={setSenha}>Senha</InitialPageInput>
            <InitialPageInput type="password" value={confSenha} setValue={setConfSenha}>Confirmar Senha</InitialPageInput>
            <InitialPageButton>{'>'}</InitialPageButton>
            <div className="initial-page__links">
                <InitialPageLink linkTo="/">Login</InitialPageLink>
                <InitialPageLink linkTo="/alterar-senha">Alterar Senha</InitialPageLink>
            </div>
        </div>
    );
}

export default Cadastro;