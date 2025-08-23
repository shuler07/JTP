import './BetSection.css';

import { BET_VALUES } from '../data';

export default function BetSection({ gameContext }) {
    // Context

    const spinInfo = gameContext.spinInfo;
    const setSpinInfo = gameContext.setSpinInfo;
    const isDisabled = gameContext.isDisabled;

    function handleBlur(event) {
        const value = parseFloat(event.target.value);
        value > 0.5 ? setSpinInfo((prev) => ({ ...prev, bet: value })) : setSpinInfo((prev) => ({ ...prev, bet: 0.5 }));
        event.target.value = '';
    }

    return (
        <div className='sideSection'>
            <h2>Bet</h2>
            <div className='sideSectionFlexContainer'>
                {BET_VALUES.map((value, index) => (
                    <BetButton
                        key={`keyBet${index}`}
                        bet={value}
                        isActive={spinInfo.bet == value}
                        isDisabled={isDisabled}
                        setSpinInfo={setSpinInfo}
                    />
                ))}
            </div>
            <input
                className={!BET_VALUES.includes(spinInfo.bet) && spinInfo.bet != 0 ? 'active' : null}
                type='number'
                disabled={isDisabled}
                placeholder={`Your bet - ${spinInfo.bet} $`}
                onBlur={handleBlur}
            ></input>
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
