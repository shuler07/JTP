import { useContext } from 'react';

import BetSection from '../BetSection';
import PredictionSection from '../PredictionSection';
import HistorySection from '../HistorySection';
import SpinSection from '../SpinSection';

import { WHEEL_COLOR_VALUES, WHEEL_KOAF_VALUES } from '../../data';
import { WheelContext } from '../../WheelPageApp';

export default function WheelSideContainer({ startEvent }) {

    // Context

    const wheelContext = useContext(WheelContext);

    const history = wheelContext.history;

    return (
        <div className='sideContainer'>
            <BetSection gameContext={wheelContext} />
            <PredictionSection gameContext={wheelContext} predictionValues={WHEEL_COLOR_VALUES} koafValues={WHEEL_KOAF_VALUES} />
            <HistorySection history={history} />
            <SpinSection page='Wheel' gameContext={wheelContext} koafValues={WHEEL_KOAF_VALUES} startEvent={startEvent} />
        </div>
    );
};