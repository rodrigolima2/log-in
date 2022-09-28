import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useUsuario from '../../hooks/useUsuario';
import { post, changePassword } from '../../hooks/useRequests';

import InitialPageTitle from '../../components/InitialPageTitle';
import InitialPageInput from '../../components/InitialPageInput';
import InitialPageLink from '../../components/InitialPageLink';
import InitialPageButton from '../../components/InitialPageButton';

import { errorMessage, successfulMessage } from '../../helpers/toast';

function AlterarSenha() {
    const { token } = useParams();
    const navigate = useNavigate();

    const {
        setNome,
        setSobrenome,
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

    async function handleSubimit() {
        try {
            if (!token) {
                if (!email) return errorMessage('Insira seu email!');

                const re = /\S+@\S+\.\S+/;

                if (!re.test(email)) return errorMessage('Insira um email em formato válido!');

                const body = {
                    email: email.trim().toLowerCase(),
                };

                const response = await post('alter', body);

                if (!response) return;

                setEmail('');
                return successfulMessage("Um email de recuperação de senha foi enviado!");
            }

            if (token) {
                if (!senha || !confSenha) return errorMessage('Preencha todos os campos!');
                if (senha.length < 8 || senha.length > 20) return errorMessage('Insira uma senha com no mínimo 8 e no máximo 20 caracteres!');
                if (senha !== confSenha) return errorMessage('Senha e Confirmar Senha não conferem!');
                if (senha.includes(" ")) return errorMessage('Insira uma senha sem espaços!');

                const body = {
                    senha: senha.trim()
                };

                const response = await changePassword('alter', token, body);

                if (!response) return;

                setSenha('');
                setConfSenha('');
                successfulMessage("Senha Alterada com sucesso!!");
                return navigate('/');
            }
        } catch (error) {
            return errorMessage(error.message);
        }
    }

    return (
        <div className="initial-page">
            <InitialPageTitle>Alterar Senha</InitialPageTitle>
            {!token &&
                <>
                    <InitialPageInput type="text" value={email} setValue={setEmail}>Email</InitialPageInput>
                    <InitialPageButton onClick={handleSubimit}>{'>'}</InitialPageButton>
                </>
            }
            {token &&
                <>
                    <InitialPageInput type="password" value={senha} setValue={setSenha}>Nova Senha</InitialPageInput>
                    <InitialPageInput type="password" value={confSenha} setValue={setConfSenha}>Confirmar Nova Senha</InitialPageInput>
                    <InitialPageButton onClick={handleSubimit}>{'>'}</InitialPageButton>
                </>
            }
            <div className="initial-page__links">
                <InitialPageLink linkTo="/">Login</InitialPageLink>
            </div>
        </div>
    );
}

export default AlterarSenha;