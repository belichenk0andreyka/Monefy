import React from 'react';
import { Route } from 'react-router-dom';
import Registration from 'components/AuthReg/Registration';
import Authorization from 'components/AuthReg/Authorization';

import './authReg.less';

const AuthReg = () => {
    return(
        <div className='authReg'>
            <Route path="/" exact={true}><Authorization /></Route>
            <Route path="/register" exact={true}><Registration /></Route>
        </div>
    );
}

export default AuthReg;
