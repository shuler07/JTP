import './FormContainer.css';

import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { auth, firestore } from '../../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    signOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

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

    // Memo

    const MemoizedLogo = memo(() => (
        <div style={{ position: 'relative', cursor: 'pointer' }}>
            <img src='/JTP/shared-assets/images/Logo.svg' width='180px'></img>
            <Link to='/' style={{ position: 'absolute', left: '0', width: '100%', height: '100%' }} />
        </div>
    ));

    const MemoizedFormFieldEmail = useMemo(
        () => <FormField hint='Email' type='email' value={emailText} setValue={setEmailText} />,
        [emailText]
    );
    const MemoizedFormFieldPassword = useMemo(
        () => <FormField hint='Password' type='password' value={passwordText} setValue={setPasswordText} />,
        [passwordText]
    );
    const MemoizedFormFieldUsername = useMemo(
        () => <FormField hint='Username' value={usernameText} setValue={setUsernameText} />,
        [usernameText]
    );

    const MemoizedFormButtonSwitch = useMemo(
        () => <FormButtonSwitch isRegister={isRegister} setIsRegister={setIsRegister} />,
        [isRegister]
    );
    const MemoizedFormButtonReset = useMemo(
        () => <FormButtonReset email={emailText} setAlert={setAlert} animateAlert={AnimateAlert} />,
        [isRegister]
    );

    return (
        <div id='formContainer'>
            <MemoizedLogo />
            {MemoizedFormFieldEmail}
            {MemoizedFormFieldPassword}
            {isRegister && MemoizedFormFieldUsername}
            <FormButton
                setAlert={setAlert}
                animateAlert={AnimateAlert}
                isRegister={isRegister}
                _email={emailText}
                _password={passwordText}
                _username={usernameText}
            />
            {MemoizedFormButtonSwitch}
            {!isRegister && MemoizedFormButtonReset}
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
        let alertText = ValidateCredential(_email, _password);
        if (alertText != '') {
            setAlert(alertText);
            animateAlert();
        } else {
            alertText = isRegister ? TryToRegister(_email, _password, _username) : TryToSignIn(_email, _password);
            if (alertText != '') {
                setAlert(alertText);
                animateAlert();
            }
        }
    }

    async function TryToRegister(email, password, username, alert = 'Invalid email or password. Try again later') {
        try {
            const task = await createUserWithEmailAndPassword(auth, email, password);
            const user = task.user;
            window.localStorage.setItem('username', username);

            try {
                await sendEmailVerification(user);
                alert = 'Confirm your email before you login';
            } catch (error) {
                console.log(error.message);
            }

            signOut(auth);
        } catch (error) {
            console.log(error.message);
        }

        return alert;
    }

    async function TryToSignIn(email, password, alert = 'Invalid email or password. Try again later') {
        try {
            const task = await signInWithEmailAndPassword(auth, email, password);
            const user = task.user;

            if (user.emailVerified) {
                try {
                    const snapshot = await getDoc(doc(firestore, 'users', user.uid));
                    const data = snapshot.data();

                    if (data) {
                        window.localStorage.setItem('username', data.username);
                        alert = '';
                        window.location.pathname = '/JTP/';
                    } else {
                        try {
                            await setDoc(doc(firestore, 'users', user.uid), {
                                username: window.localStorage.getItem('username'),
                                registerDate: new Date().toUTCString(),
                                balance: 0,
                                overallStatistics: [
                                    0, // moneyFunded
                                    0, // moneyWithdrawed
                                    0, // moneyBet
                                    0, // moneyWon
                                    0, // averageBet
                                    0, // averageWin
                                    0, // games
                                    'None', // favoriteGame
                                    0, // wins
                                    0, // winPercentage
                                    0, // wheelGames
                                    0, // rouletteGames
                                ],
                                wheelStatistics: [
                                    0, // totalSpins
                                    0, // totalWins
                                    0, // totalMoneyBet
                                    0, // totalMoneyWon
                                    0, // winPercentage
                                    0, // moneyProfit
                                    0, // redChoosed
                                    0, // redWon
                                    0, // blackChoosed
                                    0, // blackWon
                                    0, // yellowChoosed
                                    0, // yellowWon
                                    0, // greenChoosed
                                    0, // greenWon
                                ],
                                rouletteStatistics: [
                                    0, // totalSpins
                                    0, // totalWins
                                    0, // totalMoneyBet
                                    0, // totalMoneyWon
                                    0, // winPercentage
                                    0, // moneyProfit
                                    0, // redChoosed
                                    0, // redWon
                                    0, // blackChoosed
                                    0, // blackWon
                                    0, // purpleChoosed
                                    0, // purpleWon
                                ],
                            });
                            alert = '';
                            window.location.pathname = '/JTP/';
                        } catch (error) {
                            console.log(error.message);
                        }
                    }
                } catch (error) {
                    console.log(error.message);
                }
            } else {
                try {
                    await sendEmailVerification(user);
                    alert = 'Confirm your email before you login';
                } catch (error) {
                    console.log(error.message);
                }

                signOut(auth);
            }
        } catch (error) {
            console.log(error.message);
        }

        return alert;
    }

    function ValidateCredential(_email, _password) {
        const _passwordSet = new Set(_password);
        console.log(_password.length);

        if (_password.length < 8) return 'Short password';
        if (_passwordSet.size <= _password.length / 3) return 'Too many repeating symbols';
        if (_email == '') return 'Email field is empty';

        return '';
    }

    return (
        <div id='formButtonContainer'>
            <button id='formButton' onClick={FormButtonHandleClick}>
                <h5 className='gradientText'>{isRegister ? 'Register' : 'Login'}</h5>
                <img style={{ width: '1.5rem' }} />
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
        TryToReset();
    }

    async function TryToReset(alert = 'Invalid email or password. Try again later') {
        if (email == '') {
            alert = 'Email field is empty';
        } else {
            try {
                await sendPasswordResetEmail(auth, email);
                alert = 'Reset password email sent';
            } catch (error) {
                console.log(error.message);
            }
        }
        setAlert(alert);
        animateAlert();
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
