import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useUsuario from '../../hooks/useUsuario';
import { post, changePassword } from '../../hooks/useRequests';

import InitialPageTitle from '../../components/InitialPageTitle';
import InitialPageInput from '../../components/InitialPageInput';
import InitialPageLink from '../../components/InitialPageLink';
import InitialPageButton from '../../components/InitialPageButton';

import { errorMessage } from '../../helpers/toast';

function AlterarSenha() {

    const {
        setNome,
        setSobrenome,
        email, setEmail,
        senha, setSenha,
        confSenha, setConfSenha
    } = useUsuario();

    const { token } = useParams();

    useEffect(() => {
        setNome('');
        setSobrenome('');
        setEmail('');
        setSenha('');
        setConfSenha('');
        // eslint-disable-next-line
    }, []);

    async function handleSubimit() {
        if (!token) {
            if (!email) return errorMessage('Insira seu email!');

            const re = /\S+@\S+\.\S+/;

            if (!re.test(email)) return errorMessage('Insira um email em formato válido!');
        }

        if (token) {
            if (!senha || !confSenha) return errorMessage('Preencha todos os campos!');
            if (senha.length < 8 || senha.length > 20) return errorMessage('Insira uma senha com no mínimo 8 e no máximo 20 caracteres!');
            if (senha !== confSenha) return errorMessage('Senha e Confirmar Senha não conferem!');
            if (senha.includes(" ")) return errorMessage('Insira uma senha sem espaços!');
        }

        try {
            if (!token) {
                const body = {
                    email: email.trim().toLowerCase(),
                };

                return await post('alter', body);
            }

            if (token) {
                const body = {
                    senha: senha.trim()
                };

                return await changePassword('alter', token, body);
            }
        } catch (error) {
            errorMessage(error.message);
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