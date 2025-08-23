import { useContext, useEffect, useState, useRef, memo, createContext } from 'react';
import { AppContext } from './MainApp';

import SlotsMainWindow from './components/slots/SlotsMainWindow';
import LastGames from './components/LastGames';
import Statistics from './components/Statistics';

import {
    GetFromLocalStorageByKey,
    GetStatisticsByKey,
    UpdateStatisticsByKey,
    SLOTS_STATISTICS_TEXTS,
    SLOTS_STATISTICS_CHARS,
} from './data';

export const SlotsContext = createContext();

export default function SlotsPageApp() {
    // Context

    const context = useContext(AppContext);
    useEffect(() => {
        context.setPage('Slots');
    }, []);

    // Spin info / Disabled buttons

    const [spinInfo, setSpinInfo] = useState({
        bet: 0,
        figure: '',
    });
    const [isDisabled, setIsDisabled] = useState(false);

    // History, Last games, Statistics

    const [history, setHistory] = useState(GetFromLocalStorageByKey('SLOTS_HISTORY'));
    useEffect(() => {
        window.localStorage.setItem('SLOTS_HISTORY', JSON.stringify(history));
    }, [history]);

    const [lastGames, setLastGames] = useState(GetFromLocalStorageByKey('SLOTS_LAST_GAMES'));
    useEffect(() => {
        window.localStorage.setItem('SLOTS_LAST_GAMES', JSON.stringify(lastGames));
    }, [lastGames]);

    const isStatsLoaded = useRef(false);
    const [statistics, setStatistics] = useState([]);
    useEffect(() => {
        if (isStatsLoaded.current) UpdateStatisticsByKey('slotsStatistics', statistics);
    }, [statistics]);

    async function GetStatistics() {
        const stats = await GetStatisticsByKey('slotsStatistics');
        setStatistics(stats);
        isStatsLoaded.current = true;
    }

    if (context.auth.currentUser && !isStatsLoaded.current) GetStatistics();

    // Memo

    const MemoizedLastGames = memo(() => <LastGames lastGames={lastGames} />);
    const MemoizedStatistics = memo(() => <Statistics statistics={statistics} statisticsTexts={SLOTS_STATISTICS_TEXTS} statisticsChars={SLOTS_STATISTICS_CHARS} />);

    return (
        <main>
            <SlotsContext.Provider
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
                <SlotsMainWindow />
                <MemoizedLastGames />
                <MemoizedStatistics />
            </SlotsContext.Provider>
        </main>
    );
}
