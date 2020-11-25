import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from "react-router-dom"
import { renderRoutes } from "react-router-config"

import routes from 'routes/configRoutes';
import rootReducer from 'store/reducers/rootReducer';

import './index.less';

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                {renderRoutes(routes)}
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
