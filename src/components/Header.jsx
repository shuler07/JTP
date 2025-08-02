import './Header.css';
import HeaderInfo from './HeaderInfo';
import HeaderAccount from './HeaderAccount';

export default function Header({ page, balance }) {
    function handleClickLogo() {
        if (!window.location.href.endsWith('index.html')) {
            window.location.href = 'index.html';
        }
    }

    return (
        <header id='header'>
            <img
                src='./shared-assets/images/Logo120px.png'
                onClick={handleClickLogo}
                style={{ cursor: window.location.href.endsWith('index.html') ? 'default' : 'pointer' }}
            ></img>
            <HeaderInfo page={page} />
            <HeaderAccount balance={balance} />
        </header>
    );
}
