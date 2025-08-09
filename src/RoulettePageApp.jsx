import { useEffect, useState, useContext, useRef, memo } from 'react';
import { AppContext } from './MainApp';

import RouletteMainWindow from './components/roulette/RouletteMainWindow';
import LastGames from './components/LastGames';
import Statistics from './components/Statistics';

import {
    GetRouletteHistoryArray,
    GetRouletteLastGamesArray,
    GetRouletteStatistics,
    UpdateRouletteStatistics,
    ROULETTE_STATISTICS_TEXTS,
    ROULETTE_STATISTICS_CHARS,
} from './data';

export default function RoulettePageApp() {
    // Context

    const context = useContext(AppContext);
    useEffect(() => {
        context.setPage('Roulette');
    }, []);

    // Spin info / Disabled buttons

    const [spinInfo, setSpinInfo] = useState({
        bet: 0,
        color: '',
    });
    const [isDisabled, setIsDisabled] = useState(false);

    // History, Last games, Statistics

    const [historyArray, setHistoryArray] = useState(GetRouletteHistoryArray());
    useEffect(() => {
        window.localStorage.setItem('ROULETTE_HISTORY_ARRAY', JSON.stringify(historyArray));
    }, [historyArray]);

    const [lastGamesArray, setLastGamesArray] = useState(GetRouletteLastGamesArray());
    useEffect(() => {
        window.localStorage.setItem('ROULETTE_LAST_GAMES_ARRAY', JSON.stringify(lastGamesArray));
    }, [lastGamesArray]);

    const isStatsLoaded = useRef(false);
    const [statistics, setStatistics] = useState([]);
    useEffect(() => {
        if (isStatsLoaded.current) UpdateRouletteStatistics(statistics);
    }, [statistics]);

    async function GetStatistics() {
        const stats = await GetRouletteStatistics();
        setStatistics(stats);
        isStatsLoaded.current = true;
    }

    if (context.auth.currentUser && !isStatsLoaded.current) GetStatistics();

    // Memo

    const MemoizedLastGames = memo(() => <LastGames lastGamesArray={lastGamesArray} />);
    const MemoizedStatistics = memo(() =>
        <Statistics statistics={statistics} statisticsTexts={ROULETTE_STATISTICS_TEXTS} statisticsChars={ROULETTE_STATISTICS_CHARS} />
    );

    return (
        <main>
            <RouletteMainWindow
                balance={context.balance}
                setBalance={context.setBalance}
                spinInfo={spinInfo}
                setSpinInfo={setSpinInfo}
                isDisabled={isDisabled}
                setIsDisabled={setIsDisabled}
                historyArray={historyArray}
                setHistoryArray={setHistoryArray}
                setLastGamesArray={setLastGamesArray}
                setStatistics={setStatistics}
                setOverallStatistics={context.setOverallStatistics}
            />
            <MemoizedLastGames />
            <MemoizedStatistics />
        </main>
    );
}
