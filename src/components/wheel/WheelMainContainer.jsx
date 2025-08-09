import './WheelMainContainer.css';

export default function WheelMainContainer({ wheelAngle }) {
    return (
        <div id='wheelMainContainer'>
            <img id='wheelMainImage' src='/JTP/shared-assets/images/Wheel.png' style={{ rotate: `${wheelAngle}deg` }}></img>
            <img id='wheelArrowImage' src='/JTP/shared-assets/images/WheelArrow.svg'></img>
            <div id='wheelMainBlur'></div>
        </div>
    );
}
