import Header from './components/Header';
import RouletteMainWindow from './components/roulette/RouletteMainWindow';
import LastGames from './components/LastGames';
import Statistics from './components/Statistics';

import { useEffect, useRef, useState } from 'react';
import {
    ROULETTE_HISTORY_ARRAY,
    ROULETTE_LAST_GAMES_ARRAY,
    ROULETTE_STATISTICS,
    ROULETTE_STATISTICS_TEXTS,
    ROULETTE_STATISTICS_CHARS,
    UpdateBalance,
} from './data';
import { auth, firestore } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function App() {
    // Balance
    const balanceFlag = useRef(false);

    const [balance, setBalance] = useState(window.sessionStorage.getItem('balance'));
    useEffect(() => {
        if (auth.currentUser && balanceFlag.current) UpdateBalance(balance);
    }, [balance]);

    async function GetBalance() {
        const snapshot = await getDoc(doc(firestore, 'users', auth.currentUser.uid));
        setBalance(snapshot.data().balance);
        balanceFlag.current = true;
    }

    if (auth.currentUser && !balanceFlag.current) GetBalance();

    // Spin info / Disabled buttons

    const [spinInfo, setSpinInfo] = useState({
        bet: 0,
        color: '',
    });
    const [isDisabled, setIsDisabled] = useState(false);

    // History, Last games, Statistics

    const [historyArray, setHistoryArray] = useState(ROULETTE_HISTORY_ARRAY);
    useEffect(() => {
        window.localStorage.setItem('ROULETTE_HISTORY_ARRAY', JSON.stringify(historyArray));
    }, [historyArray]);

    const [lastGamesArray, setLastGamesArray] = useState(ROULETTE_LAST_GAMES_ARRAY);
    useEffect(() => {
        window.localStorage.setItem('ROULETTE_LAST_GAMES_ARRAY', JSON.stringify(lastGamesArray));
    }, [lastGamesArray]);

    const [statisticks, setStatistics] = useState(ROULETTE_STATISTICS);
    useEffect(() => {
        window.localStorage.setItem('ROULETTE_STATISTICS', JSON.stringify(statisticks));
    }, [statisticks]);

    return (
        <>
            <Header page='Roulette' balance={balance} />
            <main>
                <RouletteMainWindow
                    balance={balance}
                    setBalance={setBalance}

                    spinInfo={spinInfo}
                    setSpinInfo={setSpinInfo}

                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}

                    historyArray={historyArray}
                    setHistoryArray={setHistoryArray}

                    setLastGamesArray={setLastGamesArray}
                    
                    setStatistics={setStatistics}
                />
                <LastGames lastGamesArray={lastGamesArray} />
                <Statistics
                    statistics={statisticks}
                    statisticsTexts={ROULETTE_STATISTICS_TEXTS}
                    statisticsChars={ROULETTE_STATISTICS_CHARS}
                />
            </main>
        </>
    );
}
