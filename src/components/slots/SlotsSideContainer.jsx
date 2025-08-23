import { useContext } from 'react';

import BetSection from '../BetSection';
import PredictionSection from '../PredictionSection';
import HistorySection from '../HistorySection';
import SpinSection from '../SpinSection';

import { SLOTS_FIGURE_VALUES, SLOTS_KOAF_VALUES } from '../../data';
import { SlotsContext } from '../../SlotsPageApp';

export default function SlotsSideContainer({ startEvent }) {

    // Context

    const slotsContext = useContext(SlotsContext);

    const history = slotsContext.history;

    return (
        <div className='sideContainer'>
            <BetSection gameContext={slotsContext} />
            <PredictionSection gameContext={slotsContext} predictionValues={SLOTS_FIGURE_VALUES} koafValues={SLOTS_KOAF_VALUES} />
            <HistorySection history={history} />
            <SpinSection page='Slots' gameContext={slotsContext} koafValues={SLOTS_KOAF_VALUES} startEvent={startEvent} />
        </div>
    );
};