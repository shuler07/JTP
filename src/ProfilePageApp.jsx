import './ProfilePageApp.css';

import { useContext, useEffect, useRef, useState, createContext, useMemo } from 'react';
import { AppContext } from './MainApp';

import ProfileSidebar from './components/profile/ProfileSidebar';
import ProfileMainWindow from './components/profile/ProfileMainWindow';

import { SIDEBAR_TEXTS, htmlElement, pxToNum } from './data';

export const ProfileContext = createContext();
const SIDEBAR_OFFSET = 200;
const MAX_CIRCLES_OFFSET = 500;

export default function ProfilePageApp() {

    // Context

    const context = useContext(AppContext);
    useEffect(() => {
        context.setPage('Profile');
    }, []);

    // Profile sections

    const [section, setSection] = useState('Profile');

    const sections = [useRef(), useRef(), useRef(), useRef(), useRef()];
    const sectionsHeight = useRef([0, 0, 0, 0, 0]);
    const sectionsEdges = useRef([0, 0, 0, 0, 0]);

    useEffect(UpdateSectionsEdges, []);

    window.addEventListener('resize', UpdateSectionsEdges);

    function UpdateSectionsEdges() {
        const headerElement = window.getComputedStyle(document.getElementsByTagName('header')[0]);
        sections.forEach((elem, index) => {
            const element = window.getComputedStyle(elem.current);
            sectionsHeight.current[index] = pxToNum(element.height) + pxToNum(element.paddingTop) * 2;
            if (index == 1)
                sectionsEdges.current[index] =
                    pxToNum(headerElement.height) + pxToNum(headerElement.paddingTop) + sectionsHeight.current[index - 1] + 20;
            if (index > 1) sectionsEdges.current[index] = sectionsEdges.current[index - 1] + sectionsHeight.current[index - 1] + 20;
        });
    }

    window.addEventListener('scroll', () => {
        UpdateSections();
        UpdateCircles();
    });

    let fromScroll;
    let toScroll;
    let stepScroll;

    function chooseSection(section, index) {
        fromScroll = htmlElement.scrollTop;
        toScroll = index == 0 ? 88 : sectionsEdges.current[index];
        stepScroll = toScroll - fromScroll >= 0 ? 25 : -25;
        SoftScroll();
        setSection(section);
    }

    function SoftScroll() {
        fromScroll += stepScroll;
        htmlElement.scrollTop = fromScroll;
        if ((stepScroll >= 0 && fromScroll < toScroll) || (stepScroll < 0 && fromScroll > toScroll)) {
            setTimeout(SoftScroll, 10);
        } else htmlElement.scrollTop = toScroll;
    }

    function UpdateSections() {
        const currentScroll = htmlElement.scrollTop;
        for (let i = 1; i < 5; i++) {
            if (currentScroll < sectionsEdges.current[i] - SIDEBAR_OFFSET) {
                setSection(SIDEBAR_TEXTS[i - 1]);
                break;
            }
        }
        if (currentScroll >= sectionsEdges.current[4] - SIDEBAR_OFFSET) {
            setSection(SIDEBAR_TEXTS[4]);
        }
    }

    // Circles

    const bgCirclesContainer = useRef();
    
    function UpdateCircles() {
        if (!bgCirclesContainer.current) return;
        const htmlHeight = pxToNum(window.getComputedStyle(htmlElement).height);
        const htmlScroll = htmlElement.scrollTop;
        bgCirclesContainer.current.style.top = `${-MAX_CIRCLES_OFFSET / htmlHeight * htmlScroll}px`;
    }

    // Memo

    const MemoizedProfileSidebar = useMemo(() => <ProfileSidebar section={section} chooseSection={chooseSection} />, [section]);

    return (
        <ProfileContext.Provider
            value={{
                sections,
            }}
        >
            <main id='profileMainContainer'>
                {MemoizedProfileSidebar}
                <ProfileMainWindow reference={bgCirclesContainer} />
                <div id='sideDivHelper'></div>
            </main>
        </ProfileContext.Provider>
    );
}
