import React from 'react';
import ReduxToastr from 'react-redux-toastr'
import { Route, Switch } from 'react-router-dom';

import AuthReg from 'components/AuthReg';
import MainPage from 'components/MainPage';

import './layout.less';

const Layout = () => {
    return(
        <div className='layout'>
            <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="top-left"
                getState={(state) => state.toastr} // This is the default
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick/>
            <Switch>
                <Route path="/"><AuthReg /></Route>
                <Route path="/main"><MainPage /></Route>
            </Switch>
        </div>
    );
}

export default Layout;
