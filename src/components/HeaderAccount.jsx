import './HeaderAccount.css';
import { auth } from '../firebase';

export default function HeaderAccount({ balance }) {
    if (auth.currentUser != null) {
        return (
            <div id='headerAccountContainer' className='signedIn'>
                <img id='headerAccountImage' src='./shared-assets/images/Avatar.png' />
                <h5 id='headerAccountBalance'>{balance} $</h5>
                <img id='headerAccountArrow' />
            </div>
        );
    }
    return (
        <div id='headerAccountContainer' className='notSignedIn' onClick={() => window.location.href = 'register.html' } >
            <img id='headerAccountImage' src='./shared-assets/images/Avatar.png' />
            <h5 id='headerAccountBalance' className='gradientText'>
                Login
            </h5>
            <img id='headerAccountArrow' />
        </div>
    );
}
