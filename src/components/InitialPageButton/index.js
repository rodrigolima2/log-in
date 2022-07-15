import './styles.css';

function InitialPageButton({ onClick, children }) {
    return (
        <button className="initial-page__button" type="submit" onClick={onClick}>{children}</button>
    );
}

export default InitialPageButton;