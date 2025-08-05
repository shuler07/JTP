import { useContext } from 'react';
import './ProfileMainWindow.css';
import { ProfileContext } from '../../ProfilePageApp';

export default function ProfileMainWindow() {
    return (
        <div id='profileMainWindow'>
            <SectionProfile />
            <SectionStatistics />
            <SectionAccount />
            <SectionAppearance />
            <SectionLanguage />
        </div>
    );
}

function SectionProfile() {
    return (
        <div ref={useContext(ProfileContext).sections[0]} className='profileSection'>
            <h2>Profile</h2>

        </div>
    );
}

function SectionStatistics() {
    return (
        <div ref={useContext(ProfileContext).sections[1]} className='profileSection'>
            <h2>Statistics</h2>
            
        </div>
    );
}

function SectionAccount() {
    return (
        <div ref={useContext(ProfileContext).sections[2]} className='profileSection'>
            <h2>Account</h2>
            
        </div>
    );
}

function SectionAppearance() {
    return (
        <div ref={useContext(ProfileContext).sections[3]} className='profileSection'>
            <h2>Apeearance</h2>
            
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