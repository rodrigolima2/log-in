import './styles.css';

function InitialPageInput({ type, value, setValue, children }) {

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