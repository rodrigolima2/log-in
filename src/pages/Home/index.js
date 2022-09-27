import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useUsuario from '../../hooks/useUsuario';
import useLogado from '../../hooks/useLogado';
import { get, put } from '../../hooks/useRequests';

import InitialPageTitle from '../../components/InitialPageTitle';
import InitialPageInput from '../../components/InitialPageInput';
import InitialPageButton from '../../components/InitialPageButton';

import { errorMessage, successfulMessage } from '../../helpers/toast';

import './styles.css';

function Home() {
    const navigate = useNavigate();
    const { token, removeToken } = useUsuario();
    const {
        nomeHeader, setNomeHeader,
        sobrenomeHeader, setSobrenomeHeader,
        emailHeader, setEmailHeader,
        nome, setNome,
        sobrenome, setSobrenome,
        email, setEmail,
        senha, setSenha,
        confSenha, setConfSenha
    } = useLogado();

    useEffect(() => {
        getUser();
        // eslint-disable-next-line
    }, []);

    function getUser() {
        get('user', token).then(res => {
            setNomeHeader(res.nome);
            setSobrenomeHeader(res.sobrenome);
            setEmailHeader(res.email);
        });
    }

    function handleLogOff() {
        removeToken();
        return navigate('/');
    }

    async function handleSubimit() {
        if (!nome && !sobrenome && !email && !senha && !confSenha) return errorMessage('Preencha pelo menos um dos campos para alterar!');

        const body = {}

        if (nome) {
            if (nome.includes(" ")) return errorMessage('Insira apenas seu primeiro nome');

            body.nome = nome.trim().toUpperCase().charAt() + nome.trim().toLowerCase().substr(1);
        }
        if (sobrenome) {
            if (sobrenome.includes(" ")) return errorMessage('Insira apenas um sobrenome');

            body.sobrenome = sobrenome.trim().toUpperCase().charAt() + sobrenome.trim().toLowerCase().substr(1);
        }
        if (email) {
            const re = /\S+@\S+\.\S+/;

            if (!re.test(email)) return errorMessage('Insira um email em formato válido!');

            body.email = email.trim().toLowerCase();
        }
        if (senha || confSenha) {
            if (senha.length < 8 || senha.length > 20) return errorMessage('Insira uma senha com no mínimo 8 e no máximo 20 caracteres!');
            if (senha !== confSenha) return errorMessage('Senha e Confirmar Senha não conferem!');
            if (senha.includes(" ")) return errorMessage('Insira uma senha sem espaços!');

            body.senha = senha.trim();
        }

        const result = await put('user', token, body);

        if (!result) {
            return errorMessage('Não foi possível alterar os dados');
        }

        setNome('');
        setSobrenome('');
        setEmail('');
        setSenha('');
        setConfSenha('');
        successfulMessage('Dado(s) alterado(s) com sucesso!');
        return getUser();
    }

    return (
        <div className="home">
            <header className="home__header">
                <InitialPageTitle>Log-In</InitialPageTitle>
                <h1 className="home__name">Bem Vindo(a), {nomeHeader} {sobrenomeHeader}!</h1>
                <p className="home__email">{emailHeader}</p>
                <InitialPageButton onClick={handleLogOff} color={'#F2C94C'}>{'<'}</InitialPageButton>
            </header>
            <main className="home__main">
                <InitialPageTitle>Alterar Dados</InitialPageTitle>
                <InitialPageInput type="text" value={nome} setValue={setNome}>Alterar Nome</InitialPageInput>
                <InitialPageInput type="text" value={sobrenome} setValue={setSobrenome}>Alterar Sobrenome</InitialPageInput>
                <InitialPageInput type="text" value={email} setValue={setEmail}>Alterar Email</InitialPageInput>
                <InitialPageInput type="password" value={senha} setValue={setSenha}>Alterar Senha</InitialPageInput>
                <InitialPageInput type="password" value={confSenha} setValue={setConfSenha}>Confirmar Senha</InitialPageInput>
                <InitialPageButton onClick={handleSubimit}>{'>'}</InitialPageButton>
            </main>
        </div>
    );
}

export default Home;