import './HeaderAccount.css';

import { Link } from 'react-router-dom';

import { auth } from '../firebase';

export default function HeaderAccount({ page, balance }) {
    if (auth.currentUser != null) {
        return (
            <div id='headerAccountContainer' className={`signedIn ${page}`}>
                <img id='headerAccountImage' src='/JTP/shared-assets/images/Avatar.png' />
                <h5 id='headerAccountBalance'>
                    {balance} {balance !== 'Loading...' && '$'}
                </h5>
                <img id='headerAccountArrow' />
                { page !== 'Profile' && <Link to='/profile' style={{ position: 'absolute', left: '0', width: '100%', height: '100%' }} /> }
            </div>
        );
    }
    return (
        <div id='headerAccountContainer' className='notSignedIn'>
            <img id='headerAccountImage' src='/JTP/shared-assets/images/Avatar.png' />
            <h5 id='headerAccountBalance' className='gradientText'>
                Login
            </h5>
            <img id='headerAccountArrow' width='20px' />
            <Link to='/register' style={{ position: 'absolute', left: '0', width: '100%', height: '100%' }} />
        </div>
    );
}
