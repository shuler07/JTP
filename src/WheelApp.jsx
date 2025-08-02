import Header from './components/Header';
import WheelMainWindow from './components/wheel/WheelMainWindow';
import LastGames from './components/LastGames';
import Statistics from './components/Statistics';

import { useEffect, useState, useRef } from 'react';
import {
    WHEEL_HISTORY_ARRAY,
    WHEEL_LAST_GAMES_ARRAY,
    WHEEL_STATISTICS,
    WHEEL_STATISTICS_TEXTS,
    WHEEL_STATISTICS_CHARS,
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

    const [historyArray, setHistoryArray] = useState(WHEEL_HISTORY_ARRAY);
    useEffect(() => {
        window.localStorage.setItem('WHEEL_HISTORY_ARRAY', JSON.stringify(historyArray));
    }, [historyArray]);

    const [lastGamesArray, setLastGamesArray] = useState(WHEEL_LAST_GAMES_ARRAY);
    useEffect(() => {
        window.localStorage.setItem('WHEEL_LAST_GAMES_ARRAY', JSON.stringify(lastGamesArray));
    }, [lastGamesArray]);

    const [statistics, setStatistics] = useState(WHEEL_STATISTICS);
    useEffect(() => {
        window.localStorage.setItem('WHEEL_STATISTICS', JSON.stringify(statistics));
    }, [statistics]);

    return (
        <>
            <Header page='Wheel' balance={balance} />
            <main>
                <WheelMainWindow
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
                    statistics={statistics}
                    statisticsTexts={WHEEL_STATISTICS_TEXTS}
                    statisticsChars={WHEEL_STATISTICS_CHARS}
                />
            </main>
        </>
    );
}
