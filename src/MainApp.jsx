import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect, useRef } from 'react';

import { auth, firestore } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

import AppBackground from './components/AppBackground';
import Alert from './components/Alert';
import Header from './components/Header';
import MainPageApp from './MainPageApp';
import WheelPageApp from './WheelPageApp';
import RoulettePageApp from './RoulettePageApp';
import SlotsPageApp from './SlotsPageApp';
import RegisterPageApp from './RegisterPageApp';
import ProfilePageApp from './ProfilePageApp';

import { SetFuncOnLoad, isUserDataLoaded, UpdateBalance, UpdateOverallStatistics } from './data';

export const AppContext = createContext();

export default function App() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    SetFuncOnLoad(setIsDataLoaded);

    const [page, setPage] = useState('Main page');

    // Alert

    const [alertInfo, setAlertInfo] = useState({ alertType: '', funcConfirm: undefined });
    useEffect(() => {
        if (alertInfo.alertType !== '') document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'visible';
    }, [alertInfo]);

    // Balance

    const isBalanceLoaded = useRef(false);
    const [balance, setBalance] = useState(auth.currentUser ? 'Loading...' : 0);
    useEffect(() => {
        if (isBalanceLoaded.current) UpdateBalance(balance);
    }, [balance]);

    async function GetBalance() {
        const snapshot = await getDoc(doc(firestore, 'users', auth.currentUser.uid));
        if (snapshot.data()) setBalance(snapshot.data().balance);
        isBalanceLoaded.current = true;
    }

    if (auth.currentUser && !isBalanceLoaded.current) GetBalance();

    // Overall statistics

    const isOverallStatsLoaded = useRef(false);
    const [overallStatistics, setOverallStatistics] = useState([]);
    useEffect(() => {
        if (isOverallStatsLoaded.current) UpdateOverallStatistics(overallStatistics);
    }, [overallStatistics]);

    async function GetOverallStatistics() {
        const snapshot = await getDoc(doc(firestore, 'users', auth.currentUser.uid));
        if (snapshot.data()) setOverallStatistics(snapshot.data().overallStatistics);
        isOverallStatsLoaded.current = true;
    }

    if (auth.currentUser && !isOverallStatsLoaded.current) GetOverallStatistics();

    if (isDataLoaded || isUserDataLoaded) {
        return (
            <Router basename='/JTP'>
                <AppContext.Provider value={{ auth, setPage, balance, setBalance, overallStatistics, setOverallStatistics, setAlertInfo }}>
                    {page !== 'Register' && <AppBackground />}
                    <Alert alertInfo={alertInfo} setAlertInfo={setAlertInfo} />
                    {page !== 'Register' && <Header page={page} balance={balance} />}
                    <Routes>
                        <Route index element={<MainPageApp />} />
                        <Route path='/wheel' element={<WheelPageApp />} />
                        <Route path='/roulette' element={<RoulettePageApp />} />
                        <Route path='/slots' element={<SlotsPageApp />} />
                        <Route path='/register' element={<RegisterPageApp />} />
                        <Route path='/profile' element={<ProfilePageApp />} />
                    </Routes>
                </AppContext.Provider>
            </Router>
        );
    }
}
