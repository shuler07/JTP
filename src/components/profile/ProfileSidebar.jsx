import './ProfileSidebar.css';

import { SIDEBAR_TEXTS } from '../../data';

export default function ProfileSidebar({ section, chooseSection }) {
    function GetSidebar() {
        return SIDEBAR_TEXTS.map((value, index) => (
            <SidebarElement key={`keySidebar${index}`} isActive={section == value ? 'active' : ''} text={value} index={index} chooseSection={chooseSection} />
        ));
    }

    return (
        <div id='profileSidebarContainer'>
            {GetSidebar()}
        </div>
    );
}

function SidebarElement({ isActive, text, index, chooseSection }) {
    return (
        <div className={`sidebarElement ${isActive}`} onClick={() => chooseSection(text, index)} >
            <h6>{text}</h6>
        </div>
    )
}