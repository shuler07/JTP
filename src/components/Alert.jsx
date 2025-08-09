import './Alert.css';

import { auth } from '../firebase';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';

import { ALERT_DATA } from '../data';

export default function Alert({ alertInfo, setAlertInfo }) {
    if (alertInfo.alertType == '') return;

    function GetExtraFields() {
        switch (alertInfo.alertType) {
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
            const credential = await reauthenticateWithCredential(auth.currentUser, EmailAuthProvider.credential(_email, _password));
            if (credential) {
                alertInfo.funcConfirm('success');
            } else {
                alertInfo.funcConfirm('invalid');
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleClickClose = () => {
        alertInfo.funcConfirm('canceled');
        setAlertInfo({ alertType: '', funcConfirm: undefined });
    };

    function handleClickConfirm() {
        switch (alertInfo.alertType) {
            case 'signOut':
                alertInfo.funcConfirm('success');
                break;
            case 'deleteAccount':
                TryReauthenticate()
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
