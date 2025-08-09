import './ProfileMainWindow.css';

import { auth } from '../../firebase';
import { signOut, deleteUser } from 'firebase/auth';

import { memo, useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../MainApp';
import { ProfileContext } from '../../ProfilePageApp';

import {
    username,
    registerDate,
    registerDaysAgo,
    OVERALL_STATISTICS_TEXTS,
    OVERALL_STATISTICS_CHARS,
    userSettings,
    updateUserSettings,
} from '../../data';

export default function ProfileMainWindow({ reference }) {
    const [settings, setSettings] = useState(userSettings);
    useEffect(() => {
        window.localStorage.setItem('userSettings', JSON.stringify(settings));
        updateUserSettings(settings);
    }, [settings]);

    const context = useContext(AppContext);

    // Dropdowns

    const dropdownTheme = useRef();
    const dropdownFontSize = useRef();
    const dropdownsCount = useRef(0);

    window.onclick = (event) => {
        function HideDropdowns() {
            if (dropdownTheme.current) dropdownTheme.current.style.display = 'none';
            if (dropdownFontSize.current) dropdownFontSize.current.style.display = 'none';
            dropdownsCount.current = 0;
        }

        if (!event.target.classList.contains('dropdownChevron') || dropdownsCount.current > 1) HideDropdowns();
    };

    // Memo

    const MemoizedSectionProfile = memo(() => <SectionProfile setBalance={context.setBalance} />);
    const MemoizedSectionStatistics = memo(() => <SectionStatistics />);
    const MemoizedSectionAccount = memo(() => <SectionAccount setAlertInfo={context.setAlertInfo} />);
    const MemoizedSectionAppearance = memo(() => (
        <SectionAppearance
            dropdownTheme={dropdownTheme}
            dropdownFontSize={dropdownFontSize}
            dropdownsCount={dropdownsCount}
            settings={settings}
            setSettings={setSettings}
        />
    ));
    const MemoizedSectionLanguage = memo(() => <SectionLanguage />);

    return (
        <div style={{ minWidth: '300px', width: '800px', flexShrink: '1' }}>
            <div ref={reference} style={{ position: 'sticky', width: '100%', height: '0', left: '0', top: '0' }}>
                <div className='bgCircle little' style={{ left: '10%', top: '60dvh' }}></div>
                <div className='bgCircle medium' style={{ left: '60%', top: '30dvh' }}></div>
                <div className='bgCircle medium' style={{ left: '10%', top: '100dvh' }}></div>
                <div className='bgCircle large' style={{ left: '0%', top: '5dvh' }}></div>
                <div className='bgCircle large' style={{ left: '65%', top: '75dvh' }}></div>
            </div>
            <div id='profileMainWindow'>
                <MemoizedSectionProfile />
                <MemoizedSectionStatistics />
                <MemoizedSectionAccount />
                <MemoizedSectionAppearance />
                <MemoizedSectionLanguage />
            </div>
        </div>
    );
}

function SectionProfile({ setBalance }) {
    const date = new Date(registerDate);

    return (
        <div ref={useContext(ProfileContext).sections[0]} className='profileSection'>
            <h2>Profile</h2>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img src='/JTP/shared-assets/images/Avatar.png' style={{ width: '8rem', height: '8rem' }}></img>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ fontSize: '1.5em' }}>{username}</h3>
                    <button id='addFunds' onClick={() => setBalance((prev) => prev + 100)}>
                        <h6>Add funds</h6>
                    </button>
                </div>
            </div>
            <h6 style={{ marginTop: '1rem', color: '#CDCDCD' }}>
                Registered {`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`},{' '}
                {registerDaysAgo > 0 ? `${registerDaysAgo} days ago` : 'Today'}
            </h6>
        </div>
    );
}

function SectionStatistics() {
    function GetOverallStatistics() {
        const stats = useContext(AppContext).overallStatistics;

        return stats.map((value, index) => (
            <div
                key={`keyOverallStatistics${index}`}
                style={{ minWidth: '15rem', height: '1rem', display: 'flex', justifyContent: 'space-between' }}
            >
                <h6 style={{ color: '#BDBDBD' }}>{OVERALL_STATISTICS_TEXTS[index]}</h6>
                <h4>
                    {value} {OVERALL_STATISTICS_CHARS[index]}
                </h4>
            </div>
        ));
    }

    return (
        <div ref={useContext(ProfileContext).sections[1]} className='profileSection'>
            <h2>Statistics</h2>
            <div
                style={{
                    marginTop: '1rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
                    gridTemplateRows: 'repeat(auto-fit, minmax(1rem, 1fr))',
                    gap: '1.5rem',
                }}
            >
                {GetOverallStatistics()}
            </div>
        </div>
    );
}

