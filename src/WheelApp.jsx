import './WheelApp.css';
import Header from './components/Header';
import WheelMainWindow from './components/WheelMainWindow';
import WheelBetWindow from './components/WheelBetWindow';
import WheelHistoryWindow from './components/WheelHistoryWindow';
import WheelLastGames from './components/WheelLastGames';
import WheelStatistics from './components/WheelStatistics';
import {
    WHEEL_HISTORY_ARRAY,
    WHEEL_HISTORY_ARRAY_LIMIT,
    WHEEL_LAST_GAMES_ARRAY,
    WHEEL_LAST_GAMES_ARRAY_LIMIT,
    WHEEL_STATISTICS,
} from './data';
import { useEffect, useState } from 'react';
import { userBalance } from './data';

export default function App() {
    const [balance, setBalance] = useState(userBalance);
    useEffect(() => {
        window.localStorage.setItem('balance', balance);
    }, [balance]);

    const [spinInfo, setSpinInfo] = useState({
        bet: 0,
        color: '',
    });
    const [isDisabled, setIsDisabled] = useState(false);

    const [wheelHistoryArray, setWheelHistoryArray] = useState(WHEEL_HISTORY_ARRAY);
    useEffect(() => {
        window.localStorage.setItem('WHEEL_HISTORY_ARRAY', JSON.stringify(wheelHistoryArray));
    }, [wheelHistoryArray]);
    
    const [wheelLastGamesArray, setWheelLastGamesArray] = useState(WHEEL_LAST_GAMES_ARRAY);
    useEffect(() => {
        window.localStorage.setItem('WHEEL_LAST_GAMES_ARRAY', JSON.stringify(wheelLastGamesArray));
    }, [wheelLastGamesArray]);

    const [wheelStatistics, setWheelStatistics] = useState(WHEEL_STATISTICS);
    useEffect(() => {
        window.localStorage.setItem('WHEEL_STATISTICS', JSON.stringify(wheelStatistics));
    }, [wheelStatistics]);

    return (
        <>
            <Header page='Wheel' balance={balance} />
            <main>
                <section id='wheelSection'>
                    <WheelMainWindow
                        balance={balance}
                        setBalance={setBalance}
                        spinInfo={spinInfo}
                        isDisabled={isDisabled}
                        setIsDisabled={setIsDisabled}
                        setWheelHistoryArray={setWheelHistoryArray}
                        setWheelLastGamesArray={setWheelLastGamesArray}
                        setWheelStatistics={setWheelStatistics}
                    />
                    <div id='wheelSideWindows'>
                        <WheelBetWindow
                            spinInfo={spinInfo}
                            setSpinInfo={setSpinInfo}
                            isDisabled={isDisabled}
                        />
                        <WheelHistoryWindow wheelHistoryArray={wheelHistoryArray} />
                    </div>
                </section>
                <WheelLastGames wheelLastGamesArray={wheelLastGamesArray} />
                <WheelStatistics wheelStatistics={wheelStatistics} />
            </main>
        </>
    );
}
