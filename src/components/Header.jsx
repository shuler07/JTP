import './Header.css';

import { Link } from 'react-router-dom';

import HeaderInfo from './HeaderInfo';
import HeaderAccount from './HeaderAccount';

export default function Header({ page, balance }) {
    return (
        <header id='header'>
            <div style={{ position: 'relative', cursor: page == 'Main page' ? 'default' : 'pointer', height: '100%' }}>
                <img src='/JTP/shared-assets/images/Logo120px.png' />
                {page !== 'Main page' && <Link to='' style={{ position: 'absolute', left: '0', width: '100%', height: '100%' }} /> }
            </div>
            <HeaderInfo page={page} />
            <HeaderAccount page={page} balance={balance} />
        </header>
    );
}
