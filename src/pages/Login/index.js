import { useEffect } from 'react';

import useUsuario from '../../hooks/useUsuario';

import InitialPageTitle from '../../components/InitialPageTitle';
import InitialPageInput from '../../components/InitialPageInput';
import InitialPageLink from '../../components/InitialPageLink';
import InitialPageButton from '../../components/InitialPageButton';

import { errorMessage } from '../../helpers/toast';

function Login() {
    const {
        setNome,
        setSobrenome,
        email, setEmail,
        senha, setSenha,
        setConfSenha
    } = useUsuario();


    function handleSubimit() {
        if (!email || !senha) return errorMessage('Insira seu email e senha!');

        return;
    }

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
            <InitialPageTitle>Log-In</InitialPageTitle>
            <InitialPageInput type="text" value={email} setValue={setEmail}>Email</InitialPageInput>
            <InitialPageInput type="password" value={senha} setValue={setSenha}>Senha</InitialPageInput>
            <InitialPageButton onClick={handleSubimit}>{'>'}</InitialPageButton>
            <div className="initial-page__links">
                <InitialPageLink linkTo="/cadastrar">Cadastrar</InitialPageLink>
                <InitialPageLink linkTo="/alterar-senha">Alterar Senha</InitialPageLink>
            </div>
        </div >
    );
}

export default Login;