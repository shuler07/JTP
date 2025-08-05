import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect, useRef } from 'react';

import { auth, firestore } from './firebase';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import Header from './components/Header';
import MainPageApp from './MainPageApp';
import WheelPageApp from './WheelPageApp';
import RoulettePageApp from './RoulettePageApp';
import RegisterPageApp from './RegisterPageApp';
import ProfilePageApp from './ProfilePageApp';

import { UpdateBalance } from './data';

export const AppContext = createContext();

export default function App() {
    
    // Context values

    const [page, setPage] = useState('Main page');

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

    return (
        <Router basename="/JTP">
            <AppContext.Provider
                value={{
                    auth,
                    setPage,
                    balance,
                    setBalance,
                }}
            >
                <div style={{ position: 'sticky', width: '100%', height: '0', top: '0', left: '0', zIndex: '-2' }}>
                    <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100dvh', background: 'linear-gradient(to bottom, #1a1a1a, #2c2c2c)' }}></div>
                </div>
                {page !== 'Register' && <Header page={page} balance={balance} />}
                <Routes>
                    <Route index element={<MainPageApp />} />
                    <Route path='/wheel' element={<WheelPageApp />} />
                    <Route path='/roulette' element={<RoulettePageApp />} />
                    <Route path='/register' element={<RegisterPageApp />} />
                    <Route path='/profile' element={<ProfilePageApp />} />
                </Routes>
                {page !== 'Register' && (
                    <pre>
                        <button onClick={() => signOut(auth)}>Sign out</button>
                    </pre>
                )}
            </AppContext.Provider>
        </Router>
    );
}
