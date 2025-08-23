import { useContext } from 'react';
import { RouletteContext } from '../../RoulettePageApp';

import BetSection from '../BetSection';
import PredictionSection from '../PredictionSection';
import HistorySection from '../HistorySection';
import SpinSection from '../SpinSection';

import { ROULETTE_COLOR_VALUES, ROULETTE_KOAF_VALUES } from '../../data';

export default function RouletteSideContainer({ startEvent }) {

    // Context

    const rouletteContext = useContext(RouletteContext);

    const history = rouletteContext.history;

    return (
        <div className='sideContainer'>
            <BetSection gameContext={rouletteContext} />
            <PredictionSection gameContext={rouletteContext} predictionValues={ROULETTE_COLOR_VALUES} koafValues={ROULETTE_KOAF_VALUES} />
            <HistorySection history={history} />
            <SpinSection page='Roulette' gameContext={rouletteContext} koafValues={ROULETTE_KOAF_VALUES} startEvent={startEvent} />
        </div>
    );
}
