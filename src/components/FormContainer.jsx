import { useEffect, useRef, useState } from 'react';
import './FormContainer.css';

import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    signOut,
} from 'firebase/auth';

export default function FormContainer() {
    const [isRegister, setIsRegister] = useState(true);

    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [usernameText, setUsernameText] = useState('');

    const formAlert = useRef();
    const [alert, setAlert] = useState('');
    useEffect(() => {
        AnimateAlert();
    }, [alert]);

    function AnimateAlert() {
        if (alert !== '') {
            const elem = formAlert.current;

            elem.style.display = 'block';
            elem.style.animation = 'none';
            void elem.offsetWidth;
            elem.style.animation = '';
            elem.style.animation = 'formAlertAnim 5s forwards';

            const handleAnimationEnd = () => {
                elem.style.display = 'none';
                elem.removeEventListener('animationend', handleAnimationEnd);
            };

            elem.addEventListener('animationend', handleAnimationEnd);
        }
    }

    function handleClickLogo() {
        if (!window.location.href.endsWith('index.html')) {
            window.location.href = 'index.html';
        }
    }

    return (
        <div id='formContainer'>
            <img src='/shared-assets/images/Logo180px.png' onClick={handleClickLogo} style={{ cursor: 'pointer' }}></img>
            <FormField hint='Email' type='email' value={emailText} setValue={setEmailText} />
            <FormField hint='Password' type='password' value={passwordText} setValue={setPasswordText} />
            {isRegister && <FormField hint='Username' value={usernameText} setValue={setUsernameText} />}
            <FormButton
                setAlert={setAlert}
                animateAlert={AnimateAlert}
                isRegister={isRegister}
                _email={emailText}
                _password={passwordText}
                _username={usernameText}
            />
            <FormButtonSwitch isRegister={isRegister} setIsRegister={setIsRegister} />
            {!isRegister && <FormButtonReset email={emailText} setAlert={setAlert} animateAlert={AnimateAlert} />}
            <FormAlert reference={formAlert} alert={alert} />
        </div>
    );
}

function FormField({ hint, type, value, setValue }) {
    return (
        <div className='formField'>
            <h6 className='formFieldHint'>{hint}</h6>
            <input className='formFieldInput' type={type} value={value} onChange={(e) => setValue(e.target.value)}></input>
        </div>
    );
}

function FormButton({ setAlert, animateAlert, isRegister, _email, _password, _username }) {
    function FormButtonHandleClick() {
        if (!ValidateCredential(_email, _password, setAlert, animateAlert)) return;

        if (isRegister) {
            createUserWithEmailAndPassword(auth, _email, _password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    sendEmailVerification(user)
                        .then((value) => {
                            console.log('Email verification sent');
                            setAlert('Confirm your email before you login');
                            animateAlert();
                        })
                        .catch((error) => {
                            console.log(error.message);
                        });
                    signOut(auth);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        } else {
            signInWithEmailAndPassword(auth, _email, _password).then((userCredential) => {
                const user = userCredential.user;
                if (!user.emailVerified) {
                    sendEmailVerification(user)
                        .then((value) => {
                            console.log('Email verification sent');
                            setAlert('Confirm your email before you login');
                            animateAlert();
                        })
                        .catch((error) => {
                            console.log(error.message);
                        });
                    signOut(auth);
                }
            });
        }
    }

    function ValidateCredential(_email, _password, setAlert, animateAlert) {
        const _passwordSet = new Set(_password);

        if (_password.length < 8) {
            setAlert('Short password');
            animateAlert();
            return false;
        } else if (_passwordSet.size <= _password.length / 3) {
            setAlert('Too many repeating symbols');
            animateAlert();
            return false;
        } else if (_email == '') {
            setAlert('Email field is empty');
            animateAlert();
            return false;
        }
        return true;
    }

    return (
        <div id='formButtonContainer'>
            <button id='formButton' onClick={FormButtonHandleClick}>
                <h5 className='gradientText'>{isRegister ? 'Register' : 'Login'}</h5>
            </button>
        </div>
    );
}

function FormButtonSwitch({ isRegister, setIsRegister }) {
    return (
        <div id='formButtonSwitchContainer'>
            <button id='formButtonSwitch' className='buttonWithUnderline' onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
            </button>
        </div>
    );
}

function FormButtonReset({ email, setAlert, animateAlert }) {
    function handleClickReset() {
        if (email == '') {
            setAlert('Email field is empty');
            animateAlert();
            return;
        };
        sendPasswordResetEmail(auth, email)
            .then((value) => {
                setAlert('Reset password email sent');
                animateAlert();
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div id='formButtonResetContainer'>
            <button id='formButtonReset' className='buttonWithUnderline' onClick={handleClickReset}>
                Reset password
            </button>
        </div>
    );
}

function FormAlert({ reference, alert }) {
    return (
        <div ref={reference} id='formAlert'>
            <h6>{alert}</h6>
        </div>
    );
}
