import React from "react";
import ReactDOM from "react-dom";

import MyImage from 'assets/dog.jpeg';
import './index.less';

const App = () => {
    return (
        <div>
            <div>Welcome to my-webpack-react-starter</div>
            <img src={MyImage} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
