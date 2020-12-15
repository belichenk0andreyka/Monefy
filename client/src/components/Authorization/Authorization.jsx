import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

import InputAuth from 'components/InputAuth';
import { validateInputsAuth } from 'helpers/registerHelper';
import { notificationHelper } from 'helpers/notifications';

const propTypes = {
    authUser: PropTypes.func.isRequired,
    authUserGoogle: PropTypes.func.isRequired,
};

const Authorization = ({ authUser, authUserGoogle }) => {
    const initialState = { email: '', password: '' };
    const initialValidatesState = { email: true, password: true, isValid: true, allIsValid: true };
    const [inputsValues, setInputsValues] = React.useState(initialState);
    const [inputsValidate, setInputsValidate] = React.useState(initialValidatesState);
    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setInputsValues({...inputsValues, [name]: value});
    }
    const handleAuth = () => {
        const { email, password, isValid, allIsValid } = validateInputsAuth(inputsValues);
        setInputsValidate({ email, password, isValid, allIsValid });
        if (isValid) authUser(inputsValues);
        else notificationHelper('Error', 'Authorization failed<br /> Please enter valid data', 'error');
    }
    const onInputFocus = () => setInputsValidate({
        ...initialValidatesState,
        isValid: inputsValidate.isValid,
        allIsValid: inputsValidate.allIsValid
    });
    const responseGoogle = (response) => {
        authUserGoogle({tokenId: response.tokenId});
    }
    const failureGoogle = (error) => {
        console.log(error);
    }
    return(
        <div className='auth'>
            <img src="src/assets/logo.png" className='auth-logo'/>
            <p className='auth-title'>Authorization</p>
            <div className='auth-input__container'>
                <InputAuth
                    name='email'
                    maxLength={40}
                    inputType='text'
                    values={inputsValues}
                    onInputFocus={onInputFocus}
                    validateValues={inputsValidate}
                    tooltipMessage='Enter valid email'
                    onChangeHandle={handleChangeInput}
                />
                <InputAuth
                    name='password'
                    maxLength={10}
                    inputType='password'
                    values={inputsValues}
                    onInputFocus={onInputFocus}
                    validateValues={inputsValidate}
                    onChangeHandle={handleChangeInput}
                    tooltipMessage='Enter password'
                />
            </div>
            <div>
                <GoogleLogin
                    clientId="535101318047-2hk9cabc41oq6ka4qk33mipnn5ntlfik.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={failureGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            <div className='auth-buttons__container'>
                <div className='buttons-container'>
                    <Link className='button-container__btn' to='/registration'>Register</Link>
                </div>
                <div className='buttons-container'>
                    <button
                        className='button-container__btn'
                        onClick={handleAuth}
                    >Login</button>
                </div>
            </div>
        </div>
    );
}

Authorization.propTypes = propTypes;

export default Authorization;
