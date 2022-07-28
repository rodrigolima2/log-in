import { useEffect } from 'react';

import useUsuario from '../../hooks/useUsuario';
import { post } from '../../hooks/useRequests';

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
        setSenha,
        setConfSenha
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
        if (!email) return errorMessage('Insira seu email!');

        const re = /\S+@\S+\.\S+/;

        if (!re.test(email)) return errorMessage('Insira um email em formato válido!');

        const body = {
            email: email.trim().toLowerCase()
        };

        const result = await post('alter', body);

        console.log(result)
        return;
    }

    return (
        <div className="initial-page">
            <InitialPageTitle>Alterar Senha</InitialPageTitle>
            <InitialPageInput type="text" value={email} setValue={setEmail}>Email</InitialPageInput>
            <InitialPageButton onClick={handleSubimit}>{'>'}</InitialPageButton>
            <div className="initial-page__links">
                <InitialPageLink linkTo="/">Login</InitialPageLink>
            </div>
        </div>
    );
}

export default AlterarSenha;