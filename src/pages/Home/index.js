import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useUsuario from '../../hooks/useUsuario';
import { verifyToken } from '../../hooks/useRequests';

import './styles.css';

function Home() {
    const navigate = useNavigate();
    const { token, setValidToken } = useUsuario();

    useEffect(() => {
        verifyToken('login', token).then((res) => {
            if (!res) {
                setValidToken(false);
                navigate('/');
            }
        });
        // eslint-disable-next-line
    }, []);

    return (
        <>
            Home
        </>
    );
}

export default Home;