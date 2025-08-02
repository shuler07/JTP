import BetSection from '../BetSection';
import ColorSection from '../ColorSection';
import HistorySection from '../HistorySection';
import SpinSection from '../SpinSection';

import { ROULETTE_COLOR_VALUES, ROULETTE_KOAF_VALUES } from '../../data';

export default function RouletteSideContainer({ balance, spinInfo, setSpinInfo, isDisabled, StartEvent, historyArray }) {
    return (
        <div className='sideContainer'>
            <BetSection spinInfo={spinInfo} setSpinInfo={setSpinInfo} isDisabled={isDisabled} />
            <ColorSection
                spinInfo={spinInfo}
                setSpinInfo={setSpinInfo}
                isDisabled={isDisabled}
                colorValues={ROULETTE_COLOR_VALUES}
                koafValues={ROULETTE_KOAF_VALUES}
            />
            <HistorySection historyArray={historyArray} />
            <SpinSection
                page='Roulette'
                balance={balance}
                spinInfo={spinInfo}
                koafValues={ROULETTE_KOAF_VALUES}
                isDisabled={isDisabled}
                StartEvent={StartEvent}
            />
        </div>
    );
}
