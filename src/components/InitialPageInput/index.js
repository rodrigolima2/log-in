import './styles.css';

function InitialPageInput({ type, value, setValue, inputColor, textColor, children }) {
    if (inputColor && textColor) {
        document.querySelector(':root').style.setProperty('--initial-input-color', inputColor);
        document.querySelector(':root').style.setProperty('--initial-input-info-color', textColor);
    } else {
        document.querySelector(':root').style.setProperty('--initial-input-color', '#D9D9D9');
        document.querySelector(':root').style.setProperty('--initial-input-info-color', '#000000');
    }

    return (
        <div className="initial-page__input-info">
            {value !== undefined ?
                <input className="initial-page__input" type={type} value={value} onChange={(event) => setValue(event.target.value)} />
                :
                <input className="initial-page__input" type={type} />
            }
            <span className="initial-page__info">{children}</span>
        </div>
    );
}

export default InitialPageInput;