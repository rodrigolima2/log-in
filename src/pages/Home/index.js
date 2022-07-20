import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useUsuario from '../../hooks/useUsuario';
import useLogado from '../../hooks/useLogado';
import { get } from '../../hooks/useRequests';

import InitialPageButton from '../../components/InitialPageButton';

import './styles.css';

import logInLogo from '../../assets/log-in-logo.svg';

function Home() {
    const navigate = useNavigate();
    const { token, removeToken } = useUsuario();
    const {
        nome, setNome,
        sobrenome, setSobrenome,
        email, setEmail,
        senha, setSenha
    } = useLogado();

    useEffect(() => {
        get('user', token).then(res => {
            setNome(res.nome);
            setSobrenome(res.sobrenome);
            setEmail(res.email);
        });
        // eslint-disable-next-line
    }, []);

    function handleLogOff() {
        removeToken();
        return navigate('/');
    }

    return (
        <div className="home">
            <header className="home__header">
                <img src={logInLogo} alt="Logo" />
                <div className="home__name-logout">
                    <h1 className="home__name">Bem Vindo(a), {nome} {sobrenome}!</h1>
                    <InitialPageButton onClick={handleLogOff} color={'#F2C94C'}>{'<'}</InitialPageButton>
                </div>
            </header>
        </div>
    );
}

export default Home;