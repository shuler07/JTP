import './PredictionSection.css';

import { COLOR_BY_VALUE, FIGURE_BY_VALUE } from '../data';

export default function PredictionSection({ gameContext, predictionValues, koafValues }) {

    // Context

    const spinInfo = gameContext.spinInfo;
    const setSpinInfo = gameContext.setSpinInfo;
    const isDisabled = gameContext.isDisabled;

    const type = Object.hasOwn(spinInfo, 'color') ? 'color' : 'figure';

    return (
        <div className='sideSection'>
            <h2>Prediction</h2>
            <div className='sideSectionFlexContainer'>
                {predictionValues.map((value, index) => (
                    <PredictionButton
                        key={`keyPrediction${index}`}
                        type={type}
                        value={value}
                        koaf={koafValues[value]}
                        isActive={type === 'color' ? spinInfo.color === value : spinInfo.figure === value}
                        isDisabled={isDisabled}
                        setSpinInfo={setSpinInfo}
                    />
                ))}
            </div>
        </div>
    );
}

function PredictionButton({ type, value, koaf, isActive, isDisabled, setSpinInfo }) {
    return (
        <button
            className={isActive ? 'predictionButton active' : 'predictionButton'}
            onClick={() => setSpinInfo((prev) => ({ ...prev, [type]: value }))}
            disabled={isDisabled || isActive}
        >
            {type === 'color' && <div style={{ background: `#${COLOR_BY_VALUE[value]}` }}></div>}
            {type === 'figure' && <img src={FIGURE_BY_VALUE[value]}></img>}
            <h6>{(type === 'figure' && isActive) ? `x${koaf * 0.1} x${koaf} x${koaf * 5}` : `x${koaf}`}</h6>
        </button>
    );
}
