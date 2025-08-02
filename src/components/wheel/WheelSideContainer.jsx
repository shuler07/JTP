import BetSection from '../BetSection';
import ColorSection from '../ColorSection';
import HistorySection from '../HistorySection';
import SpinSection from '../SpinSection';

import { WHEEL_COLOR_VALUES, WHEEL_KOAF_VALUES } from '../../data';

export default function WheelSideContainer({ balance, spinInfo, setSpinInfo, isDisabled, StartEvent, historyArray }) {
    return (
        <div className='sideContainer'>
            <BetSection spinInfo={spinInfo} setSpinInfo={setSpinInfo} isDisabled={isDisabled} />
            <ColorSection
                spinInfo={spinInfo}
                setSpinInfo={setSpinInfo}
                isDisabled={isDisabled}
                colorValues={WHEEL_COLOR_VALUES}
                koafValues={WHEEL_KOAF_VALUES}
            />
            <HistorySection historyArray={historyArray} />
            <SpinSection
                page='Wheel'
                balance={balance}
                spinInfo={spinInfo}
                koafValues={WHEEL_KOAF_VALUES}
                isDisabled={isDisabled}
                StartEvent={StartEvent}
            />
        </div>
    );
}
