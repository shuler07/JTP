import './WheelMainContainer.css';

export default function WheelMainContainer({ wheelAngle }) {
    return (
        <div id='mainContainer'>
            <img id='mainImage' src='./shared-assets/images/Wheel.png' style={{ rotate: `${wheelAngle}deg` }}></img>
            <img id='arrowImage' src='./shared-assets/images/WheelArrow.png'></img>
            <div id='mainBlur'></div>
        </div>
    );
}
