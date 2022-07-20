import './styles.css';

function InitialPageButton({ onClick, color, children }) {
    if (color) {
        document.querySelector(':root').style.setProperty('--initial-button-color', color);

    } else {
        document.querySelector(':root').style.setProperty('--initial-button-color', '#D9D9D9');
    }

    return (
        <button className="initial-page__button" type="submit" onClick={onClick}>{children}</button>
    );
}

export default InitialPageButton;