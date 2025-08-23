import { useContext } from 'react';
import './SpinSection.css';
import { AppContext } from '../MainApp';

export default function SpinSection({ page, gameContext, koafValues, startEvent }) {

    // Context

    const context = useContext(AppContext);

    const type = Object.hasOwn(gameContext.spinInfo, 'color') ? 'color' : 'figure';

    const balance = context.balance;
    const bet = gameContext.spinInfo.bet;
    const gameResult = type === 'color' ? gameContext.spinInfo.color : gameContext.spinInfo.figure;
    const isDisabled = gameContext.isDisabled;

    function GetPossibleWinText() {
        if (bet != 0 && gameResult != '') {
            if (type === 'color') return `Possible win - ${bet * koafValues[gameResult]} $`;
            else return `Possible win - from ${bet * koafValues[gameResult] * 0.1} $ to ${bet * koafValues[gameResult] * 5} $`;
        }
        return 'Choose bet and your prediction';
    }

    return (
        <div id='spinSection'>
            <button
                id='spinButton'
                className={page}
                disabled={isDisabled || bet > balance || bet == 0 || gameResult == ''}
                onClick={startEvent}
            >
                Spin {bet} $<h2>{GetPossibleWinText()}</h2>
            </button>
        </div>
    );
}