import InitialPageTitle from '../../components/InitialPageTitle';
import InitialPageInput from '../../components/InitialPageInput';
import InitialPageLink from '../../components/InitialPageLink';
import InitialPageButton from '../../components/InitialPageButton';

function AlterarSenha() {
    return (
        <div className="initial-page">
            <InitialPageTitle>Alterar Senha</InitialPageTitle>
            <InitialPageInput type="text">Email</InitialPageInput>
            <InitialPageButton>{'>'}</InitialPageButton>
            <div className="initial-page__links">
                <InitialPageLink linkTo="/">Login</InitialPageLink>
            </div>
        </div>
    );
}

export default AlterarSenha;