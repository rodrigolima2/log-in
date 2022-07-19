import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useUsuario from '../../hooks/useUsuario';
import { post, verifyToken } from '../../hooks/useRequests';

import InitialPageTitle from '../../components/InitialPageTitle';
import InitialPageInput from '../../components/InitialPageInput';
import InitialPageLink from '../../components/InitialPageLink';
import InitialPageButton from '../../components/InitialPageButton';

import { errorMessage } from '../../helpers/toast';

function Login() {
    const navigate = useNavigate();
    const {
        token,
        setToken,
        setValidToken,
        setNome,
        setSobrenome,
        email, setEmail,
        senha, setSenha,
        setConfSenha
    } = useUsuario();

    useEffect(() => {
        setNome('');
        setSobrenome('');
        setEmail('');
        setSenha('');
        setConfSenha('');

        verifyToken('login', token).then((res) => {
            if (res) {
                setValidToken(true);
                navigate('/home');
            }
        });
        // eslint-disable-next-line
    }, []);

    async function handleSubimit() {
        if (!email || !senha) return errorMessage('Insira seu email e senha!');
        if (senha.includes(" ")) return errorMessage('Insira uma senha sem espaços!');

        const re = /\S+@\S+\.\S+/;

        if (!re.test(email)) return errorMessage('Insira um email em formato válido!');

        const body = {
            email: email.trim().toLowerCase(),
            senha: senha.trim()
        }

        const result = await post('login', body);

        if (result) {
            setToken(result.token);
            setValidToken(true);
            return navigate('/home');
        }
    }

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