import { useEffect, useState, useContext, useRef, memo, createContext } from 'react';
import { AppContext } from './MainApp';

import WheelMainWindow from './components/wheel/WheelMainWindow';
import LastGames from './components/LastGames';
import Statistics from './components/Statistics';

import {
    GetFromLocalStorageByKey,
    GetStatisticsByKey,
    UpdateStatisticsByKey,
    WHEEL_STATISTICS_TEXTS,
    WHEEL_STATISTICS_CHARS,
} from './data';

export const WheelContext = createContext();

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

    const [history, setHistory] = useState(GetFromLocalStorageByKey('WHEEL_HISTORY'));
    useEffect(() => {
        window.localStorage.setItem('WHEEL_HISTORY', JSON.stringify(history));
    }, [history]);

    const [lastGames, setLastGames] = useState(GetFromLocalStorageByKey('WHEEL_LAST_GAMES'));
    useEffect(() => {
        window.localStorage.setItem('WHEEL_LAST_GAMES', JSON.stringify(lastGames));
    }, [lastGames]);

    const isStatsLoaded = useRef(false);
    const [statistics, setStatistics] = useState([]);
    useEffect(() => {
        if (isStatsLoaded.current) UpdateStatisticsByKey('wheelStatistics', statistics);
    }, [statistics]);

    async function GetStatistics() {
        const stats = await GetStatisticsByKey('wheelStatistics');
        setStatistics(stats);
        isStatsLoaded.current = true;
    }

    if (context.auth.currentUser && !isStatsLoaded.current) GetStatistics();

    // Memo

    const MemoizedLastGames = memo(() => <LastGames lastGames={lastGames} />);
    const MemoizedStatistics = memo(() => <Statistics statistics={statistics} statisticsTexts={WHEEL_STATISTICS_TEXTS} statisticsChars={WHEEL_STATISTICS_CHARS} />);

    return (
        <main>
            <WheelContext.Provider
                value={{
                    spinInfo,
                    setSpinInfo,
                    isDisabled,
                    setIsDisabled,
                    history,
                    setHistory,
                    setLastGames,
                    setStatistics,
                }}
            >
                <WheelMainWindow />
                <MemoizedLastGames />
                <MemoizedStatistics />
            </WheelContext.Provider>
        </main>
    );
}
