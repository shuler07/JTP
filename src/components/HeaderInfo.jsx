import './HeaderInfo.css'

import { HEADER_POPUP_TEXTS } from '../data';

export default function HeaderInfo({ page }) {
    const popup = HEADER_POPUP_TEXTS[page];

    function GetInfoImage() {
        if (popup == undefined) return;
        return (
            <img id='headerInfoImage' src='./shared-assets/images/InfoIcon.png'></img>
        );
    };

    function GetInfoPopup() {
        if (popup == undefined) return;
        return (
            <div id='headerInfoPopup'>
                <h6>{popup}</h6>
            </div>
        );
    };

    return (
        <div id='headerInfoContainer'>
            <h1>{page}</h1>
            {GetInfoImage()}
            {GetInfoPopup()}
        </div>
    );
};