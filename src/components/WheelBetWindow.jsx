import './WheelBetWindow.css';
import './BetButton.css';
import './ColorButton.css';
import { BET_VALUES, COLOR_VALUES, KOAF_BY_COLOR_VALUES } from '../data';

export default function WheelBetWindow({ spinInfo, setSpinInfo, isDisabled }) {
    function GetPossibleWinText() {
        if (spinInfo.bet != 0 && spinInfo.color != '') {
            return `Possible win - ${spinInfo.bet * KOAF_BY_COLOR_VALUES[spinInfo.color]} $`;
        }
        return 'Choose bet and color';
    }

    return (
        <div id='wheelBetWindow'>
            <h2>Bet</h2>
            <div className='wheelBetContainer'>
                {BET_VALUES.map((value, index) => (
                    <BetButton
                        key={`betButton${index}`}
                        bet={value}
                        isActive={spinInfo.bet == value}
                        isDisabled={isDisabled}
                        setSpinInfo={setSpinInfo}
                    />
                ))}
            </div>
            <input
                id='wheelBetCustom'
                className={
                    (!BET_VALUES.includes(spinInfo.bet) && spinInfo.bet != 0) ? 'active' : null
                }
                type='number'
                disabled={isDisabled}
                placeholder={`Your bet - ${spinInfo.bet} $`}
                onBlur={(e) => {
                    const value = parseFloat(e.target.value);
                    value > 0.5
                        ? setSpinInfo((prev) => ({ ...prev, bet: value }))
                        : setSpinInfo((prev) => ({ ...prev, bet: 0.5 }));
                    e.target.value = '';
                }}
            ></input>
            <h2>Color</h2>
            <div className='wheelBetContainer'>
                {COLOR_VALUES.map((value, index) => (
                    <ColorButton
                        key={`colorButton${index}`}
                        color={value}
                        koaf={KOAF_BY_COLOR_VALUES[value]}
                        isActive={spinInfo.color == value}
                        isDisabled={isDisabled}
                        setSpinInfo={setSpinInfo}
                    />
                ))}
            </div>
            <h2>{GetPossibleWinText()}</h2>
        </div>
    );
}

function BetButton({ bet, isActive, isDisabled, setSpinInfo }) {
    return (
        <button
            className={isActive ? 'betButton active' : 'betButton'}
            onClick={() => setSpinInfo((prev) => ({ ...prev, bet: bet }))}
            disabled={isDisabled || isActive}
        >
            {bet} $
        </button>
    );
}

function ColorButton({ color, koaf, isActive, isDisabled, setSpinInfo }) {
    const ID = `button${color}`;

    return (
        <button
            id={ID}
            className={isActive ? 'colorButton active' : 'colorButton'}
            onClick={() => setSpinInfo((prev) => ({ ...prev, color: color }))}
            disabled={isDisabled || isActive}
        >{`${color} x${koaf}`}</button>
    );
}
