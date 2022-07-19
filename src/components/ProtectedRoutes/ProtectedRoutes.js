import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useUsuario from '../../hooks/useUsuario';

const ProtectedRoutes = () => {
    const { validToken } = useUsuario();

    return validToken ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;