import { useEffect, useState, useContext, useRef, memo } from 'react';
import { AppContext } from './MainApp';

import WheelMainWindow from './components/wheel/WheelMainWindow';
import LastGames from './components/LastGames';
import Statistics from './components/Statistics';

import {
    GetWheelHistoryArray,
    GetWheelLastGamesArray,
    GetWheelStatistics,
    UpdateWheelStatistics,
    WHEEL_STATISTICS_TEXTS,
    WHEEL_STATISTICS_CHARS,
} from './data';

export default function WheelPageApp() {
    // Context

    const context = useContext(AppContext);
    useEffect(() => {
        context.setPage('Wheel');
    }, []);

    // Spin info / Disabled buttons

    const [spinInfo, setSpinInfo] = useState({
        bet: 0,
        color: '',
    });
    const [isDisabled, setIsDisabled] = useState(false);

    // History, Last games, Statistics

    const [historyArray, setHistoryArray] = useState(GetWheelHistoryArray());
    useEffect(() => {
        window.localStorage.setItem('WHEEL_HISTORY_ARRAY', JSON.stringify(historyArray));
    }, [historyArray]);

    const [lastGamesArray, setLastGamesArray] = useState(GetWheelLastGamesArray());
    useEffect(() => {
        window.localStorage.setItem('WHEEL_LAST_GAMES_ARRAY', JSON.stringify(lastGamesArray));
    }, [lastGamesArray]);

    const isStatsLoaded = useRef(false);
    const [statistics, setStatistics] = useState([]);
    useEffect(() => {
        if (isStatsLoaded.current) UpdateWheelStatistics(statistics);
    }, [statistics]);

    async function GetStatistics() {
        const stats = await GetWheelStatistics();
        setStatistics(stats);
        isStatsLoaded.current = true;
    }

    if (context.auth.currentUser && !isStatsLoaded.current) GetStatistics();

    const MemoizedLastGames = memo(() => <LastGames lastGamesArray={lastGamesArray} />);
    const MemoizedStatistics = memo(() => <Statistics statistics={statistics} statisticsTexts={WHEEL_STATISTICS_TEXTS} statisticsChars={WHEEL_STATISTICS_CHARS} />);

    return (
        <main>
            <WheelMainWindow
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
