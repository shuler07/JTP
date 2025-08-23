import './Alert.css';

import { auth, firestore } from '../firebase';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';

import { ALERT_DATA } from '../data';
import { doc, updateDoc } from 'firebase/firestore';

export default function Alert({ alertInfo, setAlertInfo }) {
    if (alertInfo.alertType == '') return;

    function GetExtraFields() {
        switch (alertInfo.alertType) {
            case 'updateEmail':
            case 'updatePassword':
                const type = alertInfo.alertType == 'updateEmail' ? 'email' : 'password';
                return (
                    <>
                        <div className='formField'>
                            <h6 className='formFieldHint'>Email</h6>
                            <input id='inputEmail' className='formFieldInput' type='email'></input>
                        </div>
                        <div className='formField'>
                            <h6 className='formFieldHint'>Password</h6>
                            <input id='inputPassword' className='formFieldInput' type='password'></input>
                        </div>
                        <div className='formField'>
                            <h6 className='formFieldHint'>New {type}</h6>
                            <input id='inputNewData' className='formFieldInput' type={type}></input>
                        </div>
                    </>
                );
            case 'updateUsername':
                return (
                    <div className='formField'>
                        <h6 className='formFieldHint'>Username</h6>
                        <input id='inputUsername' className='formFieldInput' ></input>
                    </div>
                );
            case 'deleteAccount':
                return (
                    <>
                        <div className='formField'>
                            <h6 className='formFieldHint'>Email</h6>
                            <input id='inputEmail' className='formFieldInput' type='email'></input>
                        </div>
                        <div className='formField'>
                            <h6 className='formFieldHint'>Password</h6>
                            <input id='inputPassword' className='formFieldInput' type='password'></input>
                        </div>
                    </>
                );
            default:
                return;
        }
    }

    async function TryReauthenticate() {
        const _email = document.getElementById('inputEmail').value;
        const _password = document.getElementById('inputPassword').value;

        try {
            await reauthenticateWithCredential(auth.currentUser, EmailAuthProvider.credential(_email, _password));
            switch (alertInfo.alertType) {
                case 'updateEmail':
                case 'updatePassword':
                    const _newData = document.getElementById('inputNewData').value;
                    alertInfo.funcConfirm(true, _newData);
                    break;
                case 'deleteAccount':
                    alertInfo.funcConfirm(true);
                    break;
            }
        } catch (error) {
            console.log(error.message);
            alertInfo.funcConfirm(false);
        }
    }

    const handleClickClose = () => {
        alertInfo.funcConfirm(false);
        setAlertInfo({ alertType: '', funcConfirm: undefined });
    };

    function handleClickConfirm() {
        switch (alertInfo.alertType) {
            case 'updateEmail':
            case 'updatePassword':
            case 'deleteAccount':
                TryReauthenticate();
                break;
            case 'updateUsername':
                const _username = document.getElementById('inputUsername').value;
                if (_username.length == 0) return;

                updateDoc(doc(firestore, 'users', auth.currentUser.uid), { username: _username }).then(() => {
                    alertInfo.funcConfirm(true);
                }).catch((error) => {
                    console.log(error.message);
                    alertInfo.funcConfirm(false);
                });
            case 'signOut':
                alertInfo.funcConfirm(true);
                break;
        }
    }

    const data = ALERT_DATA[alertInfo.alertType];

    return (
        <div style={{ position: 'sticky', width: '100%', height: '0', top: '0', left: '0', zIndex: '10' }}>
            <div id='alertContainer'>
                <div id='alertWindow'>
                    <h4 id='alertTitle'>{data.title}</h4>
                    <h6 id='alertSubtitle'>{data.subtitle}</h6>
                    {GetExtraFields()}
                    <img
                        src='/JTP/shared-assets/images/CloseLarge.svg'
                        id='alertClose'
                        style={{ width: '2rem' }}
                        onClick={handleClickClose}
                    ></img>
                    <div
                        id='alertConfirm'
                        className='iconButton large'
                        style={{ background: data.confirmBackground }}
                        onClick={handleClickConfirm}
                    >
                        <h6>{data.confirmText}</h6>
                        <img src={data.confirmIcon}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
