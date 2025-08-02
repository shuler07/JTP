import './SpinSection.css';

export default function SpinSection({ page, balance, spinInfo, koafValues, isDisabled, StartEvent }) {
    function GetPossibleWinText() {
        if (spinInfo.bet != 0 && spinInfo.color != '') {
            return `Possible win - ${spinInfo.bet * koafValues[spinInfo.color]} $`;
        }
        return 'Choose bet and color';
    }

    return (
        <div id='spinSection'>
            <button
                id='spinButton'
                className={page}
                disabled={isDisabled || spinInfo.bet > balance || spinInfo.bet == 0 || spinInfo.color == ''}
                onClick={StartEvent}
            >
                Spin {spinInfo.bet} $<h2>{GetPossibleWinText()}</h2>
            </button>
        </div>
    );
}