function SectionAccount({ setAlertInfo }) {
    function handleClickSignOut() {
        setAlertInfo({ alertType: 'signOut', funcConfirm: (result) => {
            if (result == 'success') {
                signOut(auth);
                window.location.pathname = '/';
            }
        } });
    }

    function handleClickDeleteAccount() {
        setAlertInfo({ alertType: 'deleteAccount', funcConfirm: (result) => {
            if (result == 'success') {
                deleteUser(auth.currentUser);
                window.location.pathname = '/';
            } else if (result == 'invalid') {
                console.log('Invalid email or password');
            }
        } });
    }

    return (
        <div ref={useContext(ProfileContext).sections[2]} className='profileSection'>
            <h2>Account</h2>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className='grayInfoField'>
                    <h6 style={{ color: '#BDBDBD' }}>Email</h6>
                    <div className='grayInfoFieldRight'>
                        <h6>{auth.currentUser.email}</h6>
                        <img className='editPencil' src='/JTP/shared-assets/images/EditPencilIcon.png' style={{ width: '1.5rem' }} />
                    </div>
                </div>
                <div className='grayInfoField'>
                    <h6 style={{ color: '#BDBDBD' }}>Password</h6>
                    <div className='grayInfoFieldRight'>
                        <h6>********</h6>
                        <img className='editPencil' src='/JTP/shared-assets/images/EditPencilIcon.png' style={{ width: '1.5rem' }} />
                    </div>
                </div>
                <div className='grayInfoField'>
                    <h6 style={{ color: '#BDBDBD' }}>Username</h6>
                    <div className='grayInfoFieldRight'>
                        <h6>{username}</h6>
                        <img className='editPencil' src='/JTP/shared-assets/images/EditPencilIcon.png' style={{ width: '1.5rem' }} />
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', gap: '1rem' }}>
                    <div className='grayInfoField' style={{ width: 'calc(50% - 1rem)' }}>
                        <h6 style={{ color: '#BDBDBD' }}>Sign out</h6>
                        <button
                            className='iconButton medium'
                            style={{ background: '#aa4444', marginRight: '-0.8rem' }}
                            onClick={handleClickSignOut}
                        >
                            <img src='/JTP/shared-assets/images/ArrowRight.svg' style={{ width: '1.5rem' }} />
                        </button>
                    </div>
                    <div className='grayInfoField' style={{ width: 'calc(50% - 1rem)' }}>
                        <h6 style={{ color: '#dd1a1a' }}>Delete account</h6>
                        <button
                            className='iconButton medium'
                            style={{ background: '#cc2222', marginRight: '-0.8rem' }}
                            onClick={handleClickDeleteAccount}
                        >
                            <img src='/JTP/shared-assets/images/RemoveCircleIcon.svg' style={{ width: '1.5rem' }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SectionAppearance({ dropdownTheme, dropdownFontSize, dropdownsCount, settings, setSettings }) {
    const handleClickTheme = () => {
        if (dropdownTheme.current) {
            dropdownTheme.current.style.display = 'block';
            dropdownsCount.current += 1;
        }
    };

    const handleClickFontSize = () => {
        if (dropdownFontSize.current) {
            dropdownFontSize.current.style.display = 'block';
            dropdownsCount.current += 1;
        }
    };

    return (
        <div ref={useContext(ProfileContext).sections[3]} className='profileSection' style={{ zIndex: '1' }}>
            <h2>Apeearance</h2>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className='grayInfoField'>
                    <h6 style={{ color: '#BDBDBD' }}>Theme</h6>
                    <div className='grayInfoFieldRight'>
                        <h6>{settings.theme}</h6>
                        <img
                            className='dropdownChevron'
                            src='/JTP/shared-assets/images/ChevronDown.svg'
                            style={{ width: '1.5rem' }}
                            onClick={handleClickTheme}
                        />
                        <div ref={dropdownTheme} className='dropdownMenu'>
                            <div className='dropdownElement' onClick={() => setSettings((prev) => ({ ...prev, theme: 'Dark' }))}>
                                <h6>Dark</h6>
                            </div>
                            <div className='dropdownElement' onClick={() => setSettings((prev) => ({ ...prev, theme: 'Light' }))}>
                                <h6>Light</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grayInfoField'>
                    <h6 style={{ color: '#BDBDBD' }}>Font size</h6>
                    <div className='grayInfoFieldRight'>
                        <h6>{settings.fontSize}</h6>
                        <img
                            className='dropdownChevron'
                            src='/JTP/shared-assets/images/ChevronDown.svg'
                            style={{ width: '1.5rem' }}
                            onClick={handleClickFontSize}
                        />
                        <div ref={dropdownFontSize} className='dropdownMenu'>
                            <div className='dropdownElement' onClick={() => setSettings((prev) => ({ ...prev, fontSize: 'Little' }))}>
                                <h6>Little</h6>
                            </div>
                            <div className='dropdownElement' onClick={() => setSettings((prev) => ({ ...prev, fontSize: 'Medium' }))}>
                                <h6>Medium</h6>
                            </div>
                            <div className='dropdownElement' onClick={() => setSettings((prev) => ({ ...prev, fontSize: 'Large' }))}>
                                <h6>Large</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SectionLanguage() {
    return (
        <div ref={useContext(ProfileContext).sections[4]} className='profileSection' style={{ minHeight: '1000px' }}>
            <h2>Language</h2>
        </div>
    );
}
