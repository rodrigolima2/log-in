import { Link } from "react-router-dom";

import './styles.css';

function InitialPageLink({ linkTo, children }) {
    return (
        <Link to={linkTo} className="initial-page__link">{children}</Link>
    );
}

export default InitialPageLink;