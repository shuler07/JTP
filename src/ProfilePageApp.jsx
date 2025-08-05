import './ProfilePageApp.css';

import { useContext, useEffect, useRef, useState, createContext, memo } from 'react';
import { AppContext } from './MainApp';

import ProfileSidebar from './components/profile/ProfileSidebar';
import ProfileMainWindow from './components/profile/ProfileMainWindow';

import { SIDEBAR_TEXTS } from './data';

export const ProfileContext = createContext();

export default function ProfilePageApp() {
    const pxToNum = (value) => parseFloat(value.replace('px', ''));

    // Context

    const context = useContext(AppContext);
    useEffect(() => {
        context.setPage('Profile');
    }, []);

    // Profile sections

    const [section, setSection] = useState('Profile');
    const htmlElement = document.getElementsByTagName('html')[0];

    const sections = [useRef(), useRef(), useRef(), useRef(), useRef()];
    const sectionsHeight = useRef([0, 0, 0, 0, 0]);
    const sectionsEdges = useRef([0, 0, 0, 0, 0]);

    useEffect(() => {
        const headerElement = window.getComputedStyle(document.getElementsByTagName('header')[0]);
        sections.forEach((elem, index) => {
            const element = window.getComputedStyle(elem.current);
            sectionsHeight.current[index] = pxToNum(element.height) + pxToNum(element.paddingTop) * 2;
            if (index == 1)
                sectionsEdges.current[index] =
                    pxToNum(headerElement.height) + pxToNum(headerElement.paddingTop) + sectionsHeight.current[index - 1] + 20;
            if (index > 1) sectionsEdges.current[index] = sectionsEdges.current[index - 1] + sectionsHeight.current[index - 1] + 20;
        });
    }, []);

    const offset = 200;
    window.addEventListener('scroll', () => {
        const currentScroll = htmlElement.scrollTop;
        for (let i = 1; i < 5; i++) {
            if (currentScroll < sectionsEdges.current[i] - offset) {
                setSection(SIDEBAR_TEXTS[i - 1]);
                break;
            }
        }
        if (currentScroll >= sectionsEdges.current[4] - offset) {
            setSection(SIDEBAR_TEXTS[4]);
        }
    });

    function chooseSection(section, index) {
        fromScroll = htmlElement.scrollTop;
        toScroll = index == 0 ? 88 : sectionsEdges.current[index];
        stepScroll = (toScroll - fromScroll) / 50;
        SoftScroll();
        setSection(section);
    }

    let fromScroll;
    let toScroll;
    let stepScroll;

    function SoftScroll() {
        fromScroll += stepScroll;
        htmlElement.scrollTop = fromScroll;
        if ((stepScroll >= 0 && fromScroll < toScroll) || (stepScroll < 0 && fromScroll > toScroll)) {
            setTimeout(SoftScroll, 5);
        } else htmlElement.scrollTop = toScroll;
    }

    const MemoizedProfileMainWindow = memo(() => <ProfileMainWindow />);

    return (
        <ProfileContext.Provider
            value={{
                sections,
            }}
        >
            <main id='profileMainContainer'>
                <ProfileSidebar section={section} chooseSection={chooseSection} />
                <MemoizedProfileMainWindow />   
                <div id='sideDivHelper'></div>
            </main>
        </ProfileContext.Provider>
    );
}
