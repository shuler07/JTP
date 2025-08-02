import './ColorSection.css';

export default function ColorSection({ spinInfo, setSpinInfo, isDisabled, colorValues, koafValues }) {
    return (
        <div className='sideSection'>
            <h2>Color</h2>
            <div className='sideSectionFlexContainer'>
                {colorValues.map((value, index) => (
                    <ColorButton
                        key={`keyColor${index}`}
                        color={value}
                        koaf={koafValues[value]}
                        isActive={spinInfo.color == value}
                        isDisabled={isDisabled}
                        setSpinInfo={setSpinInfo}
                    />
                ))}
            </div>
        </div>
    );
}

function ColorButton({ color, koaf, isActive, isDisabled, setSpinInfo }) {
    return (
        <button
            id={`button${color}`}
            className={isActive ? 'colorButton active' : 'colorButton'}
            onClick={() => setSpinInfo((prev) => ({ ...prev, color: color }))}
            disabled={isDisabled || isActive}
        >{`${color} x${koaf}`}</button>
    );
}