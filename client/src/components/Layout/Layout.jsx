import React from 'react';
import { renderRoutes } from "react-router-config"

import routes from 'routes/configRoutes';

const Layout = () => {
    return(
        <>
            <div>Layout</div>
            {renderRoutes(routes)}
        </>
    );
}

export default Layout;
